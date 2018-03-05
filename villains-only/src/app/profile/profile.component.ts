import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { PictureService } from '../services/picture.service';
import { Picture } from '../model/picture.model';
import { AwsS3Service } from '../services/aws-s3.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  isInEditMode = false;

  constructor(private userService: UserService, private pictureService: PictureService, private s3Service: AwsS3Service) { }

  ngOnInit() {
    this.user = this.userService.getLoggedInUser();
  }

  editProfile(): void {
    this.isInEditMode = true;
  }

  cancelEditingProfile(): void {
    this.isInEditMode = false;
    this.user = this.userService.getLoggedInUser();
    let profilePic: HTMLImageElement = <HTMLImageElement>document.getElementById('profilePic');
    profilePic.src = this.user.profilePic;
  }

  submitProfileChanges(): void {
    let fileInput: HTMLInputElement = <HTMLInputElement>document.getElementById("profilePicInput");
    let pictureFile: File = fileInput.files[0];

    // if there is a file to change
    if (pictureFile) {
      // add picture to db to get unique id to build url
      let picture: Picture = new Picture(0, null, pictureFile.name);
      this.pictureService.addPicture(picture).subscribe(
        message => {
          console.log('from submit profile changes message:');
          this.pictureService.getPictureByUrl(pictureFile.name).subscribe(
            resultPicture => { // get id for pic from db and build pic url with it
              picture = resultPicture;
              let uniqueId = picture.pictureId;

              let fileName = pictureFile.name;
              let fileExtension = '';
              if (fileName.lastIndexOf(".") != -1) {
                let periodIndex = fileName.lastIndexOf(".");
                fileName = pictureFile.name.substring(0, periodIndex);
                fileExtension = pictureFile.name.substring(periodIndex);
              }

              let finalFileName = fileName + uniqueId + fileExtension;
              let finalFile: File = new File([pictureFile], finalFileName);
              let finalUrl = this.s3Service.getBaseUrl() + finalFileName;

              picture.pictureUrl = finalUrl;
              this.pictureService.editPicture(picture).subscribe();
              this.pictureService.addPictureToS3(finalFile, (error, data) =>{
                this.user.profilePic = finalUrl; // need picture on s3 before it can be assigned to user
                this.userService.updateUserCookie(this.user);
                this.userService.editProfile(this.user).subscribe();
              });
            }
          )
        },
        error => {
          console.log('from submit profile changes error:')
          console.log(error);
        }
      );
    }

    this.userService.editProfile(this.user).subscribe(message => console.log(message));
    this.isInEditMode = false;
  }

  changePic(profilePicInput: HTMLInputElement, profilePic: HTMLImageElement): void {
    let file = profilePicInput.files[0];
    let reader = new FileReader();

    reader.addEventListener("load", function () {
      profilePic.src = reader.result;
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
