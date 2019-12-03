#!/bin/bash

bucket=$1

aws --profile vibrant s3 ls "s3://${bucket}"

if [[ $? -ne 0 ]]; then
    aws --profile vibrant s3 mb "s3://${bucket}" --region "us-east-1"
    aws --profile vibrant s3 website "s3://${bucket}/" --index-document index.html --error-document index.html
fi

aws --profile vibrant s3 ls "s3://${bucket}-cloudfront-logs"

if [[ $? -ne 0 ]]; then
    aws --profile vibrant s3 mb "s3://${bucket}-cloudfront-logs" --region "us-east-1"
fi
