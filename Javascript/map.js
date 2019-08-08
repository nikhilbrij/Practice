let pikachu = {
  name : "I am Pikachu",
  power : "I can electrify"
}
let clifary = {
  name : "I am clifary",
  power : "I am cute"
}

let charmander = {
  name : "I am charmander",
  power : "I throw fire"
}


let pokemon = new Map()

pokemon.set('pika' , pikachu)
pokemon.set('cli' , clifary)
pokemon.set('char' , charmander)

console.log(pokemon.size)


console.log(pokemon.values())

console.log(pokemon.get('char'))

for(val of pokemon.keys()){
  console.log(val)}
