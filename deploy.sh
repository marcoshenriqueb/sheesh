#!/bin/bash
npm run build
rm -r ./adminbuild/*
cp -r /var/www/docker/sheesh-adm/admin/build/* ./adminbuild/
docker build --tag=sheesh_website .
docker tag sheesh_website marcoshenriqueb/sheesh_website:latest
docker push marcoshenriqueb/sheesh_website:latest