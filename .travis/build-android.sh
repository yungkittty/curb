#!/bin/bash


set -e

# Extend inodes on linux.
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# Decodes keystore. (eg. /app/build.gradle)
openssl aes-256-cbc -k "$CURB_STORE_ENCRYPT_PASSWORD" -in app/curb.keystore.enc -d -a -out app/curb.keystore

# Builds .apk using `Release` configuration.
./gradlew -q -x bundleReleaseJsAndAssets assembleRelease
