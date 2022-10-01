FROM node:latest
WORKDIR /apps

COPY . .
RUN npm install 
CMD ["npm","run","dev"]
