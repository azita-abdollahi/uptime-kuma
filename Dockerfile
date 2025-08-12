FROM node:lts-alpine3.19 AS base
WORKDIR /app

# Install dependencies in a separate stage for better caching
FROM base AS deps
COPY package*.json ./
RUN npm ci --only=production


FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# If you have a build step (like React, Next.js, etc.), uncomment:
# RUN npm run build

FROM node:lts-alpine3.19 AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app ./

EXPOSE 3000

# Run the app
CMD ["npm", "start"]
