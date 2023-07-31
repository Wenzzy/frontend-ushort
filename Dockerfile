FROM node:18.10-alpine as prod-deps

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn --production=true

FROM node:18.10-alpine as build
WORKDIR /app

ARG NEXT_PUBLIC_USHORT_DOMAIN
ENV NEXT_PUBLIC_USHORT_DOMAIN=$NEXT_PUBLIC_USHORT_DOMAIN

COPY . .
RUN yarn
RUN yarn build

FROM node:18.10-alpine as runner
WORKDIR /app

COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/next.config.js ./next.config.js

CMD ["yarn", "start"]