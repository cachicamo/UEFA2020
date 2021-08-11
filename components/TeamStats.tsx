import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useRecoilValue } from 'recoil'
import { numberOfPlayers, valueOfPlayers } from '../atoms/MyTeam'

const TeamStats = () => {
  const nOfPlayers = useRecoilValue(numberOfPlayers);
  const vOfPlayers = useRecoilValue(valueOfPlayers);

  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.label}>Players</Text>
        <Text style={styles.value}>{nOfPlayers}/ 15</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.label}>Remaining</Text>
        <Text style={styles.value}>${((100_000_000 - vOfPlayers)/1_000_000).toFixed(1)}m</Text>
      </View>
     
    </View>
  )
}

export default TeamStats;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 3,
    borderColor: '#42cbf5',
    borderRadius: 15,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
  },
  valueContainer: {
    marginRight: 25,
  },
  label: {
    color: '#333',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});