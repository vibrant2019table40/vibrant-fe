#!/bin/bash

bucket=$1

aws --profile vibrant s3 ls "s3://${bucket}"

if [[ $? -ne 0 ]]; then
    aws --profile s3 mb "s3://${bucket}" --region "us-east-2"
    aws --profile vibrant s3 website "s3://${bucket}/" --index-document index.html --error-document error.html
fi
