#!/bin/bash
npm run build
docker build --tag=sheesh_website .
docker tag sheesh_website marcoshenriqueb/sheesh_website:latest
docker push marcoshenriqueb/sheesh_website:latest