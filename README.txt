PODERÔMETRO LAS COLLABS

Arquivos do app:
- index.html: aplicativo
- styles.css: visual
- app.js: lista de nomes e lógica
- manifest.webmanifest + sw.js: instalação como app no iPhone e funcionamento offline após o primeiro carregamento

Para testar no computador:
1. Abra um terminal nesta pasta.
2. Execute: python3 -m http.server 8000
3. Abra http://localhost:8000 no navegador.

Para instalar no iPhone:
O app precisa ser servido por HTTPS uma primeira vez (por exemplo, Vercel/Netlify/GitHub Pages). Abra o endereço no Safari e use Compartilhar > Adicionar à Tela de Início.
Depois de carregado, o service worker mantém os arquivos disponíveis offline.

IMPORTANTE SOBRE PRIVACIDADE:
A lista de nomes e percentuais está embutida em app.js. Se os arquivos forem publicados em um site público, alguém com acesso ao endereço poderá inspecionar esses dados. Para uso estritamente privado, prefira hospedagem com acesso restrito ou empacotamento nativo.

ATUALIZAÇÃO DA LISTA:
Quando a planilha final estiver pronta, basta substituir o bloco "people" em app.js; o restante do app não precisa ser alterado.


V5 ART: cenário mágico ocupa ~40% da tela; composição redesenhada para se aproximar dos mockups.


V6 SELF-CONTAINED: mystic-table e portal estão embutidos no CSS; o visual não depende da pasta assets.
