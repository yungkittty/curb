#!/bin/bash


set -e

# ...
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in certificates/curb-developer.certificate.enc -d -a -out certificates/curb-developer.certificate
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in certificates/curb-development-key.certificate.enc -d -a -out certificates/curb-development-key.certificate
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in certificates/curb.mobileprovision.enc -d -a -out certificates/curb.mobileprovision

# ...
security create-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security default-keychain -s ios-build.keychain
security unlock-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security set-keychain-settings -t 3600 -l ~/Library/Keychains/ios-build.keychain

# ...
security import certificates/curb-apple.certificate -k ios-build.keychain -A
security import certificates/curb-developer.certificate -k ios-build.keychain -A
security import certificates/curb-development-key.certificate -k ios-build.keychain -P "$DEV_KEY_PASSWORD" -A

# ...
security set-key-partition-list -S apple-tool:,apple: -s -k "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain > /dev/null

# ...
mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
cp certificates/curb.mobileprovision ~/Library/MobileDevice/Provisioning\ Profiles/

# ...
xcodebuild -quiet archive -project curb.xcodeproj -scheme curb -configuration Release -archivePath curb.xcarchive -allowProvisioningUpdates
xcodebuild -quiet -exportArchive -archivePath curb.xcarchive -exportOptionsPlist exportOptions.plist -exportPath \export
