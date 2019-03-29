#!/bin/bash


set -e

# ...
ditto -c -k --keepParent -rsrc curb.xcarchive/dSYMs/curb.app.dSYM symbols.zip

# ...
bash ../.travis/deploy-mobile.sh export/curb.ipa symbols.zip
