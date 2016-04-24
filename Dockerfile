FROM node:4.4.3
MAINTAINER Anton Weiss <anton@otomato.link>
LABEL Description="Serve left-padded strings"
WORKDIR /var/www
ADD . /var/www
CMD npm install && npm start
