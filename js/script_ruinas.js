const inimigos = [
  {
        nome: "Froggit",  // Nome do inimigo
        imagem: "../images/monstros/froggit.gif",  // Caminho da imagem do Froggit
        descricao: "Aparência \n A aparência de Froggit é como a de um sapo branco. Somente suas patas dianteiras são visíveis, ele possui três pontas pretas no peito. Entre os seus pés da frente pode ser vista uma criatura pequena arredondada com olhos que piscam excessivamente e uma boca redonda. Não se sabe ao certo o que pode ser já que nunca é mencionado no texto de batalha nem pelos Froggits.\n \n Personalidade \nFroggit é um monstro fraco, que tenta fugir do protagonista quando sua saúde está baixa, treme quando ameaçado e sai depois de Toriel o encarar por enfrentar o protagonista. Ele é influenciado facilmente por comentários do protagonista, apesar de não compreendê-los. No entanto, ele também é um pouco informado, dizendo ao protagonista sobre as funções no jogo e explicando técnicas de poupar.Froggit é um inimigo simples encontrado nas primeiras áreas de *Undertale*. Embora pareça inofensivo, pode ser perigoso com seus ataques de salto."
    },
    {
        nome: "Whimsun",
        imagem: "../images/monstros/Whimsun.gif",
        descricao: "Aparência\nWhimsun assume a aparência de um inseto com duas antenas inclinadas, duas pequenas asas e dois pequenos braços e pernas. Sua expressão facial é triste, com uma boca franzida e dois olhos quase fechados com pontos embaixo deles. \n\nPersonalidade\nWhimsun é extremamente sensível e emotivo, como os textos em sua batalha sugerem. Ele foge se o protagonista consolá-lo e é aterrorizado por um pequeno movimento dos dedos. Pode ser poupado imediatamente e é extremamente apologético. Seus ataques não atingem ou intencionalmente atingem a alma do protagonista."
    },
    {
        nome: "Loox",
        imagem: "../images/monstros/Loox.gif",
        descricao: "Aparência \nLoox é bípede e tem dois chifres no topo da cabeça, um olho enorme no rosto e dentes debaixo de seu olho.\n\n Personalidade \n Loox não gosta quando pessoas pegam no pé dele, mas também é um pouco hipócrita, já que ele pega no pé dos outros (como indicado pelo texto de quando Loox é encontrado com um outro inimigo.) Sua descrição nos Créditos da Verdadeira Rota Pacifista diz que ele é menos valentão agora e acaba virando um valentão corrigido se o protagonista não pega no pé dele."
    },

    {
        nome: "Vegetoid",
        imagem: "../images/monstros/Vegetoid.gif",
        descricao: "Aparência \n Vegetóide se assemelha a uma larga cenoura com um rosto. Aparente, por seu sprite em overworld, sua cor também é como a de uma cenoura. Sua expressão é sempre a de um sorriso largo com olhos radiantes.\n\nPersonalidade \n O principal objetivo do vegetóide é encorajar o alguem a comer seus vegetais. Muitas vezes, diz coisas que apoiam isso, como 'Eat Your Greens'.",
    },

    {
        nome: "Migosp",
        imagem: "../images/monstros/Migosp.gif",
        descricao: "Aparência \n Como Whimsun, Migosp tem uma aparência de inseto, possuindo duas antenas no topo de sua cabeça. Migosp é um monstro bípede que tem dois dedos pontudos. Migosp tem duas linhas pretas em sua barriga e uma boca de formato estranho. Migosp tem o hábito de tremer seus dentes e mãos em um tipo de espasmo.\n\nPersonalidade\n Migosp é rude, gritando 'EU NÃO LIGO' quando o protagonsita tenta falar com ele. Migosp também é focado, sempre direto no ataque (mesmo nunca mirando diretamente na ALMA). Porém, isso é porque Migosp está sempre por perto (como indicado pelo Checar) e se torna satisfeito e fácil assim que está sozinho, dançando e aproveitando seu tempo sozinho.",
    },

       
    {
        nome: "Moldsmal",
        imagem: "../images/monstros/Moldsmal.gif",
        descricao:"Aparência\nModsmal aparenta ser e é descrito como uma pequena gelatina verde lima, especificamente em um molde de gelatina. Mesmo não tendo uma sprite no overworld e por isso não tendo uma cor confirmada, é dito em um dos seus textos que ele tem cheiro de gelatina de limão. Em Cachoeira, é descrito como tendo uma cor diferente, mas essa cor é desconhecida. Um Moldsmal rosa também aparece na carta de tarô do Mt. Ebott.\n\nPersonalidade\nMoldsmal não diz nada em seu diálogo, fazendo somente barulhos de gosma. Em seu Checar, Moldsmal é descrito como sendo 'Curveiramente atraente, mas sem cérebro' Em seu texto, Moldsmal age paciente e pensativamente, já que está tentando descansar um pouco no chão e é descrito como um ruminante.",
    },


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
