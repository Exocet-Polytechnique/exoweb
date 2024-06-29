# Builder
FROM node:22-alpine as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY ./public ./public
COPY ./src ./src

RUN npm run build

# Production
FROM nginx:alpine as production

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
