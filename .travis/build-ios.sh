#!/bin/bash


set -e

# Decode certificates and mobile provision.
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in curb-developer.cer.enc -d -a -out curb-developer.cer
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in curb-development-key.cer.p12.enc -d -a -out curb-development-key.cer.p12
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in curb.mobileprovision.enc -d -a -out curb.mobileprovision

# Create keychain to store certificates.
security create-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security default-keychain -s ios-build.keychain
security unlock-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security set-keychain-settings -t 3600 -l ~/Library/Keychains/ios-build.keychain

# Import certificates to keychain.
security import curb-apple.cer -k ios-build.keychain -A
security import curb-developer.cer -k ios-build.keychain -A
security import curb-development-key.cer.p12 -k ios-build.keychain -P "$DEV_KEY_PASSWORD" -A

# Copy mobile provision.
mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
cp curb.mobileprovision ~/Library/MobileDevice/Provisioning\ Profiles/

# Build .xcarchive using `Release` configuration, then create .ipa from it.
xcodebuild -quiet archive -project curb.xcodeproj -scheme curb -configuration Release -archivePath curb.xcarchive
xcodebuild -quiet -exportArchive -archivePath curb.xcarchive -exportOptionsPlist exportOptions.plist -exportPath "export"
