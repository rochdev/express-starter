FROM node:6-alpine

RUN apk add --no-cache tini

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn --pure-lockfile && yarn cache clean

COPY . /usr/src/app/

EXPOSE 8080
USER node

ENTRYPOINT ["/sbin/tini", "--"]
CMD [ "node", "server" ]
