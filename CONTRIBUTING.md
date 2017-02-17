# Contribuindo

Este projeto é baseado na teoria de _Crowdsourcing Database_. Isto significa que
o banco de dados disponibilizado é mantido pela própria comunidade,
possibilitando que qualquer pessoa adicione ou atualize as informações aqui
presentes.

Muito obrigado pelo interesse em contribuir com este projeto. Com o esforço de
todos, podemos construir a maior e melhor base de informações de CEPs do Brasil.

## Informando um Problema

Encontrou algum problema? Você não precisa saber programar para ajudar neste
projeto. Por favor, [adicione uma nova
_issue_](https://github.com/carteiro/ceps/issues/new), informando o problema.
Adicione no conteúdo da solicitação o máximo de informações possíveis, como
número de CEP inválido, nome de arquivos com possíveis erros ou problemas na
estrutura do documento `JSON` descrito.

## Estrutura do Repositório

Este projeto é controlado através de _tags_ no formato de versionamento
semântico, com 2 _branches_ principais: `master` e `develop`. Todas as _tags_
representam informações estáveis e a última _tag_ sempre aponta para o _branch_
`master`. Todos os _branches_ deverão ter como _fork_ o _branch_ `master` e
sofrem _merge_ no _branch_ `develop`. Quanto uma _tag_ é criada, todos os
_branches_ que não sofreram _merge_ deverão receber um _rebase_ no _branch_
`master`.

Isto quer dizer que todos os _branches_ devem sair da última versão estável e
devem receber _merge_ no _branch_ de desenvolvimento. Quanto todas as tarefas do
_milestone_ atual forem finalizadas, então o _branch_ principal será
sincronizado com o desenvolvimento, fazendo com que o _branch_ principal
represente sempre a última versão do projeto.
