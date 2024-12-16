# Build in Node 20
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Verify the build output
RUN echo "Contents of /app/.svelte-kit/output/server:" && ls -l /app/.svelte-kit/output/server

FROM node:20-slim AS production

WORKDIR /app

COPY --from=build /app/.svelte-kit/output/server ./build
COPY package*.json ./

RUN npm install --omit=dev

EXPOSE 3000

CMD [ "node", "./build/index.js" ]
