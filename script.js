const fetchPokemon = async (pokemon) => {
    const apiDosPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const respostaDaConversao  = await apiDosPokemon.json()    
    criaDivsDePokemon(respostaDaConversao)
    return respostaDaConversao
};

const funcaoCriaPok = async () => {
    for(let i = 1; i < 40; i += 1){
    await fetchPokemon(i)
}
}




const funcaoconsolelog = async () => {
    const pikomon = await fetchPokemon('zapdos')
    console.log(pikomon.sprites.other['official-artwork'].front_default)
}

funcaoconsolelog()

const criaDivsDePokemon = ({ sprites: imagem, name: nome, types: tipo }) => {

    const listaDePokemon = document.querySelector(".poke-list")
   const divOfTypes = document.createElement("div")
    const divDoPokemon = document.createElement("section")
    const img = document.createElement("img")
    const nomeDoPok = document.createElement("h2")
    
    divDoPokemon.className = "poke"
    
    const option1 = imagem.other['official-artwork'].front_default
    const option2 = imagem.front_default
    
    
    img.src = option2
    img.className = "poke-sprite"
    nomeDoPok.innerHTML = nome
    nomeDoPok.className = "poke-name"
    
    tipo.forEach(elemento => {
        const tipoDoPok = document.createElement("span")
        
        tipoDoPok.className = "poke-type"
        tipoDoPok.innerHTML = elemento.type.name
        tipoDoPok.classList.add(elemento.type.name)

        divOfTypes.appendChild(tipoDoPok)
    })
    
    divOfTypes.className = "poke-types"

    divDoPokemon.appendChild(img)
    divDoPokemon.appendChild(nomeDoPok)
    divDoPokemon.appendChild(divOfTypes)

    

    listaDePokemon.appendChild(divDoPokemon)
}




funcaoCriaPok()




// busca pokemon pelo tipo: https://pokeapi.co/api/v2/type/${tipo}

// para buscar pelo nome: https://pokeapi.co/api/v2/pokemon/${nome}

// para buscar pelo id: https://pokeapi.co/api/v2/pokemon/${id}

// para buscar por item: https://pokeapi.co/api/v2/item/${item}

