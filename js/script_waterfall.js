 const inimigos = [
  {nome:"Aaron",
    imagem:"../images/monstros/Aaron.webp",
    descricao:"Aparência\nEle é um cavalo-marinho marrom e musculoso (ou melhor, um cavalo-marinho ), com uma cauda verde longa e sinuosa e um abdômen definido.\n\n Personalidade\n As falas de Aaron são vagamente sedutoras e assustadoras, e ele adiciona um rosto piscando ao final de cada fala. Ele tem uma obsessão enorme por se exibir, tanto que, caso o protagonista escolha a opção 'flexíonar', ele encara isso como um desafio divertido."
  },
  {
    nome:"Woshua",
    imagem:"../images/monstros/Woshua.webp",
    descricao:"Aparência \n Parece uma banheira viva ou uma máquina de lavar, com uma cabeça redonda e uma expressão vazia, e um pequeno pássaro sentado em seu corpo cheio de água, junto com uma cauda em forma de manivela. Lembra uma tartaruga. \n\n Personalidade\nWoshua fala em frases curtas e busca limpar tudo por ser hipocondríaco. Por isso, sugere constantemente ao protagonista que se limpe, principalmente antes de tocá-lo. Sua germafobia chega a odiar 'piadas sujas'"
  },
  {
    nome:"Syren",
    imagem:"../images/monstros/siren.jpg",
    descricao:"Aparência\nShyren é um monstro parecido com um peixe , envergonhado por seu rosto assustador e suas habilidades vocais fracas. Ela luta de costas para o protagonista. Seu 'corpo' é uma entidade separada dela, enquanto sua 'cabeça' é seu corpo inteiro.\n\n Personalidade \n Shyren é tímida, pois tenta evitar o encontro com o protagonista e fica quieta se lhe pedem para sorrir. Por ser surda para tons, Shyren é insegura sobre si mesma e sua música, mas o protagonista pode cantarolar músicas para encorajá-la a cantar. Apesar de ser surda para tons e não ter dedos, ela é apaixonada por música, cantar, se apresentar e tocar piano. Antes de Undertale , Shyren teve aulas de piano com Undyne ."
},
{
    nome:"Gerson",
    imagem:"../images/monstros/gerson_sprite.png",
    descricao:"Aparência\nGerson, um monstro -tartaruga verde-oliva de aparência idosa , veste trajes de arqueólogo, com barba pontuda, uma grande lupa e um capacete de medula bege. Seus dentes são tortos e amarelos, e seu casco é marrom-escuro com uma borda creme-clara. Ele também parece incapaz de abrir o olho direito.\n\nPersonalidade\nPor viver por um longo período em comparação com outros monstros e por estudar história, Gerson adquiriu muitos conhecimentos sobre a história dos monstros no Subterrâneo , incluindo a profecia da Runa Delta . Apesar disso, ele parece ter dificuldade em se lembrar de certas informações, como a localização da Vila Temmie e o motivo pelo qual Asgore recebeu o apelido de 'Fluffybuns'. Ele também não quer repetir a lenda da profecia se o protagonista pedir. Ele estava vivo quando Toriel também governou o Subterrâneo com Asgore e, embora tenha afirmado que foi trágico que ela tenha partido, sentiu um certo alívio por eles estarem abertos à afeição um pelo outro."
}
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