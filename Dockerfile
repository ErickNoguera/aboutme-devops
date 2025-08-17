
# Usar Node.js versión 18 Alpine (más liviana)
FROM node:20-alpine 

# Establecer directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código de la aplicación
COPY . .

# Exponer el puerto 8080 (puerto por defecto de live-server)
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["npm", "start"]