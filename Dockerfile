FROM node:18.3.0
ARG FLAG=DOCKER_DUMMY_FLAG
ARG PORT=8082

# Get random image
WORKDIR /usr/src/pt/public
COPY getImg.sh /usr/src/pt/public/getImg.sh
RUN /usr/src/pt/public/getImg.sh
RUN rm /usr/src/pt/public/getImg.sh

# Prepare node server
WORKDIR /usr/src/pt
COPY package*.json ./
RUN npm install
COPY app.js .
COPY index.html .

# Set env variable for the application
ENV PT_FLAG=${FLAG}
ENV PT_PORT=${PORT}

EXPOSE ${PORT}/tcp

ENTRYPOINT ["node", "app.js"]

