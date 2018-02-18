FROM node:9

RUN mkdir -p /code && chown -R node /code

USER node

WORKDIR /code 

RUN npm set progress=false
ADD package.json yarn.lock /code/
RUN yarn --pure-lockfile

ADD . .

EXPOSE 3000

CMD ["yarn", "run", "start"]