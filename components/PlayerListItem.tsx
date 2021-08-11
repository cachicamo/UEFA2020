import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useRecoilState } from 'recoil';
import { myFormationState, myPlayersState } from '../atoms/MyTeam'
import { Player } from '../types';

interface Props {
  player: Player;
};

const PlayerListItem = ({ player }: Props) => {
  const [myPlayers, setMyPlayers] = useRecoilState(myPlayersState);
  const [myFormation] = useRecoilState(myFormationState)

  const numberOfPlayersOnPos = myPlayers.filter(
    (p) => p.position === player.position
  ).length;
  
  const onPress = () => {
    setMyPlayers((curPlayers) => {
      if(curPlayers.some((p) => p.id === player.id)) {
        return curPlayers.filter(p => p.id !== player.id)
      } else {
        // CHECK if possible to Add
        if(numberOfPlayersOnPos < myFormation[player.position]) {
          return [...curPlayers, player]
        }
        return curPlayers;
      }
    })
  };

  const isSelected = myPlayers.some((p) => p.id === player.id);
  console.log(player)
  return (
  <Pressable onPress={onPress} style={[styles.container, { backgroundColor: isSelected ? '#d170db' : 'white'}]}>
    {/* <Image  source={{ uri: `https://media.api-sports.io/football/players/${player.id}.png`}} style={styles.image} /> */}
    <Image  source={{ uri: player.photo}} style={styles.image} />

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

    <Text style={styles.points}>{player.totalPoints.toString()}</Text>
  </Pressable>
)};

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

export default PlayerListItem;
