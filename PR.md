# Persistência de dados
Primeiramente, ao receber o dataset foi neceessário converte-lo para um formato de fácil inserção no mongodb.
De seguida, foram feitos alguns tratamento ao json obtido.

Primeiro foram alterado os nomes de alguns campos:
"idcontrato" -> "_id"
"NIPC_entidade_comunicante" -> "NIPC_entidade"
"entidade_comunicante" -> "entidade"

De seguida, houve alguns campos em que foi necessário mudar o seu tipo de dados:
precoContratual: String -> Number

# Setup da base de dados
Durante o desenvolvimento das aplicações, foi utilizado um `docker-compose.yml` que se encontra dentro do `/ex1` para facilmente introduzir os dados num mongodb.
Para correr essa base dados, basta passar a path do ficheiro json lá para dentro e correr com:
```
docker-compose up -d
```

# Instruções de execução das aplicações desenvolvidas

Para executar as aplicações desenvolvidas foi desenvolvido um `docker-compose.yml` para facilmente se executar a aplicação.
Para tal, basta correr:
```
docker-compose up --build
```

Para parar a aplicação:
```
docker-compose down
```
O backend estará disponível no `http://localhost:16000` e o frontend em `http://localhost:16001`.

De notar que é necessário ter o ficheiro `dataset.json` na root do projeto para a inserção dos dados ser feita corretamente.
