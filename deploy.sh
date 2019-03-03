#!/bin/bash

# Install modules
#npm install

# Build web
# npm run web-build

# Install Java
wget -O jdk.tar.gz https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_linux-x64_bin.tar.gz
tar -xf jdk.tar.gz
ls

# Install Android SDK
#wget --output-file=sdk.zip https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
#unzip sdk.zip
#sdkmanager "platform-tools" "platforms;android-28"


#wget https://dl.google.com/android/repository/android-ndk-r19b-linux-x86_64.zip


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
#ls | grep -v build | parallel rm