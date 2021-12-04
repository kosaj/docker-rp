## NODE SETUP
FROM node:16-alpine as build-stage
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
# 403 was caused by invalid copy of builds
# nginx was hosting example-client where index.html
# should be available
RUN npm run build -- --outputPath=dist

## NGINX SETUP
FROM nginx:latest as production-stage
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
# YOU OVERRIDE DEFAULT CONFIGURATION OF NGINX
# YOU SHOULD EXTEND THE CONFIGURATION UPDATING
# FOR EXAMPLE /etc/nginx/conf.d/default.conf
# IN THAT CASE http {} DIRECTIVE IS NOT NEEDED.
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /app/dist .
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
