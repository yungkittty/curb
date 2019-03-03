#!/bin/bash


# Install modules
npm install

# Build web
# npm run web-build

# Install Java
#wget -q -O jdk.tar.gz https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_linux-x64_bin.tar.gz
#tar -xf jdk.tar.gz

# Install Android SDK
wget -q -O sdk.zip https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
mkdir sdk && mv sdk.zip sdk && cd sdk && unzip -qq sdk.zip
yes | ./tools/bin/sdkmanager "build-tools;27.0.3" "platforms;android-27" &> /dev/null
yes | ./tools/bin/sdkmanager --licenses &> /dev/null
cd ..

# Install NDK
wget -q -O ndk.zip https://dl.google.com/android/repository/android-ndk-r19b-linux-x86_64.zip
unzip -qq ndk.zip

#cd android-ndk-r19b && ls
echo ---------------- STATUS ---------------


# Clearup before mobile build
rm -rf jdk.tar.gz sdk.zip ndk.zip
df -h

# Export variables for mobile build
export ANDROID_HOME=/opt/build/repo/sdk/


# Build native (Android)
#react-native bundle                                                 \
#--platform android                                                  \
#--dev false                                                         \
#--entry-file index.js                                               \
#--bundle-output android/app/src/main/assets/index.android.bundle    \
#--assets-dest android/app/src/main/res/

cd ./android && ./gradlew assembleRelease && cd ..
#cp ./android/app/build/outputs/apk/release/app-release.apk build/app.apk

# Cleaning
#ls | grep -v build | parallel rm