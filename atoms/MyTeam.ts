import { atom, selector } from "recoil";
import { Player, Positions } from "../types";

const positions = ['FWD', 'MID', 'DEF', 'GCK'] as Positions[];

export const myFormationState = atom({
  key: "myFormationState",
  default: {
    FWD: 3,
    MID: 3,
    DEF: 4,
    GCK: 1,
  }
});

export const myPlayersState = atom({
  key: "myPlayersState",
  default: [] as Player[],
});

export const myPlayersByPosition = selector({
  key: 'myPlayersByPosition',
  get: ({ get }) => {
    const players = get(myPlayersState);
    const formation = get(myFormationState);

    const groupedPlayers = {};
    
    positions.forEach((position) => {
      groupedPlayers[position] = players.filter((p) => p.position === position);
      //fill with null values up to max amount per formation
      for(let i = groupedPlayers[position].length; i < formation[position]; i++) {
        groupedPlayers[position].push(null);
      }
    });

    return groupedPlayers;
  }
});

export const numberOfPlayers = selector({
  key: 'numberOfPlayers',
  get: ({ get }) => {
    return get(myPlayersState).length
  },
});

export const valueOfPlayers = selector({
  key: 'valueOfPlayers',
  get: ({ get }) => {
    return get(myPlayersState).reduce((acc, player) => acc + player.price, 0);
  },
});