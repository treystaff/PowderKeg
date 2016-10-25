#!/bin/sh

if [ "$ENV" = "DEV" ]; then
	echo "Running Dev Server"
	flask run --host=0.0.0.0 --port 5000
else
	echo "Unsupported ENV $ENV"
	exit 1
fi
