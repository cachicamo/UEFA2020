import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

type FieldPlayersProps = {
  player: null
  position: string
};

const FieldPlayer = (props: FieldPlayersProps) => {

  const {player, position} = props;

  return (
    <View style={{ alignItems: 'center' }}>
      <FontAwesome5 name="tshirt" size={48} color={player ? '#d170db' : '#5c5c5cbb'} />
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
});