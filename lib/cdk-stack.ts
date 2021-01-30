import * as cdk from '@aws-cdk/core';
import * as path from 'path';
import { ServerlessLaravel } from 'cdk-serverless-lamp';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
  }
}
