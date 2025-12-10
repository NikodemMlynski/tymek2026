# =========================
# 1️⃣ ETAP: BUILD
# =========================
FROM node:20-alpine AS build

WORKDIR /app

# kopiujemy package
COPY package*.json ./

# instalujemy zależności
RUN npm install

# kopiujemy resztę projektu
COPY . .

# budujemy produkcyjną wersję
RUN npm run build


# =========================
# 2️⃣ ETAP: SERWER (NGINX)
# =========================
FROM nginx:stable-alpine

# usuwamy domyślną konfigurację nginx
RUN rm /etc/nginx/conf.d/default.conf

# kopiujemy własną konfigurację
COPY nginx.conf /etc/nginx/conf.d

# kopiujemy zbudowaną aplikację z poprzedniego etapu
COPY --from=build /app/dist /usr/share/nginx/html

# Render używa portu 10000
EXPOSE 10000

CMD ["nginx", "-g", "daemon off;"]
