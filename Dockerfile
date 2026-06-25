FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm@10.4.1

COPY . .

RUN pnpm install

RUN pnpm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
