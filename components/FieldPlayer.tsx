import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

type FieldPlayersProps = {
  player: null
  position: string
};

const FieldPlayer = (props: FieldPlayersProps) => {

  const {player, position} = props;

  return (
    <View style={{ alignItems: 'center' }}>
      {!player && 
        <FontAwesome5 name="tshirt" size={48} color={player ? '#d170db' : '#5c5c5cbb'} />
      }
      {player && (
        <View style={styles.playerContainer}>
        {/* <Image  source={{ uri: `https://media.api-sports.io/football/players/${player.id}.png`}} style={styles.image} /> */}
        <Image  source={{ uri: player?.photo}} style={styles.image} />
        <Text style={styles.text}>
          {player?.name} 
        </Text>
        </View>
      )}
      <Text style={styles.text}>
        {position}
      </Text>
    </View>
  )
};

export default FieldPlayer;

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#333333bb',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 2,
    paddingHorizontal: 5,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  playerContainer: {
    alignItems: 'center',
  },
});