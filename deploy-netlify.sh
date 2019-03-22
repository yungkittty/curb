#!/bin/bash

# Deploy to Netlify
NETLIFY_OUTPUT=$(netlify deploy $([[ $CURB_VERSION == "develop" ]] && echo "--prod"); echo x)

# If Branch Preview, post preview URL in Pull Request
if [[ "$CURB_BUILD" != "production" && "$CURB_VERSION" != "develop" ]]; then
    DEPLOY_PREVIEW_URL="https://$( echo "${NETLIFY_OUTPUT%x}" | grep -o 'Live Draft Url:.*' | cut -f3- -d/ )"

    curl -q -H "Authorization: token ${GITHUB_TOKEN}" -X POST \
    -d " { \"body\": \"Preview URL:\n$DEPLOY_PREVIEW_URL\"}" \
    "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
fi;
