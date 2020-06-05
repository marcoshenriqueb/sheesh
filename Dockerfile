FROM nginx:stable

RUN mkdir /code
RUN mkdir /admin

COPY ./build/ /code
# COPY ../sheesh-admin/build/ /admin

COPY nginx.conf /etc/nginx/nginx.conf
