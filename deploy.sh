#!/bin/bash

apt-get update
apt-get install wget -y


# Install modules
#npm install

# Build web
# npm run web-build

# Install Java
#wget http://download.oracle.com/otn-pub/java/jdk/11.0.2+9/f51449fcd52f4d52b93a989c5c56ed3c/jdk-11.0.2_linux-x64_bin.tar.gz

# Install Android SDK
wget https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip

sdkmanager "platform-tools" "platforms;android-28"


wget https://dl.google.com/android/repository/android-ndk-r19b-linux-x86_64.zip


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

#
# Download & Install JAVA/ Android NDK for linux before build Android
#
#