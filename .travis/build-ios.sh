#!/bin/bash


set -xe

# Decodes certificates and mobile provision.
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in curb-developer.cer.enc -d -a -out curb-developer.cer
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in curb-development-key.cer.p12.enc -d -a -out curb-development-key.cer.p12
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in curb.mobileprovision.enc -d -a -out curb_old.mobileprovision

# Creates keychain to store certificates.
security create-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security default-keychain -s ios-build.keychain
security unlock-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security set-keychain-settings -t 3600 -l ~/Library/Keychains/ios-build.keychain

# Imports certificates to keychain.
security import curb-apple.cer -k ios-build.keychain -A
security import curb-developer.cer -k ios-build.keychain -A
security import curb-development-key.cer.p12 -k ios-build.keychain -P "$DEV_KEY_PASSWORD" -A

# Allows codesigning.
# https://stackoverflow.com/a/40039594
security set-key-partition-list -S apple-tool:,apple: -s -k "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain

# Copies mobile provision.
mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
ls -la
cp curb.mobileprovision ~/Library/MobileDevice/Provisioning\ Profiles/

# Builds .xcarchive using `Release` configuration, then create .ipa from it.
xcodebuild -quiet archive -project curb.xcodeproj -scheme curb -configuration Release -archivePath curb.xcarchive PROVISIONING_PROFILE="01e34f5f-a6bf-4c4c-aa50-5a9c5d4d7c97"
xcodebuild -quiet -exportArchive -archivePath curb.xcarchive -exportOptionsPlist exportOptions.plist -exportPath "export"
