#!/bin/bash


set -e

# Archive symbols for TestFairy's crash reports.
# https://docs.testfairy.com/iOS_SDK/Uploading_dSyms_to_TestFairy.html
zip -q -r curb-symbols.zip app/build/intermediates/symbols/release/R.txt

# Rename .apk.
rename "s/app/build/outputs/apk/release/" app-release.apk curb.apk

# Upload .apk to TestFairy.
bash ../.travis/deploy-mobile.sh app/build/outputs/apk/release/curb.apk curb-symbols.zip
