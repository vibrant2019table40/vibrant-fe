#!/bin/bash

aws --profile vibrant s3 sync ./dist s3://vibrant-fe --exclude "*.swp"
