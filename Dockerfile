FROM nginx:alpine

COPY nginx.conf /etc/nginx
COPY /public /usr/share/nginx/html
