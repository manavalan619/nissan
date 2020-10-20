FROM node:10.14.2
COPY . /app
WORKDIR /app
RUN npm install
RUN npm install -g @angular/cli
RUN npm install -g serve
RUN npm install -g concurrently
RUN npm upgrade -g @angular/cli
CMD ng build  && concurrently "ng build --watch" "serve dist/quoteomatictest"
EXPOSE 5000

