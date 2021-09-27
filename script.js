const fetchPokemon = async (pokemon) => {
<<<<<<< HEAD
    const apiDosPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const respostaDaConversao  = await apiDosPokemon.json()    
    criaDivsDePokemon(respostaDaConversao)
};

const funcaoCriaPok = () => {
    for(let i = 0; i < 100; i += 1){
    fetchPokemon(i)
}
}


=======
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const teste  = await resposta.json()
return teste
};

>>>>>>> 37ca27d... coco

let nome = ""
let imagem = ""
let tipo = []


const consoleAsyn = async (funcao) => {
    const pika = await funcao
    

imagem = pika.sprites.front_default
nome = pika.name
tipo = pika.types.map(especificacoesDoTipo => especificacoesDoTipo.type.name)

}

<<<<<<< HEAD
const criaDivsDePokemon = ({ sprites: imagem, name: nome, types: tipo }) => {
    console.log(tipo[0])

    const listaDePokemon = document.querySelector(".poke-list")
   
    const divDoPokemon = document.createElement("section")
    const img = document.createElement("img")
    const nomeDoPok = document.createElement("h2")
    const tipoDoPok = document.createElement("span")

    divDoPokemon.className = "poke"

    img.src = imagem.front_default
    img.className = "poke-sprite"
    nomeDoPok.innerHTML = nome
    nomeDoPok.className = "poke-name"
    tipoDoPok.innerHTML = tipo[0].type.name
    tipoDoPok.className = "poke-type"
    tipoDoPok.classList.add(tipo[0].type.name)

    divDoPokemon.appendChild(img)
    divDoPokemon.appendChild(nomeDoPok)
    divDoPokemon.appendChild(tipoDoPok)

    listaDePokemon.appendChild(divDoPokemon)
}




funcaoCriaPok()


=======





consoleAsyn(fetchPokemon('mewtwo'))
>>>>>>> 37ca27d... coco


// busca pokemon pelo tipo: https://pokeapi.co/api/v2/type/${tipo}

// para buscar pelo nome: https://pokeapi.co/api/v2/pokemon/${nome}

// para buscar pelo id: https://pokeapi.co/api/v2/pokemon/${id}

// para buscar por item: https://pokeapi.co/api/v2/item/${item}

