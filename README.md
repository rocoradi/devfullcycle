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

// Tipos de Network
1 - bridge: para um container se comunicar facilmente com o outro container
2 - host: ele mescla a network do docker (container) com a máquina do docker host (servidor que está instalado o docker)
3 - overlay: comunicação entre clusters diferentes (máquinas diferentes)
4 - macvlan: setar mac para o container (nao é comum de usar)
5 - none: container roda totalmente de forma isolada

// Criar rede bridge
docker network create --driver bridge minharede

// Rodar container apotando para a rede criada
docker run -dit --name ubuntu1 --network minharede bash

// Rodar o container e matar após executar
docker run rm

// Conectar container em uma network existente
docker network connect minharede ubuntu3

// Acessar de dentro do container o meu pc 
// usar o caminho http://host.docker.internal:8000 (ow a porta que esta rodando o serviço que deseja conectar)

// Comando no docker build de '-f' para passar outro Dockerfile, como por exemplo Dockerfile.prod

//Gerar imagem
// O '.' significa onde está o arquivo Dockerfile
docker build -t rodrigocoradi/nginx:prod . -f Dockerfile.prod
docker build -t rodrigocoradi/laravel:prod laravel -f laravel/Dockerfile.prod

// DOCKER COMPOSE

docker-compose up -d (subir)
docker-compose down (matar)
docker-compose ps (listar)
docker-compose up -d --build (rebuildar apenas o que mudou no Dockerfile/imagem)


//Deletar todas as imagens
docker rmi $(docker images -a -q)

//acessar bash
//db = nome do container
docker exec -it db bash

//Comando depends_on no compose serve para mostrar que um app depende do outro container
//porém ele não garante que irá esperar o container dependente subir
//Para isso, usar a lib dockerize (de dentro do container)
//comando abaixo para visualizar
dockerize -wait tcp://db:3306 -timeout 50s

//Ou utilizar a lib 'wait-for-it' , como eu usei aqui
https://github.com/codeedu/docker-wait-for-it/tree/main

//SUBIR NO DOCKERHUB
//Buildar imagem
docker build -t rodrigocoradi/fullcycle-desafiogolang .
docker login
docker push rodrigocoradi/fullcycle-desafiogolang