#!/bin/bash


set -e

# ...
openssl aes-256-cbc -k "$CURB_STORE_ENCRYPT_PASSWORD" -in keystores/curb.keystore.enc -d -a -out keystores/curb.keystore

# ...
./gradlew -q -x bundleReleaseJsAndAssets assembleRelease
