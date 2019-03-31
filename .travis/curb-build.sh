#!/bin/bash


if [[ "$TRAVIS_BRANCH" == "develop" ]]; then

  echo "production"
  exit 0

fi
  
echo "developement"
