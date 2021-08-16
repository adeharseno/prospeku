FROM node:10 as builder
WORKDIR /app
COPY . /app

ARG env
RUN yarn && yarn build-${env}

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
ARG env

COPY --from=builder /app/build/ /usr/share/nginx/html/
COPY --from=builder /app/robots.${env}.txt robots.txt
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]