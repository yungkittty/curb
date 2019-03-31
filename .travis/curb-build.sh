#!/bin/bash


if [[ "${TRAVIS_PULL_REQUEST_BRANCH:-$TRAVIS_BRANCH}" == "develop" ]]; then

  echo "production"
  exit 0

fi
  
echo "development"
