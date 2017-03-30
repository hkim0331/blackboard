#!/bin/sh
# -*- mode: Shell-script; coding: utf-8; -*-
# update 2017-03-19.

if [ $# -ne 1 ]; then
    echo usage: $0 VERSION
    exit
else
    VERSION=$1
fi

TODAY=`date +%F`

# linux's sed is gnu sed, macos not.
if [ -e /usr/local/bin/gsed ]; then
    SED=/usr/local/bin/gsed
else
    SED=`which sed`
fi
if [ -z ${SED} ]; then
    echo can not find SED
    exit
fi

FILES="index.html"
for i in ${FILES}; do
    if [ ./$i = $0 ]; then
        continue
    fi
    if [[ $i =~ bak$  ]]; then
        continue
    fi
    ${SED} -i.bak "s/hkimura.*$/hkimura, release ${VERSION}, ${TODAY}./" $i
done

${SED} -i.bak "s/\"version\":.*$/\"version\": \"${VERSION}\",/" package.json

${SED} -i.bak "/^hkimura, release/ c\
hkimura, release ${VERSION}, ${TODAY}" README.md

echo ${VERSION} > VERSION
