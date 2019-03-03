#!/bin/bash

# Install modules
npm install

# Build web
npm run web-build

# Build native (Android)
react-native bundle     \
--platform android      \
--dev false             \
--entry-file index.js   \
--bundle-output android/app/src/main/assets/index.android.bundle \
--assets-dest android/app/src/main/res/

cd ./android && ./gradlew assembleRelease && cd ..
cp ./android/app/build/outputs/apk/release/app-release.apk build/app.apk

# Cleaning
ls | grep -v build | parallel rm