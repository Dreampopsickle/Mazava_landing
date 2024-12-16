# Build in Node 20
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-slim AS production

WORKDIR /app

COPY --from=build /app/.svelte-kit/output ./build
COPY package*.json ./

RUN npm install --omit=dev

EXPOSE 3030

CMD ["node", "./build/index.js", "--host"]
