#!/bin/bash


# Decrypting
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in certs/developer-cert.cer.enc -d -a -out certs/developer-cert.cer
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in certs/development-key.p12.enc -d -a -out certs/development-key.p12
openssl aes-256-cbc -k "$ENCRYPT_PASSWORD" -in certs/curb.mobileprovision.enc -d -a -out certs/curb.mobileprovision

# Create keychain
security create-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security default-keychain -s ios-build.keychain
security unlock-keychain -p "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain
security set-keychain-settings -t 3600 -l ~/Library/Keychains/ios-build.keychain

# Import Certificates to keychain
security import certs/AppleWWDRCA.cer -k ios-build.keychain -A
security import certs/developer-cert.cer -k ios-build.keychain -A
security import certs/development-key.p12 -k ios-build.keychain -P "$DEV_KEY_PASSWORD" -A

# Keychain fix
security set-key-partition-list -S apple-tool:,apple: -s -k "$CUSTOM_KEYCHAIN_PASSWORD" ios-build.keychain > /dev/null

# Import Provisioning Profile
mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
cp certs/curb.mobileprovision ~/Library/MobileDevice/Provisioning\ Profiles/
