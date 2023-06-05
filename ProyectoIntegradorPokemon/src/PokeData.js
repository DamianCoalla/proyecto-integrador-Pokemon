import aron from "/Imagenes/aron.png"
import butterfree from "/Imagenes/butterfree.png";
import bulbasaur from "/Imagenes/bulbasaur.png";
import charmander from "/Imagenes/charmander.png";
import squirtle from "/Imagenes/squirtle.png";
import pikachu from "/Imagenes/pikachu.png";
import gastly from "/Imagenes/gastly.png";
import ditto from "/Imagenes/ditto.png";
import mew from "/Imagenes/mew.png";



const pokeData = [
    


    {name: "Aron",
        id: "304",
        imagen: aron,
        types: ["Steel", "Rock"],
        abilities: ["Sturdy", "Rock-Head"],
        height: "0,4 m",
        weight: "60,0 kg",
        description: "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
        stats:{
            HP: "050",
            ATK: "070",
            DEF: "100",
            SATK: "040",
            SDEF: "040",
            SPD: "030",
        }


    },

    {name: "Butterfree",
    id: "012",
    imagen: butterfree,
    types: ["Bug", "Flying"],
    abilities: ["Compound-Eyes", "Tinted-Lens"],
    height: "1,1 m",
    weight: "32,0 kg",
    description: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    stats:{
        HP: "060",
        ATK: "045",
        DEF: "050",
        SATK: "090",
        SDEF: "080",
        SPD: "070",
    }


},


{name: "Bulbasaur",
id: "001",
imagen: bulbasaur,
types: ["Grass", "Poison"],
abilities: ["Chlorophyll", "Overgrow"],
height: "0,7 m",
weight: "6,9 kg",
description: "There is a plant seed on its back right from the day this pokemon is born. The seed slowly grows larger",
stats:{
    HP: "045",
    ATK: "049",
    DEF: "049",
    SATK: "065",
    SDEF: "065",
    SPD: "045",
}
},

{name:"Mew",
id:"152",
imagen: mew,
types: [ "Psychic"], 
abilities: ["Sinchrorize"],
height: "0.4 m",
weight: "4.0 kg",
description:"When viewed through a microscope, this pokemon's short, fine, delicate hair can be seeen",
stats:{
    HP: "100",
    ATK: "100",
    DEF: "100",
    SATK: "100",
    SDEF: "100",
    SPD: "100", }
},
{name: "Pikachu", 
    id:"025", 
    imagen: pikachu,
    types: ["Electric"],  
    abilities: ["Mega-punch", "Pay-Day"],
    height: "0.4 m",
    weight: "6.0 kg",
    description: "Pikachu that can generate powerfull electricity have cheek sacs that are extra soft and super stretchy",
    stats:{
        HP: "035",
        ATK: "055",
        DEF: "040",
        SATK: "050",
        SDEF:"050",
        SPD:"090",
    }
},
  {name: "Squirtle",
    id: "007",
    imagen: squirtle,
    types: ["Water"],
    abilities: ["Torrent" , "Rain-Dish"],
    height: "0.5 m",
    weight: "9.0 kg",
    description: "When it retracts its long neck into its shell, it squirts out water whit vigorous force",
    stats:{
        HP:"044",
        ATK: "048",
        DEF: "065",
        SATK: "050",
        SDEF:"064",
        SPD:"043",
    }
},

{
    name: "Charmander",
    id: "004",
    imagen: charmander,
    types: ["Fire"],
    abilities: [ "Mega-Punch","Fire-Punch"],
    height: "0,6 m",
    weight: "8,5 kg",
    description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",

    stats: {
        HP: "039",
        ATK: "052",
        DEF: "043",
        SATK: "060",
        SDEF: "050",
        SPD: "065",
    },
},
{
name: "Ditto",
id: "132",
imagen: ditto,
types: ["Normal"], 
abilities: ["Limber","Imposter"],
height: "0,3 m",
weight: "4,0 kg",
description: "It can reconstitute its entire cellular structure to change into what it seesm, but it returns to normal when it relaxes.",

stats: {
    HP: "048",
    ATK: "048",
    DEF: "048",
    SATK: "048",
    SDEF: "048",
    SPD: "048",
},
},
{
name: "Gastly",
id: "092",
imagen: gastly,
types: ["Ghost","Type"],  
abilities: ["Levitate"], 
height: "1,3 m",
weight: "0,1 kg",
description: "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison",

stats: {
    HP: "039",
    ATK: "035",
    DEF: "030",
    SATK: "100",
    SDEF: "035",
    SPD: "080",
}
}
]

export default pokeData;