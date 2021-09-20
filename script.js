const fetchPokemon = async (pokemon) => {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const teste  = await resposta.json()
return teste
};


let nome = ""
let imagem = ""
let tipo = []


const consoleAsyn = async (funcao) => {
    const pika = await funcao
    

imagem = pika.sprites.front_default
nome = pika.name
tipo = pika.types.map(especificacoesDoTipo => especificacoesDoTipo.type.name)

}






consoleAsyn(fetchPokemon('mewtwo'))


// busca pokemon pelo tipo: https://pokeapi.co/api/v2/type/${tipo}

// para buscar pelo nome: https://pokeapi.co/api/v2/pokemon/${nome}

// para buscar pelo id: https://pokeapi.co/api/v2/pokemon/${id}

// para buscar por item: https://pokeapi.co/api/v2/item/${item}

