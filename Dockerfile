FROM nginx:stable

RUN mkdir /code
RUN mkdir /admin

COPY ./build/ /code
COPY ./adminbuild/ /admin

COPY nginx.conf /etc/nginx/nginx.conf
