# pull the official base image
FROM node:13.12.0-alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
# install application dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# add app
COPY . .
# start app
EXPOSE 3000
CMD ["npm", "start"]