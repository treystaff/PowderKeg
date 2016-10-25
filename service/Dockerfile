FROM python:3.5-alpine

COPY cmd.sh /home/
COPY pkc /home/

RUN apk update \
	&& apk add gcc
	&& pip3 install musl-dev \
	&& pip3 install eventlet \
	&& pip3 install flask-socketio \
	&& rm /var/cache/apk/*

WORKDIR /home/

CMD ["./cmd.sh"]
