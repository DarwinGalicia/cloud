FROM node:12-alpine
WORKDIR /app

EXPOSE 4200
ENV PATH=/app/node_modules/.bin:$PATH

COPY package*.json /app/
RUN npm install

CMD ng serve