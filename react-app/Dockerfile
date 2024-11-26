# Etapa de construção
FROM node:16 AS build

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Constrói a aplicação para produção
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos de build para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia a configuração personalizada do Nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]