const inimigos = [
  {
    nome:"Muffet",
    imagem:"../images/monstros/Muffet.gif",
    descricao:"Aparência\nMuffet é uma aranha antropomórfica com pele lilás ou pervinca, cinco olhos, seis braços e duas pernas. Ela usa um macacão vermelho com botões na frente, uma fita vermelha no peito e duas marias-chiquinhas no cabelo. Ela também é mostrada segurando duas xícaras de chá com o par de mãos de cima e dois bules com o par do meio.\n\nPersonalidade\nMuffet é frequentemente retratada como um monstro ganancioso, mesquinho, intimidador e, de certa forma, hipócrita, embora tenha um jeito cortês e doce de falar. Mesmo assim, ela parece ter um lado bastante malicioso em sua personalidade sempre que é contrariada, algo que ocasionalmente a leva a brigas. Durante suas batalhas, ela também tem a tendência de citar coisas mórbidas ou inapropriadas, como comentar sobre o possível destino da protagonista, que pode ser usada para fazer comida"
   },{
    nome:"Vulkin",
    imagem:"../images/monstros/Vulkin.gif",
    descricao:"Aparência\nComo o próprio nome indica, Vulkin se assemelha a um vulcão, com a estrutura cônica característica comum de vulcões. É possível ver lava vazando de sua coroa, e pequenas nuvens de fumaça podem ser vistas saindo dela constantemente. Vulkin geralmente está com os olhos fechados e corado constantemente. Devido à sua atitude alegre, costuma ser visto sorrindo.\n\nPersonalidade\nVulkin é indiscutivelmente o 'inimigo' mais gentil que o protagonista encontra, pois mantém uma natureza positiva e despreocupada e adora apoiar os seres ao seu redor. Sua natureza inocente, infelizmente, o leva a acreditar que humanos, incluindo o protagonista, podem ser curados por seus ataques de lava, quando ele faz o oposto.Vulkin adora ver positividade e amor espalhados ao seu redor, então as opções 'Encorajar' e 'Abraçar' o deixam ainda mais feliz do que antes. Como resultado, ele se esforça mais para ajudar o protagonista ou expressa conforto graças a ele. Usar a opção 'Abraçar' transforma seus olhos em corações como prova."
   },
   {
    nome:"Pyrope",
    imagem:"../images/monstros/Pyrope.gif",
    descricao:"Aparência\nA cabeça de Pyrope parece estar queimando, com um sorriso travesso no rosto. Seu corpo é feito de corda e, na parte inferior, há o que parecem ser suas pernas.\n\nPersonalidade\nPiropo gosta de calor e nunca se sente aquecido o suficiente. Ele fica cada vez mais excitado quando o protagonista aumenta o termostato."
   },{
    nome:"Bratty e Catty",
    imagem:"../images/monstros/Bratty_and_catty_sprite.png",
    descricao:"Aparência\n    Bratty é um monstro jacaré alto e verde que usa um xale predominantemente rosa com detalhes em amarelo e azul nas laterais. Ela tem cabelos amarelos que se transformam em cachos.\nCatty é uma criatura felina roxa e gordinha que usa um macacão azul com botões amarelos e tufos de pelos amarelos saindo de ambos os lados. Ela tem cabelos pretos com pontas azuis e lilás, e um brinco amarelo na orelha esquerda.\n\npessonalidade\nElas são melhores amigas, frequentemente dizendo as mesmas falas ou terminando frases uma para a outra (geralmente no dialeto americano das garotas do vale), e ambas são grandes fãs de Mettaton ."
   }

    // Adicione mais inimigos aqui
];

let indiceAtual = 0;

function trocarImagem(direcao) {
    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = inimigos.length - 1;
    } else if (indiceAtual >= inimigos.length) {
        indiceAtual = 0;
    }

    const inimigo = inimigos[indiceAtual];

    document.getElementById("inimigoImagem").src = inimigo.imagem;
    document.getElementById("inimigoNome").innerText = inimigo.nome;
    document.getElementById("inimigoDescricao").innerText = inimigo.descricao;
}
