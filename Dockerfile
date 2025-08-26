# Stage 1: Install dependencies
FROM node:18 AS prebuilt

WORKDIR /app

# Copy only package files to leverage caching
COPY package*.json ./

RUN npm install

# Stage 2: Final image
FROM node:18-alpine

WORKDIR /app

# Copy node_modules and package.json from prebuilt stage
COPY --from=prebuilt /app/node_modules ./node_modules
COPY --from=prebuilt /app/package*.json ./

# Copy rest of the source code
COPY . .


CMD ["npm", "run", "dev"]
