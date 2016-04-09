#! /bin/sh
tmp_js='/tmp/main.js'
echo "/* GarbageReminder https://github.com/app2641/garbade_reminder */" > $tmp_js
echo "/* Version {VERSION} */" | sed -e "s/{VERSION}/`head VERSION`/g" >> $tmp_js
echo "/* (c) app2641 2016- License: MIT */" >> $tmp_js
echo "/* ------------------- */" >> $tmp_js
cat src/*.js >> $tmp_js
cat $tmp_js | sed -e "s|{GARBAGE_SPREADSHEET_ID}|$GARBAGE_SPREADSHEET_ID|" \
    -e "s|{GARBAGE_SLACK_HOOKS_URL}|$GARBAGE_SLACK_HOOKS_URL|" > dist/main.js

while getopts u OPT
do
    case $OPT in
        'u' ) gapps upload;
    esac
done

echo 'done!'
