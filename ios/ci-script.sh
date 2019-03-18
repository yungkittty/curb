#!/bin/bash

# Decrypting
openssl aes-256-cbc -k "$SECURITY_PASSWORD" -in certs/ios_development.cer.enc -d -a -out certs/ios_developent.cer
openssl aes-256-cbc -k "$SECURITY_PASSWORD" -in certs/2020_Curb.mobileprovision.cer.enc -d -a -out certs/2020_Curb.mobileprovision.cer

# Create keychain
security create-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security default-keychain -s ios-build.keychain
security unlock-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security set-keychain-settings -t 3600 -l ~/Library/Keychains/ios-build.keychain

# Import Certificates to keychain
security import certs/AppleWWDRCA.cer -k ios-build.keychain -A
security import certs/ios_development.cer -k ios-build.keychain -A
security set-key-partition-list -S apple-tool:,apple: -s -k "$SECURITY_PASSWORD" ios-build.keychain > /dev/null

# Import Provisioning Profile
mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
cp certs/2020_Curb.mobileprovision ~/Library/MobileDevice/Provisioning\ Profiles