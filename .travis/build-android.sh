#!/bin/bash


set -e

# ...
openssl aes-256-cbc -k "$CURB_STORE_ENCRYPT_PASSWORD" -in app/curb.keystore.enc -d -a -out app/curb.keystore

# ...
./gradlew -q -x bundleReleaseJsAndAssets assembleRelease
