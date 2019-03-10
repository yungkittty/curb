#!/bin/bash


# Initializing variables
export HEAD_BRANCH=$(echo $HEAD | tr '/' '-')

# Install modules
npm install

# Build web
npm run web-build

# Zip mobile
zip -q -x \*.git\* -x "/\node_modules/*" -x "/\build/*" -r curb.zip .

# Send mobile
curl -s -X POST -F file=@curb.zip -o build/static/curb-$HEAD_BRANCH.apk -m 780 $BUILD_SERVER
