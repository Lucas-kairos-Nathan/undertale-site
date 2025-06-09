const inimigos = [
  {nome:"Dogão",
    imagem:"../images/monstros/Dogão.png",
    descricao:"aparencia\n Dogão é um pequeno cão branco em uma armadura que o faz parecer um gigante maromba\n\npersonalidade\n é um cachorro",
  },

  {nome:"Dogi (Coletivamente), Dogamy, Dogaressa",
    imagem:"../images/monstros/Dog_Marriage.gif",
    descricao:"aparencia\n Dogamy e Dogaressa são um par de cães antropomórficos que aparecem em Snowdin. Como parte da Guarda Real com manto e capuz e cada um possuem machados que alinados corretamente formam um coração\n\npersonalidade\n são um casal bem apaixonado sempre mostrando um ao outro o amor que senten nos ataques"

  },
  
  {nome:"doggo",
    imagem:"../images/monstros/Doggo.gif",
    descricao:"aparecia\num cão antropomorfo de regata rosa de estanpa cara de cachorro calça amarela manchada e duas adagas enquanto fuma ossos de biscoitos cannino\n\n\personalidade\n faz cara de durão quando pecebe algo se movendo mas se não encontra nada e for acariciado fica todo bobo ",
  },
  {
    nome:"doguinho",
    imagem:"../images/monstros/Doguinho.gif",
    descricao:"aparencia\nDoguinho sendo da guarda real parece um cavaleiro cão antropomorfo, de espada escudo e armadura completa\n\npersonalidade\n um filhote de cachorro extremamente agitado ",
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