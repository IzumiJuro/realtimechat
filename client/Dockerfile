FROM node:lts-alpine


WORKDIR /usr/src/app
RUN rm -rf node_modules 
RUN rm -rf pnpm-lock.yaml
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install -g pnpm
RUN pnpm install && mv node_modules ../
COPY . .
EXPOSE 4200
RUN chown -R node /usr/src/app
RUN npm run dev
USER node
CMD ["npm", "start"]
