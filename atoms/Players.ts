import { atom, selector } from "recoil";

// import { players } from '../assets/data/players';
// import response from '../assets/data/response.json';
//    use return response.response.map


const pos2pos = {
  Attacker: "FWD",
  Defender: "DEF",
  MidFielder: "MID",
  Midfielder: "MID",
  Goalkeeper: "GCK",
}

const jsonsrvurl = "http://localhost:8001/response";  // yarn jsonsrv. to run api

// changed from atom to selector for response
// default: players,
export const allPlayersState = selector({
  key: "allPlayersState",
  get: async () => {
    try {
      const response = await fetch(jsonsrvurl);
      const json = await response.json();
      // const response = await fetch(
      // // "https://api-football-v1.p.rapidapi.com/v3/players?league=4&season=2020", 
      // {
      // "method": "GET",
      // // "headers": {
      // //   "x-rapidapi-key": 
      // //     "<your api key>",
      // //   "x-rapidapi-host": 
      // //     "api-football-v1.p.rapidapi.com"
          
      // // }
      // });

      // const json = await response?.json();
      return json.response.map((entry) => ({
        id: entry.player.id.toString(),
        name: entry.player.name,
        photo: entry.player.photo,
        match: "PSG vs ZCC",
        price: 11_300_000,
        position: pos2pos[entry.statistics[0].games.position],
        totalPoints: 29,
      }))
    } catch(e) {
      console.log('Error: ',e);
      return [];
    }
  }
});

// test to show Suspense loading when show players selected
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(
//       response.response.map(entry => ({
//       id: entry.player.id,
//       name: entry.player.name,
//       match: "PSG vs ZCC",
//       price: 11_300_000,
//       position: pos2pos[entry.statistics[0].games.position],
//       totalPoints: 29,
//     })));
//   }, 10_000)
// })

export const positionFilterState = atom({
  key: "positionFilterState",
  default: [] as string[],
});

export const filteredPlayers = selector({
  key: "filteredPlayers",
  get: ({ get }) => {
    const players = get(allPlayersState);
    const filters = get(positionFilterState);

    return players.filter(
      (player) => 
        filters.length === 0 
        || 
        filters.includes(player.position
    ));
  },
});
