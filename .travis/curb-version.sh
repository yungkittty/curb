#!/bin/bash


echo "${TRAVIS_BRANCH:-$TRAVIS_PULL_REQUEST_BRANCH}" | tr "/" "-"
