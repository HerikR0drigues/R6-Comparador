# Comparador de média de kills na ranked no jogo Rainbow Six Siege

Desenvolvido por: **Herik Trombetta Rodrigues**

## Descrição
Este repositório contém o código desenvolvido comparar média de kills na ranked fornecendo o nickname de dois jogadores no jogo Rainbow Six

## Estrutura do Projeto
- `backend` - Relacionado ao Node.
- `frontend` - Relacionado ao react.
- `docs` - Arquivos para colocar a página do site no ar.

## Tecnologias utilizadas
React + NodeJS + Tailwind

## Como funciona
Voce fornece os dois nicknames dos jogadores (podem ser de plataformas diferentes, basta voce selecionar a plataforma adequada), clica no botão de comparar e ele retona uma mensagem dizendo quem é melhor e a média de cada.

## Por debaixo dos panos
O script faz uma raspagem de dados no site "https://r6.tracker.network/r6siege/profile/{plataforma}/{nickname}/overview" com o nickname e plataforma informados nos dois players.

## Observações
- Para qualquer tipo de erro será retornada uma mensagem "Erro ao buscar dados. Por favor, tente novamente." (Dentre os erros possíveis são: algum nickname errado, plataforma do nickname errada)
- O site se encontra um poulo lento na requisição pois o backend está hospedado em um domínio grátis.
- Resposta padrão esperada: "nickname1 é melhor que nickname2 com base na média de kills por ranked (4.78 vs 3.31)"
