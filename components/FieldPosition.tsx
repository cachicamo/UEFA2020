import React from 'react'
import { View, StyleSheet } from 'react-native'

import FieldPlayer from './FieldPlayer'

type FieldPositionProps = {
  players: { [key: string]: null[]};
  position: string;
  index: number;
}
const FieldPosition = (props: FieldPositionProps) => {

  const {players, position, index} = props;

  return (
    <View 
    key={index}
    style={styles.container}
  >
    {players[position].map((player, i) => (
      <FieldPlayer key={i} player={player} position={position} />
  ))}</View>
  )
}

export default FieldPosition

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    width: '100%', 
  },
});