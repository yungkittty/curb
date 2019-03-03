#!/bin/bash

curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

docker info

# Install modules
#npm install

# Build web
# npm run web-build

# Install Java
#wget --continue --no-check-certificate -O jdk.zip --header "Cookie: oraclelicense=a" https://download.oracle.com/otn-pub/java/jdk/8u201-b09/42970487e3af4f5aa5bca3f542482c60/jdk-8u201-linux-x64.tar.gz
#unzip jdk.zip

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
ls | grep -v build | parallel rm

#
# Download & Install JAVA/ Android NDK for linux before build Android
#
#