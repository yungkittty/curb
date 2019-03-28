#!/bin/bash


set -e

# ...
zip -q -r symbols.zip app/build/intermediates/symbols/release/R.txt

# ...
bash ../.travis/deploy-mobile.sh app/build/outputs/apk/release/app-release.apk symbols.zip
