FROM node:18
WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .
EXPOSE 3001
ARG ENV_FILE
ENV ENV_FILE=$ENV_FILE
CMD ["npm", "start"]