FROM node:10-alpine

#Create app directory
WORKDIR /usr/src/app

#Install app dependencies
#A wildcard is uses to ensure both package.json AND package-lock.json are copied
#where available (npm@5+)
COPY package*.json ./

RUN npm install

#If you are buildin your code for production
#RUN npm ci --only=production

#Bundle app source
COPY . .

EXPOSE $PORT

CMD [ "npm" , "start" ]