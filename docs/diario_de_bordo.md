# Diário de Bordo: Projeto Thalita Esteticista

O projeto teve início com uma proposta voltada para o desenvolvimento de um site de uma academia. No entanto, a falta de comunicação e de informações precisas por parte do proprietário acabou dificultando o andamento do trabalho. Diante dessa situação, o grupo decidiu realizar uma mudança de rota e buscar um novo tema. Foi então que surgiu a oportunidade de desenvolver um site para uma esteticista, o que se mostrou uma escolha mais viável e dentro das nossas possibilidades de execução.

Com o novo tema definido, realizamos uma reunião no Discord para alinhar todas as etapas do projeto. Nessa conversa, definimos a estrutura do site, que contaria com **12 páginas**, e organizamos a divisão de tarefas entre os integrantes. O **Gustavo** ficou responsável por criar o repositório no GitHub, onde cada membro enviava o código da sua parte para que ele pudesse integrar tudo e manter o repositório atualizado.  

Logo nas primeiras etapas, percebemos que o maior desafio seria o aspecto visual do site. Tivemos que buscar referências, definir cores, fontes e pensar na melhor forma de organizar as informações para transmitir profissionalismo e atrair o público-alvo. Apesar de o uso de CSS não ser obrigatório para a primeira entrega, o Gustavo, por ter conhecimento prévio, adiantou o arquivo de estilo (`style.css`) das páginas **Home** e **Serviços**, o que ajudou a estabelecer uma identidade visual inicial para o projeto.

Durante o processo de estilização, cada integrante ficou responsável por aplicar o CSS na sua respectiva parte do site. Surgiram ideias como criar um sistema de avaliação por estrelas e adicionar efeitos visuais nos cards de serviços, mas no começo enfrentamos algumas dificuldades técnicas para implementar esses recursos. Após várias tentativas e pesquisas, resolvemos parte dos problemas individualmente, porém foi necessária uma **call no Discord** para trabalharmos juntos e encontrar soluções para os pontos mais complexos. Essa colaboração em tempo real foi essencial para o avanço do projeto.

---

## Escolha de Hospedagem e Domínio

Na etapa seguinte, realizamos uma pesquisa de mercado com o objetivo de encontrar uma opção de hospedagem gratuita e confiável para o site. Todos os integrantes do grupo participaram dessa pesquisa de forma individual, cada um analisando diferentes plataformas e comparando recursos, limitações e custos. Apesar das pequenas diferenças entre as opções encontradas, os resultados foram bastante parecidos, o que facilitou a tomada de decisão em grupo.  

Após discutirmos as alternativas, decidimos utilizar o **Netlify (plano gratuito)**, que atendeu perfeitamente às nossas necessidades, oferecendo **100 GB/mês de largura de banda**, **certificado SSL gratuito** e um desempenho estável — tudo isso sem custo anual.  

Quanto ao domínio, optamos por registrar um endereço **.com.br**, por ser mais adequado ao público brasileiro e transmitir maior credibilidade. Além disso, o custo anual de renovação era o mais acessível, em torno de **R$ 60,00**, o que torna a manutenção do site viável para o cliente no futuro.

---

## Validação do Código no W3C Validator

Já com o site praticamente concluído, passamos para a fase de **validação do código HTML** utilizando o **W3C Validator**. Essa etapa foi fundamental para garantir que todo o código estivesse dentro dos padrões da web e livre de erros.  

Durante o processo, o validador apontou alguns problemas de **semântica**, principalmente no uso incorreto das tags `<section>` e `<article>`. Para resolver isso, reorganizamos a estrutura, eliminando as seções desnecessárias e movendo os títulos `<h2>` para dentro das tags `<article>`, o que melhorou a semântica das páginas.  

Também foram identificados avisos sobre o uso da barra final (`/`) nas tags `<img>`. Seguindo o padrão do HTML5, removemos essas barras de todas as imagens em todas as **12 páginas**. Após as correções, o código foi novamente submetido ao validador, e todas as páginas foram aprovadas sem erros, confirmando que o site estava tecnicamente correto e pronto para ser hospedado.

---

## Finalização e Calls de Ajustes

Na reta final, realizamos duas **calls no Discord** que foram essenciais para a conclusão do projeto. A primeira teve como objetivo **ajudar os integrantes que ainda estavam com dificuldades**, principalmente na parte de estilização e organização do código. Durante essa reunião, trocamos experiências, revisamos juntos alguns trechos de código e solucionamos dúvidas pontuais, o que fortaleceu o trabalho em equipe e garantiu que todos conseguissem finalizar suas partes.

A segunda call teve um caráter mais **avaliativo e de revisão geral**. Nela, analisamos o site completo para verificar se havia algo que precisava ser modificado antes da entrega final. Fizemos ajustes de cores para deixar o visual mais padronizado, corrigimos espaçamentos e alinhamentos, revisamos o funcionamento de todos os links e garantimos que a navegação estivesse fluida. Também verificamos a responsividade e o carregamento das páginas, garantindo uma boa experiência de uso.  

Após essas correções e melhorias, o grupo considerou o site finalizado. Com todas as etapas concluídas — da mudança de tema até a validação e revisão final —, o projeto da **Thalita Esteticista** ficou pronto para ser entregue, refletindo o esforço coletivo, a dedicação e o aprendizado técnico adquirido ao longo de todo o processo.
