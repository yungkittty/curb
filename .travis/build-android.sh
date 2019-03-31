#!/bin/bash


set -e

# Decode keystore. (eg. /app/build.gradle)
openssl aes-256-cbc -k "$CURB_STORE_ENCRYPT_PASSWORD" -in app/curb.keystore.enc -d -a -out app/curb.keystore

# Build .apk using `Release` configuration.
./gradlew -q -x bundleReleaseJsAndAssets assembleRelease
