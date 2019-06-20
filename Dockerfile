FROM nginx:stable

RUN mkdir /code

COPY ./build/ /code

COPY nginx.conf /etc/nginx/nginx.conf
