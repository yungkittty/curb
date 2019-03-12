#!/bin/bash

# Print executed commands in the terminal
set -xe

echo $ANDROID_HOME

sudo apt-get install -y which
which sdkmanager

# Initializing variables
export HEAD_BRANCH=$(echo ${TRAVIS_PULL_REQUEST_BRANCH:-$TRAVIS_BRANCH} | tr '/' '-')

# Increasing INODES
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# Build web
npm run web-build

# Link RN
react-native link

# Build mobile
react-native bundle                                                 \
--platform android                                                  \
--dev false                                                         \
--entry-file index.js                                               \
--bundle-output android/app/src/main/assets/index.android.bundle    \
--assets-dest android/app/src/main/res/

react-native link

chmod +x android/gradlew
cd android && ./gradlew -q -x bundleReleaseJsAndAssets assembleRelease && cd ..

# Copy Android APK to web build
cp "android/app/build/outputs/apk/release/app-release.apk" "build/static/curb-${HEAD_BRANCH}.apk"

# Send APK to TestFairy
chmod +x testfairy-uploader.sh && ./testfairy-uploader.sh "build/static/curb-${HEAD_BRANCH}.apk"

# Deploy to Netlify
NETLIFY_OUTPUT=$(netlify deploy $([[ $HEAD_BRANCH == "develop" ]] && echo "--prod"); echo x)
if [[ $HEAD_BRANCH != "develop" ]]; then
    DEPLOY_PREVIEW_URL="https://$( echo "${NETLIFY_OUTPUT%x}" | grep -o 'Live Draft Url:.*' | cut -f3- -d/ )"

    curl -q -H "Authorization: token ${GITHUB_TOKEN}" -X POST \
    -d " { \"body\": \"Preview URL:\n$DEPLOY_PREVIEW_URL\"}" \
    "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
fi;
