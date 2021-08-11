import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import React from 'react'
import { View, Text } from 'react-native'
import { useRecoilState, useRecoilValue } from 'recoil';

import { allPlayersState, filteredPlayers } from '../atoms/Players';
import PlayerListItem from './PlayerListItem';

// import {players} from '../assets/data/players'
const PlayersList = () => {
  // you can useRecoilState
  // const [players, setPlayers] = useRecoilState(allPlayersState)
  // const [players] = useRecoilState(allPlayersState)
  // const [setPlayers] = useRecoilState(allPlayersState)
  
  // you can also use useRecoilValue if you dont need setters
  const players = useRecoilValue(filteredPlayers);

  // test recoil, list empty after 5 secs
  // setInterval(() => setPlayers([]), 5000);

  return (
    <BottomSheetFlatList
      data={players}
      renderItem={({item}) => (<PlayerListItem player={item}/>)}
    />
  )
}

export default PlayersList;
