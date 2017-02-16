# CEPs

Este projeto busca manter uma base de dados de contribuição coletiva (do inglês,
_croudsourcing database_) para códigos de endereçamento postal (CEP) do Brasil.

Através de uma estrutura de dados no formato `JSON` e arquivos com nomenclatura
padronizada, esta base de dados pode ser utilizada como dependência em projetos
que necessitam de informações atualizadas relacionadas a CEPs no país.

## Formato

Todos os arquivos com informações sobre CEPs estão armazenados no diretório
`data/` e nomeados com o padrão `/^[0-9]{8}\.json$/`. Este arquivo contém um
documento no formato `JSON` com atributos que descrevem o endereço relacionado
ao CEP. Por exemplo, o primeiro código postal do Brasil, segundo a
[Wikipédia](https://pt.wikipedia.org/wiki/C%C3%B3digo_de_Endere%C3%A7amento_Postal),
está armazenado no arquivo `data/01001000.json` e possui o seguinte conteúdo.

```json
{
    "_id": "01001000",
    "tipo": "Praça",
    "logradouro": "da Sé",
    "bairro": "Sé",
    "cidade": "São Paulo",
    "estado": "SP"
}
```

## História

A criação deste projeto surgiu com a necessidade de criar uma base de dados
atualizada para CEPs, independente de Correios ou qualquer tipo de Web Services.

## Licença

Esta base de dados é _opensource_ e está disponível sob a licença MIT, descrita
no arquivo [`LICENSE`](https://github.com/carteiro/ceps/blob/master/LICENSE).
