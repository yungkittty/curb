#!/bin/bash

# Install modules
npm install

# Build web
npm run web-build

# Zip mobile 
zip -q -x \*.git\* -x "/\node_modules/*" -x "/\build/*" -r curb.zip .

#env

# Send mobile
curl -X POST -F file=@curb.zip -o build/app.apk -m 900 51.38.49.133:8997