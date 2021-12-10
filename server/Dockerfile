#specify node version and Imag
FROM node:16 AS development

#Specify Working directory inside container
WORKDIR /ola/src/app

#Copy package-lock.json and package.json file from host to inside container working directory
COPY package*.json ./

#install packages inside container and build tha application
RUN npm install

RUN npm run build

EXPOSE 3000

###############
## PRODUCTION ##
###############
#Build another image name production
FROM node:16 As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

#Set working directory
WORKDIR /ola/src/app

COPY --from=development /ola/src/app/ .

EXPOSE 3000

#run app
CMD ["node", "dist/main"]
