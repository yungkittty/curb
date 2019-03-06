#!/bin/bash


# Install modules
npm install

# Build web
npm run web-build

# Zip mobile 
zip -q -x \*.git\* -x "/\node_modules/*" -x "/\build/*" -r curb.zip .

# Send mobile
curl -s -X POST -F file=@curb.zip -o build/static/curb-$HEAD.apk -m 780 $BUILD_SERVER