#
# Copyright 2020 Pejman Ghorbanzade. All rights reserved.
#

# limit request sizes
client_max_body_size 20m;

# reverse proxy to redirect all https requests to private 8080 port
server {

  server_name pejman.ghorbanzade.com;

  location / {
    proxy_pass http://localhost:8080;
  }

  listen [::]:443 ssl;
  listen 443 ssl;
  ssl_certificate /etc/letsencrypt/live/ghorbanzade.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/ghorbanzade.com/privkey.pem;
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

}

# redirect http requests to https
server {

  listen 80;
  listen [::]:80;

  server_name pejman.ghorbanzade.com;
  return 301 https://$host$request_uri;

}

# redirect other url formats to pejman.ghorbanzade.com
server {

  listen 80;
  listen [::]:80;

  server_name "~^(www.)?ghorbanzade.com$" www.pejman.ghorbanzade.com;
  return 301 http://pejman.ghorbanzade.com$request_uri;

}
