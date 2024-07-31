# Imagen base de Nginx
FROM nginx:alpine

# Copiar los archivos del proyecto al directorio web de Nginx
COPY . /usr/share/nginx/html

EXPOSE 80