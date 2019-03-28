#!/bin/bash


# Decrypting
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in certificates/developer-cert.cer.enc -d -a -out certificates/developer-cert.cer
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in certificates/development-key.p12.enc -d -a -out certificates/development-key.p12
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in certificates/curb.mobileprovision.enc -d -a -out certificates/curb.mobileprovision

# Create keychain
security create-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security default-keychain -s ios-build.keychain
security unlock-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security set-keychain-settings -t 3600 -l ~/Library/Keychains/ios-build.keychain

# Import Certificates to keychain
security import certificates/AppleWWDRCA.cer -k ios-build.keychain -A
security import certificates/developer-cert.cer -k ios-build.keychain -A
security import certificates/development-key.p12 -k ios-build.keychain -P "$DEV_KEY_PASSWORD" -A

# Keychain fix
security set-key-partition-list -S apple-tool:,apple: -s -k "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain > /dev/null

# Import Provisioning Profile
mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
cp certificates/curb.mobileprovision ~/Library/MobileDevice/Provisioning\ Profiles/
