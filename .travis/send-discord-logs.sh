#!/bin/bash

if [ -z "$2" ]; then
  echo -e "WARNING!!\nYou need to pass the WEBHOOK_URL environment variable as the second argument to this script.\nFor details & guide, visit: https://github.com/DiscordHooks/travis-ci-discord-webhook" && exit
fi

echo -e "[Webhook]: Sending webhook to Discord...\\n";

case $1 in
  "success" )
    EMBED_COLOR=3066993
    STATUS_MESSAGE="Passed"
    AVATAR="https://travis-ci.org/images/logos/TravisCI-Mascot-blue.png"
    ;;

  "failure" )
    EMBED_COLOR=15158332
    STATUS_MESSAGE="Failed"
    AVATAR="https://travis-ci.org/images/logos/TravisCI-Mascot-red.png"
    ;;

  * )
    EMBED_COLOR=0
    STATUS_MESSAGE="Status Unknown"
    AVATAR="https://travis-ci.org/images/logos/TravisCI-Mascot-1.png"
    ;;
esac

AUTHOR_NAME="$(git log -1 "$TRAVIS_COMMIT" --pretty="%aN")"
COMMITTER_NAME="$(git log -1 "$TRAVIS_COMMIT" --pretty="%cN")"
COMMIT_SUBJECT="$(git log -1 "$TRAVIS_COMMIT" --pretty="%s")"
COMMIT_MESSAGE="$(git log -1 "$TRAVIS_COMMIT" --pretty="%b")" | sed -E ':a;N;$!ba;s/\r{0,1}\n/\\n/g'

if [ "$AUTHOR_NAME" == "$COMMITTER_NAME" ]; then
  CREDITS="$AUTHOR_NAME authored & committed"
else
  CREDITS="$AUTHOR_NAME authored & $COMMITTER_NAME committed"
fi

if [[ $TRAVIS_PULL_REQUEST != false ]]; then
  URL="https://github.com/$TRAVIS_REPO_SLUG/pull/$TRAVIS_PULL_REQUEST"
else
  URL=""
fi

TIMESTAMP=$(date --utc +%FT%TZ)
WEBHOOK_DATA='{
  "username": "",
  "avatar_url": "https://travis-ci.org/images/logos/TravisCI-Mascot-1.png",
  "embeds": [ {
    "color": '$EMBED_COLOR',
    "author": {
      "name": "Build #'"$TRAVIS_BUILD_NUMBER"' '"$STATUS_MESSAGE"' - '"$TRAVIS_REPO_SLUG"'",
      "url": "'"$TRAVIS_BUILD_WEB_URL"'",
      "icon_url": "'$AVATAR'"
    },
    "title": "'"${COMMIT_MESSAGE//$'\n'/ }"\\n\\n"$CREDITS"'",
    "url": "'"$URL"'",
    "fields": [
      {
        "name": "Travis Job",
        "value": "'"[#$TRAVIS_BUILD_NUMBER]($TRAVIS_BUILD_WEB_URL)"'",
        "inline": true
      },
      {
        "name": "Pull Request",
        "value": "'"[$TRAVIS_PULL_REQUEST_BRANCH]($URL)"'",
        "inline": true
      }
    ],
    "timestamp": "'"$TIMESTAMP"'"
  } ]
}'

(curl --fail --progress-bar -A "TravisCI-Webhook" -H Content-Type:application/json -H X-Author:k3rn31p4nic#8383 -d "$WEBHOOK_DATA" "$2" \
  && echo -e "\\n[Webhook]: Successfully sent the webhook.") || echo -e "\\n[Webhook]: Unable to send webhook."
