FROM node:10.15.1
MAINTAINER joy
RUN mkdir /home/web
COPY  node_modules ./home/web/node_modules/
COPY  dist ./home/web/dist/
COPY  app.js ./home/web/app.js
WORKDIR ./home/web/
CMD node app