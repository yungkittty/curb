#!/bin/bash


set -e

# Archive symbols for TestFairy's crash reports.
# https://docs.testfairy.com/iOS_SDK/Uploading_dSyms_to_TestFairy.html
ditto -c -k --keepParent -rsrc curb.xcarchive/dSYMs/curb.app.dSYM curb-symbols.zip

# Upload .ipa to TestFairy.
bash ../.travis/deploy-mobile.sh export/curb.ipa curb-symbols.zip
