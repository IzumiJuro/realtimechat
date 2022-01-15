FROM node:lts-alpine as development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install -g pnpm
RUN pnpm install && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]


FROM node:lts-alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}}
WORKDIR /usr/src/app
COPY --from=development /usr/src/app .
EXPOSE 8080
CMD [ "node" ,"dist/main"]