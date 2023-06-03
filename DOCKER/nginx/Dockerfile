# Cria a imagem do nginx com o vim instalado
FROM nginx:latest

#Cria o diretório da aplicação
WORKDIR /app

#Instala o vim
RUN apt-get update && apt-get install vim -y

#Copia o arquivo de configuração do nginx
COPY html/ /usr/share/nginx/html/

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]