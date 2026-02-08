# použi oficiálny Node.js od verzie 18 image ako základ
FROM node:18

# pracovný adresár v kontajneri
WORKDIR /app

# skopíruj package.json a package-lock.json (ak existuje) do pracovneho adresára
COPY package*.json ./

# nainštaluj dependencies
RUN npm install

# skopíruj zvyšok projektu
COPY . .

# otvor port
EXPOSE 3000

# spusti server
CMD ["npm", "start"]
