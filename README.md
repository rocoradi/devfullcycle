Docker:

// Subindo um nginx e utilizando o -p para exporta a porta 8080 do meu pc e acessando a 80 do container
docker run -p 8080:80 nginx

// Comando -d para 'desacoplar' o terminal que está executando com o container, ou seja, não ficará preso no terminal o processo. Será executado sem precisar deixar o terminal aberto.
docker run -d -p 8080:80 nginx

// Remover container
docker rm {idContainer ou nomeContainer}

// Comando --name para adicionar um nome fixo para o container
docker run -d --name nginx nginx

// Executar um comando dentro do container já rodando
docker exec nginx {ls ou bash}

// Executar o bash dentro de um container já rodando e permanecer no bash
docker exec -it nginx bash

// Fazendo bind da forma antiga entre pastas no container para compartilhar o diretorio entre Container e meu computador (ou servidor)
										  (pasta meu computador)	   (destino container)
docker run -d --name nginx -p 8080:80 -v C:/RepoEstudos/devfullcycle/:/usr/home/coradi nginx


// Fazendo bind da forma nova entre pastas no container para compartilhar o diretorio entre Container e meu computador (ou servidor)
// $(pwd) - pega o diretorio atual que esta sendo executado o terminal
docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/home/coradi nginx

// Criar volume para compartilhar entre containers
docker volume create meuvolume

// Criando container e usando o volume criado
docker run --name nginx -d --mount type=volume,source=meuvolume,target=/usr/home/coradi nginx
ou
docker run --name nginx -d -v meuvolume:/usr/home/coradi nginx

// Para matar o volume criado
docker volume prune