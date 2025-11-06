# 📔 Diário de Bordo: Projeto Thalita Esteticista

## 1. Mudança de Rota e Organização Inicial

O projeto começou focado em um site para uma academia, mas a falta de comunicação e de informações claras por parte do proprietário nos forçou a uma **mudança de tema** importante. Rapidamente, fechamos uma parceria com uma esteticista.

Com o novo tema, realizamos uma reunião no Discord para alinhar tudo, definindo as **12 páginas** de conteúdo e dividindo as tarefas entre os membros. Em seguida, o **Gustavo** criou o repositório no GitHub. Dividimos o trabalho: cada um ficou responsável por algumas páginas HTML e enviava os códigos para ele integrar e atualizar no repositório.

Uma dificuldade que percebemos logo no começo foi a **parte visual**. Encontrar ideias para o *design* das páginas, decidir quais informações seriam mais relevantes e o que o site faria levou um tempo considerável para que pudéssemos alinhar tudo.

Mesmo o CSS não sendo obrigatório para a primeira entrega, o Gustavo, por ter um conhecimento prévio, adiantou o estilo (`style.css`) das páginas **Home** e **Serviços** para já estabelecer a identidade visual.

Já na parte do **CSS**, cada um ficou responsável por **estilizar a sua própria parte**. Tivemos algumas ideias diferentes, como **fazer a avaliação por estrelas** e **colocar efeitos em alguns cards**, mas no começo não sabíamos como fazer.  
Pesquisamos bastante e conseguimos resolver algumas coisas sozinhos, porém outras exigiram uma **call no Discord** para tentarmos juntos — e assim conseguimos, mesmo sendo um pouco difícil.  
Depois que todos entregaram suas partes, fizemos **outra call** para **avaliar o site completo**, verificar se estava tudo certo e se era necessário mudar algo. Nesse momento, **alteramos algumas cores** para deixar o visual **mais padronizado** e também ajustamos a **aparência de algumas páginas**.

---

## 2. Escolha de Hospedagem e Domínio

Na fase de orçamento, a meta era encontrar uma solução de hospedagem que oferecesse **custo zero** e alta qualidade técnica para um site estático:

- **Decisão de Hospedagem:** Escolhemos o **Netlify (Plano Gratuito)**. Ele nos atendeu perfeitamente, pois oferece 100 GB/mês de largura de banda e certificado SSL gratuito, garantindo a segurança e o desempenho do site sem custo anual.  
- **Decisão de Domínio:** O registro **.com.br** foi a melhor escolha. Além de ser o mais adequado para o público brasileiro, após a análise, ele se mostrou o mais acessível, com o **custo de renovação mais barato** (R$ 60,00/ano), o que é ótimo para a manutenção futura do site.

---

## 3. O Desafio Final: A Validação do Código

A maior dificuldade técnica aconteceu na reta final: a **validação no W3C Validator**, onde o código precisou de ajustes finos:

- **Dificuldade de Semântica:** O validador apontou que estávamos usando as tags `<section>` e `<article>` de forma redundante ou incorreta em algumas páginas. A solução foi limpar a estrutura, **eliminando a tag `<section>`** e garantindo que o título (`<h2>`) fosse movido para dentro da tag `<article>`, o que é o padrão semântico ideal.  
- **Dificuldade de Sintaxe:** O validador identificou um aviso sobre a barra final (`/`) na tag de imagem. Para deixar o código 100% limpo, removemos essa barra de todas as tags `<img>` em todas as **12 páginas**, aderindo ao padrão mais recente do HTML5.

Com todas as correções de layout e sintaxe, as **12 páginas HTML foram validadas com sucesso**, comprovando que o código-fonte está limpo e pronto para a entrega.
