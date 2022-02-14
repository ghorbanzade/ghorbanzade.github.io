FROM nginx:1.15-alpine

LABEL maintainer="pejman@ghorbanzade.com"

COPY webapp/dist/webapp         /www/data
COPY deploy/nginx/default.conf  /etc/nginx/conf.d/default.conf

RUN chown -v -R nginx:nginx /www/data
