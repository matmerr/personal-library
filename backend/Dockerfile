FROM node as node-build
WORKDIR /app
COPY . .
RUN yarn
CMD ["sh", "-c", "yarn nodemon server.js --exec babel-node --presets es2015,stage-0"]
EXPOSE 80