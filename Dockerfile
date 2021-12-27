FROM node:14-alpine3.12 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3000
RUN yarn run build

FROM node:alpine 
WORKDIR /app
COPY --from=builder /app/build ./build
RUN yarn global add serve
CMD ["serve", "-l", "3000", "-s", "build"]