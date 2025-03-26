// Código ejemplo de async-await en javascript

// ✅ forma tradicional 

const pokeAPI = "https://pokeapi.co/api/v2/pokemon/pikachu";

// fetch(pokeAPI)
// .then(resp => resp.json())
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>console.error(err))

// ✅ usando async-await

const getPokemonByName = async (name) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await resp.json();
    console.log("Nombre:", data.name);
    console.log("ID:", data.id);
    console.log("Altura:", data.height);
    console.log("Peso:", data.weight);
    console.log(
      "Habilidades:",
      data.abilities.map((ability) => ability.ability.name).join(", ")
    );
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};


getPokemonByName('pikachu')