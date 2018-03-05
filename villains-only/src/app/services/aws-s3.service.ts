import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class AwsS3Service {
  private region = 'us-east-2';
  private bucketName = 'goat-pics-bucket';
  private key = 'pics';
  private acl = 'public-read';


  constructor() { }
  public uploadFile(file: File, callback:(err: Error, data: S3.ManagedUpload.SendData) => void) {
    const bucket = new S3(
      {
        accessKeyId: 'AKIAI4UJZPKYNGSUBCXA',
        secretAccessKey: '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',
        region: this.region
      }
    );

    const params = {
      Bucket: this.bucketName,
      Key: this.key + '/' + file.name,
      Body: file,
      ACL: this.acl,
    };

    bucket.upload(params, callback);
  }

  public getRegion(): string {
    return this.region;
  }

  public getBucketName() : string {
    return this.bucketName;
  }

  public getKey() : string {
    return this.key;
  }

  public getAcl() : string {
    return this.acl;
  }

  /**
   *  Gets the base url (without file name) for our s3 picture storage
   */
  public getBaseUrl(): string {
    return 'https://s3.' + this.region + '.amazonaws.com/' + this.bucketName + '/' + this.key + '/';
  }
}
