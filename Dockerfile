FROM node:16-slim as BUILDER
LABEL maintainer="Raycon Lima"

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN yarn install

COPY src ./src

FROM node:16-alpine

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/ ./

EXPOSE 3333

CMD [ "yarn", "dev" ]
