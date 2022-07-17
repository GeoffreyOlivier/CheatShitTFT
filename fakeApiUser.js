//example api request: replace with your API request here in folder API
/* eslint-disable */
export const getUser = () => {
  try {
    return Promise.resolve({
      status: 'success',
      data: [
        {
          name: 'Ornn',
          origine: 'Tempest Bruiser Legend',
          id: 49,
          cost: 4,
          image: { Ornn: require("../../assets/images/Champion/Ornn.png") },
          itemList: {
            itemsA: [20, 10, 39, 23, 16, 33],
            itemsB: [36, 21, 26],
            itemsC: [13, 4, 22]
          }
          
        },
        {
          name: 'Aatrox',
          origine: 'Shimmerscale Warrior',
          id: 1,
          cost: 1,
          image: { Aatrox: require("../../assets/images/Champion/Aatrox.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Ezreal',
          origine: 'Swiftshot Tempest',
          id: 2,
          cost: 1,
          image: { Ezreal: require("../../assets/images/Champion/Ezreal.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Sejuani',
          origine: 'Guild Cavalier',
          id: 3,
          cost: 1,
          image: { Sejuani: require("../../assets/images/Champion/Sejuani.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'TahmKench',
          origine: 'Revel Bruiser',
          id: 4,
          cost: 1,
          image: { TahmKench: require("../../assets/images/Champion/TahmKench.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Heimerdinger',
          origine: 'Trainer Mage',
          id: 5,
          cost: 1,
          image: { Heimerdinger: require("../../assets/images/Champion/Heimerdinger.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Karma',
          origine: 'Dragonmancerne Jade',
          id: 6,
          cost: 1,
          image: { Karma: require("../../assets/images/Champion/Karma.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Senna',
          origine: 'Ragewing Cannoneer',
          id: 7,
          cost: 1,
          image: { Senna: require("../../assets/images/Champion/Senna.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Leona',
          origine: 'Mirage Guardian',
          id: 8,
          cost: 1,
          image: { Leona: require("../../assets/images/Champion/Leona.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Nami',
          origine: 'Astrale Mage Mystic',
          id: 9,
          cost: 2,
          image: { Nami: require("../../assets/images/Champion/Nami.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Vladimir',
          origine: 'Astral Mage',
          id: 10,
          cost: 1,
          image: { Vladimir: require("../../assets/images/Champion/Vladimir.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Sett',
          origine: 'Ragewing Dragonmancer',
          id: 11,
          cost: 1,
          image: { Sett: require("../../assets/images/Champion/Sett.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Skarner',
          origine: 'Astral Bruiser',
          id: 12,
          cost: 1,
          image: { Skarner: require("../../assets/images/Champion/Skarner.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Taric',
          origine: 'Jade Guardian',
          id: 58,
          cost: 1,
          image: { Taric: require("../../assets/images/Champion/Taric.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Nidalee',
          origine: 'Astrale Shapeshifter',
          id: 13,
          cost: 1,
          image: { Nidalee: require("../../assets/images/Champion/Nidalee.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Ashe',
          origine: "Jade, Dragonmancerne, Tireuse d'élite",
          id: 14,
          cost: 2,
          image: { Ashe: require("../../assets/images/Champion/Ashe.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Braum',
          origine: 'Scalescorn Gardien',
          id: 15,
          cost: 2,
          image: { Braum: require("../../assets/images/Champion/Braum.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Yone',
          origine: 'Mirage Warrior',
          id: 16,
          cost: 2,
          image: { Yone: require("../../assets/images/Champion/Yone.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Twitch',
          origine: 'Guild Swiftshot',
          id: 17,
          cost: 2,
          image: { Twitch: require("../../assets/images/Champion/Twitch.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Gnar',
          origine: 'Shapeshifter Jade',
          id: 18,
          cost: 2,
          image: { Gnar: require("../../assets/images/Champion/Gnar.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Jinx',
          origine: 'Revel Cannoneer',
          id: 19,
          cost: 2,
          image: { Jinx: require("../../assets/images/Champion/Jinx.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Kayn',
          origine: 'Ragewing Shimmerscale Assassin',
          id: 20,
          cost: 2,
          image: { Kayn: require("../../assets/images/Champion/Kayn.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Lillia',
          origine: 'Scalescorn Cavalier Mage',
          id: 21,
          cost: 2,
          image: { Lillia: require("../../assets/images/Champion/Lillia.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Thresh',
          origine: 'Whispers Gardien',
          id: 23,
          cost: 2,
          image: { Thresh: require("../../assets/images/Champion/Thresh.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Tristana',
          origine: 'Trainer Cannoneer',
          id: 24,
          cost: 2,
          image: { Tristana: require("../../assets/images/Champion/Tristana.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Shen',
          origine: 'Ragewing Bruiser Warrior',
          id: 25,
          cost: 2,
          image: { Shen: require("../../assets/images/Champion/Shen.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Qiyana',
          origine: 'Tempest Assassin',
          id: 26,
          cost: 2,
          image: { Qiyana: require("../../assets/images/Champion/Qiyana.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Illaoi',
          origine: 'Astrale Bruisere',
          id: 27,
          cost: 3,
          image: { Illaoi: require("../../assets/images/Champion/Illaoi.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Lulu',
          origine: 'Mystic Evoker Trainer',
          id: 28,
          cost: 3,
          image: { Lulu: require("../../assets/images/Champion/Lulu.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Swain',
          origine: 'Shapeshifter Ragewing Dragonmancer',
          id: 29,
          cost: 3,
          image: { Swain: require("../../assets/images/Champion/Swain.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Anivia',
          origine: 'Jade Evoker Legend',
          id: 30,
          cost: 3,
          image: { Anivia: require("../../assets/images/Champion/Anivia.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Diana',
          origine: 'Scalescorn Assassin',
          id: 31,
          cost: 3,
          image: { Diana: require("../../assets/images/Champion/Diana.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Elise',
          origine: 'Shapeshifter Wisper',
          id: 32,
          cost: 3,
          image: { Elise: require("../../assets/images/Champion/Elise.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'LeeSin',
          origine: 'Tempest Dragonmancer',
          id: 33,
          cost: 3,
          image: { LeeSin: require("../../assets/images/Champion/LeeSin.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Nunu',
          origine: 'Mirage Cavalier',
          id: 34,
          cost: 3,
          image: { Nunu: require("../../assets/images/Champion/Nunu.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Olaf',
          origine: 'Scalescorn Bruiser Warrior',
          id: 35,
          cost: 3,
          image: { Olaf: require("../../assets/images/Champion/Olaf.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Ryze',
          origine: 'Guild Mage',
          id: 36,
          cost: 3,
          image: { Ryze: require("../../assets/images/Champion/Ryze.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Sylas',
          origine: 'Whispers Mage Bruiser',
          id: 37,
          cost: 8,
          image: { Sylas: require("../../assets/images/Champion/Sylas.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Varus',
          origine: 'Astral Swiftshot',
          id: 38,
          cost: 3,
          image: { Varus: require("../../assets/images/Champion/Varus.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Volibear',
          origine: 'Shimmerscale Dragonmancer Legend',
          id: 39,
          cost: 3,
          image: { Volibear: require("../../assets/images/Champion/Volibear.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Daeja',
          origine: 'Dragon Mirage',
          id: 40,
          cost: 4,
          image: { Daeja: require("../../assets/images/Champion/Daeja.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Idas',
          origine: 'Dragon Shimmerscale Gardien',
          id: 41,
          cost: 8,
          image: { Idas: require("../../assets/images/Champion/Idas.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'SyFen',
          origine: 'Dragon Whispers Bruiser',
          id: 42,
          cost: 4,
          image: { SyFen: require("../../assets/images/Champion/SyFen.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'ShiOhYu',
          origine: 'Dragon Jade Mystic',
          id: 43,
          cost: 8,
          image: { ShiOhYu: require("../../assets/images/Champion/ShiOhYu.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Corki',
          origine: 'Revel Cannoneer',
          id: 44,
          cost: 4,
          image: { Corki: require("../../assets/images/Champion/Corki.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Talon',
          origine: 'Guild Assassin',
          id: 45,
          cost: 4,
          image: { Talon: require("../../assets/images/Champion/Talon.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Hecarim',
          origine: 'Ragewing Cavalier',
          id: 46,
          cost: 4,
          image: { Hecarim: require("../../assets/images/Champion/Hecarim.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Neeko',
          origine: 'Shapeshifter Jade',
          id: 47,
          cost: 4,
          image: { Neeko: require("../../assets/images/Champion/Neeko.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Sona',
          origine: 'Revel Evoker',
          id: 48,
          cost: 4,
          image: { Sona: require("../../assets/images/Champion/Sona.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
  
        {
          name: 'Xayah',
          origine: 'Ragewing Swiftshot',
          id: 58,
          cost: 4,
          image: { Xayah: require("../../assets/images/Champion/Xayah.png") },
          itemsA: [20, 10, 39, 23, 16, 33],
          itemsB: [36, 21, 26],
          itemsC: [13, 4, 22]
        },
        {
          name: 'AoShin',
          origine: 'Dragon Tempest',
          id: 50,
          cost: 10,
          image: { AoShin: require("../../assets/images/Champion/AoShin.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'AurelionSol',
          origine: 'Dragon Astral Evoker',
          id: 51,
          cost: 10,
          image: { AurelionSol: require("../../assets/images/Champion/AurelionSol.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Shyvana',
          origine: 'Dragon Ragewing Shapeshifter',
          id: 52,
          cost: 10,
          image: { Shyvana: require("../../assets/images/Champion/Shyvana.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Bard',
          origine: 'Bard Guild Mystic',
          id: 53,
          cost: 5,
          image: { Bard: require("../../assets/images/Champion/Bard.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Yasuo',
          origine: 'Mirage Dragonmancer Warrior',
          id: 54,
          cost: 5,
          image: { Yasuo: require("../../assets/images/Champion/Yasuo.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Zoé',
          origine: 'Shimmerscale Mage Spell Thief',
          id: 55,
          cost: 5,
          image: { 'Zoé': require("../../assets/images/Champion/Zoé.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Pyke',
          origine: 'Whispers Assassin',
          id: 56,
          cost: 5,
          image: { Pyke: require("../../assets/images/Champion/Pyke.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Soraka',
          origine: 'Jade Starcaller',
          id: 57,
          cost: 5,
          image: { Soraka: require("../../assets/images/Champion/Soraka.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        },
        {
          name: 'Daeja',
          origine: 'Mirage Dragon',
          id: 59,
          cost: 8,
          image: { Daeja: require("../../assets/images/Champion/Daeja.png") },
          itemsA: [],
          itemsB: [],
          itemsC: []
        }
      ]
      
    })
  } catch (e) {
    return Promise.reject(e)
  }
}


module.exports = {
  getUser
}
