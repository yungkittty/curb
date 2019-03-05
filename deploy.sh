#!/bin/bash

env
echo "------"
ls

echo "BUILD SERVER ID $BUILD_SERVER"

# Install modules
npm install

# Build web
npm run web-build

# Zip mobile 
zip -q -x \*.git\* -x "/\node_modules/*" -x "/\build/*" -r curb.zip .

# Send mobile
curl -s -X POST -F file=@curb.zip -o build/static/curb-release.apk -m 900 $BUILD_SERVER