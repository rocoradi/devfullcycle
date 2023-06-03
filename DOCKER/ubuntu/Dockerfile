# Cria a imagem do Ubuntu com a última versão
FROM ubuntu:latest

# Comando fixo para ser executado quando container subir, não se altera via parâmetro de entrada do 'docker run'
# Variável fixa. Pode ser uma execução, pode ser um arquivo, etc.
ENTRYPOINT [ "echo","Hello" ]

# Executa um comando quando o container subir e aceita como parâmetro de entrada do 'docker run'
# Exemplo: docker run hello (vai aparecer World!) ou docker run hello Lucas (vai aparecer Lucas!)
# Variável dinâmica. Pode ser uma execução, pode ser um arquivo, etc.
CMD ["World!"]

# É possível usar o ENTRYPOINT com o CMD, mas o CMD sobrescreve o ENTRYPOINT, caso seja um arquivo do tipo .sh e tenha o parâmetro 'exec "$@"' no final do arquivo
# O CMD quase sempre será passado como um parâmetro para o ENTRYPOINT