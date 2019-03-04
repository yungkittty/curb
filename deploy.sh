#!/bin/bash

echo STEP 3:
cat /proc/sys/fs/inotify/max_user_watches

echo STEP 2:
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# Install modules
#npm install

# Build web
#npm run web-build

# Install Java
#wget -q -O jdk.tar.gz https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_linux-x64_bin.tar.gz
#tar -xf jdk.tar.gz

# Install Android SDK
wget -q -O sdk.zip https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
mkdir sdk && unzip -qq -d sdk sdk.zip
yes | ./sdk/tools/bin/sdkmanager "build-tools;27.0.3" "platforms;android-27" &> /dev/null

# Install NDK
wget -q -O ndk.zip https://dl.google.com/android/repository/android-ndk-r19b-linux-x86_64.zip
unzip -qq ndk.zip

# Clearup before mobile build
rm -rf sdk.zip ndk.zip

# Export variables for mobile build
export ANDROID_HOME=/opt/build/repo/sdk/
export ANDROID_NDK=/opt/build/repo/android-ndk-r19b/

for foo in /proc/*/fd/*; do readlink -f $foo; done | grep inotify | sort | uniq -c | sort -nr

rm -rf node_modules
rm -rf build
#npm install

for foo in /proc/*/fd/*; do readlink -f $foo; done | grep inotify | sort | uniq -c | sort -nr

npm dedupe

# Build native (Android)
#react-native bundle                                                 \
#--platform android                                                  \
#--dev false                                                         \
#--entry-file index.js                                               \
#--bundle-output android/app/src/main/assets/index.android.bundle    \
#--assets-dest android/app/src/main/res/                             \
#--reset-cache

cd ./android && ./gradlew assembleRelease && cd ..
#cp ./android/app/build/outputs/apk/release/app-release.apk build/app.apk