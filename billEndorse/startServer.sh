#!/bin/bash


function installNodeModules() {
	echo
	if [ -d node_modules ]; then
		echo "============== node modules installed already ============="
	else
		echo "============== Installing node modules ============="
		npm install
	fi
	echo
}


if [ -d logs ]; then
	echo "============== logs already existed ============="
else
	echo "============== mkdir logs ============="
	mkdir logs
fi

# start node
forever start -l logs/forever.log -o logs/out.log -e logs/err.log -a -p . app.js
