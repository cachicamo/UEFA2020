import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Player } from '../types';

interface Props {
  player: Player;
};

const PlayerListItem = ({ player }: Props) => (
  <View style={styles.container}>
    <Image  source={{ uri: `https://media.api-sports.io/football/players/${player.id}.png`}} style={styles.image} />

    <View style={styles.nameContainer}>
      <Text style={styles.name}>{player.name}</Text>
      <Text>{player.match}</Text>
    </View>

    <View  style={styles.position}>
      <Text style={styles.positionCost}>
        ${(player.price / 1_000_000).toFixed(1)}m
      </Text>
      <Text>{player.position}</Text>
    </View>

    <Text style={styles.points}>{player.totalPoints}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#eee'
  },
  nameContainer: {
    flexGrow: 1,
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  position: {
    marginHorizontal: 15,
    alignItems: 'flex-end',
  },
  positionCost: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlayerListItem
