//example api request: replace with your API request here in folder API
/* eslint-disable */
export const getUser = () => {
  try {
    return Promise.resolve({
      status: 'success',
      data: [
       
        {
          name: 'Aatrox',
          origine: 'Shimmerscale Warrior',
          id: 1,
          cost: 1,
          image: { Aatrox: require("../../assets/images/Champion/Aatrox.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Ezreal',
          origine: 'Swiftshot Tempest',
          id: 2,
          cost: 1,
          image: { Ezreal: require("../../assets/images/Champion/Ezreal.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Sejuani',
          origine: 'Guild Cavalier',
          id: 3,
          cost: 1,
          image: { Sejuani: require("../../assets/images/Champion/Sejuani.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'TahmKench',
          origine: 'Revel Bruiser',
          id: 4,
          cost: 1,
          image: { TahmKench: require("../../assets/images/Champion/TahmKench.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Heimerdinger',
          origine: 'Trainer Mage',
          id: 5,
          cost: 1,
          image: { Heimerdinger: require("../../assets/images/Champion/Heimerdinger.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Karma',
          origine: 'Dragonmancerne Jade',
          id: 6,
          cost: 1,
          image: { Karma: require("../../assets/images/Champion/Karma.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Senna',
          origine: 'Ragewing Cannoneer',
          id: 7,
          cost: 1,
          image: { Senna: require("../../assets/images/Champion/Senna.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Leona',
          origine: 'Mirage Guardian',
          id: 8,
          cost: 1,
          image: { Leona: require("../../assets/images/Champion/Leona.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Nami',
          origine: 'Astrale Mage Mystic',
          id: 9,
          cost: 2,
          image: { Nami: require("../../assets/images/Champion/Nami.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Vladimir',
          origine: 'Astral Mage',
          id: 10,
          cost: 1,
          image: { Vladimir: require("../../assets/images/Champion/Vladimir.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Sett',
          origine: 'Ragewing Dragonmancer',
          id: 11,
          cost: 1,
          image: { Sett: require("../../assets/images/Champion/Sett.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Skarner',
          origine: 'Astral Bruiser',
          id: 12,
          cost: 1,
          image: { Skarner: require("../../assets/images/Champion/Skarner.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Taric',
          origine: 'Jade Guardian',
          id: 58,
          cost: 1,
          image: { Taric: require("../../assets/images/Champion/Taric.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Nidalee',
          origine: 'Astrale Shapeshifter',
          id: 13,
          cost: 1,
          image: { Nidalee: require("../../assets/images/Champion/Nidalee.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Ashe',
          origine: "Jade, Dragonmancerne, Tireuse d'élite",
          id: 14,
          cost: 2,
          image: { Ashe: require("../../assets/images/Champion/Ashe.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Braum',
          origine: 'Scalescorn Gardien',
          id: 15,
          cost: 2,
          image: { Braum: require("../../assets/images/Champion/Braum.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Yone',
          origine: 'Mirage Warrior',
          id: 16,
          cost: 2,
          image: { Yone: require("../../assets/images/Champion/Yone.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Twitch',
          origine: 'Guild Swiftshot',
          id: 17,
          cost: 2,
          image: { Twitch: require("../../assets/images/Champion/Twitch.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Gnar',
          origine: 'Shapeshifter Jade',
          id: 18,
          cost: 2,
          image: { Gnar: require("../../assets/images/Champion/Gnar.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Jinx',
          origine: 'Revel Cannoneer',
          id: 19,
          cost: 2,
          image: { Jinx: require("../../assets/images/Champion/Jinx.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Kayn',
          origine: 'Ragewing Shimmerscale Assassin',
          id: 20,
          cost: 2,
          image: { Kayn: require("../../assets/images/Champion/Kayn.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Lillia',
          origine: 'Scalescorn Cavalier Mage',
          id: 21,
          cost: 2,
          image: { Lillia: require("../../assets/images/Champion/Lillia.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Thresh',
          origine: 'Whispers Gardien',
          id: 23,
          cost: 2,
          image: { Thresh: require("../../assets/images/Champion/Thresh.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Tristana',
          origine: 'Trainer Cannoneer',
          id: 24,
          cost: 2,
          image: { Tristana: require("../../assets/images/Champion/Tristana.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Shen',
          origine: 'Ragewing Bruiser Warrior',
          id: 25,
          cost: 2,
          image: { Shen: require("../../assets/images/Champion/Shen.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Qiyana',
          origine: 'Tempest Assassin',
          id: 26,
          cost: 2,
          image: { Qiyana: require("../../assets/images/Champion/Qiyana.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Illaoi',
          origine: 'Astrale Bruisere',
          id: 27,
          cost: 3,
          image: { Illaoi: require("../../assets/images/Champion/Illaoi.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Lulu',
          origine: 'Mystic Evoker Trainer',
          id: 28,
          cost: 3,
          image: { Lulu: require("../../assets/images/Champion/Lulu.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Swain',
          origine: 'Shapeshifter Ragewing Dragonmancer',
          id: 29,
          cost: 3,
          image: { Swain: require("../../assets/images/Champion/Swain.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Anivia',
          origine: 'Jade Evoker Legend',
          id: 30,
          cost: 3,
          image: { Anivia: require("../../assets/images/Champion/Anivia.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Diana',
          origine: 'Scalescorn Assassin',
          id: 31,
          cost: 3,
          image: { Diana: require("../../assets/images/Champion/Diana.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Elise',
          origine: 'Shapeshifter Wisper',
          id: 32,
          cost: 3,
          image: { Elise: require("../../assets/images/Champion/Elise.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'LeeSin',
          origine: 'Tempest Dragonmancer',
          id: 33,
          cost: 3,
          image: { LeeSin: require("../../assets/images/Champion/LeeSin.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Nunu',
          origine: 'Mirage Cavalier',
          id: 34,
          cost: 3,
          image: { Nunu: require("../../assets/images/Champion/Nunu.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Olaf',
          origine: 'Scalescorn Bruiser Warrior',
          id: 35,
          cost: 3,
          image: { Olaf: require("../../assets/images/Champion/Olaf.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Ryze',
          origine: 'Guild Mage',
          id: 36,
          cost: 3,
          image: { Ryze: require("../../assets/images/Champion/Ryze.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Sylas',
          origine: 'Whispers Mage Bruiser',
          id: 37,
          cost: 8,
          image: { Sylas: require("../../assets/images/Champion/Sylas.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Varus',
          origine: 'Astral Swiftshot',
          id: 38,
          cost: 3,
          image: { Varus: require("../../assets/images/Champion/Varus.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Volibear',
          origine: 'Shimmerscale Dragonmancer Legend',
          id: 39,
          cost: 3,
          image: { Volibear: require("../../assets/images/Champion/Volibear.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Idas',
          origine: 'Dragon Shimmerscale Gardien',
          id: 41,
          cost: 8,
          image: { Idas: require("../../assets/images/Champion/Idas.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'SyFen',
          origine: 'Dragon Whispers Bruiser',
          id: 42,
          cost: 4,
          image: { SyFen: require("../../assets/images/Champion/SyFen.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'ShiOhYu',
          origine: 'Dragon Jade Mystic',
          id: 43,
          cost: 8,
          image: { ShiOhYu: require("../../assets/images/Champion/ShiOhYu.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Corki',
          origine: 'Revel Cannoneer',
          id: 44,
          cost: 4,
          image: { Corki: require("../../assets/images/Champion/Corki.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Talon',
          origine: 'Guild Assassin',
          id: 45,
          cost: 4,
          image: { Talon: require("../../assets/images/Champion/Talon.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
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
          name: 'Hecarim',
          origine: 'Ragewing Cavalier',
          id: 46,
          cost: 4,
          image: { Hecarim: require("../../assets/images/Champion/Hecarim.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Neeko',
          origine: 'Shapeshifter Jade',
          id: 47,
          cost: 4,
          image: { Neeko: require("../../assets/images/Champion/Neeko.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Sona',
          origine: 'Revel Evoker',
          id: 48,
          cost: 4,
          image: { Sona: require("../../assets/images/Champion/Sona.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Xayah',
          origine: 'Ragewing Swiftshot',
          id: 60,
          cost: 4,
          image: { Xayah: require("../../assets/images/Champion/Xayah.png") },
          itemList: {
            itemsA: [20, 10, 39, 23, 16, 33],
            itemsB: [36, 21, 26],
            itemsC: [13, 4, 22]
          }
        },
        {
          name: 'AoShin',
          origine: 'Dragon Tempest',
          id: 50,
          cost: 10,
          image: { AoShin: require("../../assets/images/Champion/AoShin.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'AurelionSol',
          origine: 'Dragon Astral Evoker',
          id: 51,
          cost: 10,
          image: { AurelionSol: require("../../assets/images/Champion/AurelionSol.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Shyvana',
          origine: 'Dragon Ragewing Shapeshifter',
          id: 52,
          cost: 10,
          image: { Shyvana: require("../../assets/images/Champion/Shyvana.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Bard',
          origine: 'Bard Guild Mystic',
          id: 53,
          cost: 5,
          image: { Bard: require("../../assets/images/Champion/Bard.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Yasuo',
          origine: 'Mirage Dragonmancer Warrior',
          id: 54,
          cost: 5,
          image: { Yasuo: require("../../assets/images/Champion/Yasuo.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Zoé',
          origine: 'Shimmerscale Mage Spell Thief',
          id: 55,
          cost: 5,
          image: { 'Zoé': require("../../assets/images/Champion/Zoé.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Pyke',
          origine: 'Whispers Assassin',
          id: 56,
          cost: 5,
          image: { Pyke: require("../../assets/images/Champion/Pyke.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Soraka',
          origine: 'Jade Starcaller',
          id: 57,
          cost: 5,
          image: { Soraka: require("../../assets/images/Champion/Soraka.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
        },
        {
          name: 'Daeja',
          origine: 'Mirage Dragon',
          id: 59,
          cost: 8,
          image: { Daeja: require("../../assets/images/Champion/Daeja.png") },
          itemList: {
            itemsA: [],
            itemsB: [],
            itemsC: [2]
          }
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
