#!/bin/bash

aws --profile vibrant s3 sync ./build s3://vibrant-fe-us-east-1 --exclude "*.swp"
