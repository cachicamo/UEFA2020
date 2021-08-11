import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { useRecoilValue } from 'recoil';
import { myPlayersByPosition } from '../atoms/MyTeam';

import FieldPosition from './FieldPosition';
const field = require('../assets/images/field.jpg');

// const players: { [key: string]: null[]} = {
//   FWD: [null, null, null],
//   MED: [null, null, null],
//   DEF: [null, null, null, null],
//   GKC: [null],
// }; // [FWD, MED, DEF, GKC]

const Field = () => {
  const players = useRecoilValue(myPlayersByPosition);

  return (
    <ImageBackground 
        source={field}
        resizeMode='contain'
        style={styles.imageBackground}
      >
        {Object.keys(players).map((position, i) => (
          <FieldPosition key={i} players={players} position={position} index={i}/>
        ))} 
      </ImageBackground>
  )
}

export default Field

const styles = StyleSheet.create({
  imageBackground: { 
    width: '100%', 
    aspectRatio: 2 / 3, 
    justifyContent: 'space-around', 
    alignItems: 'center'
  },
});