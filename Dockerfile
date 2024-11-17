FROM node:22-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./

FROM base as builder
WORKDIR /app
RUN npm ci
COPY . .

EXPOSE 3001

CMD ["npm", "run", "start:prod"]