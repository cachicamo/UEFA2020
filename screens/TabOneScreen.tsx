import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, Pressable, Text, Alert, View } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import Field  from '../components/Field';
import TeamStats from '../components/TeamStats';
import PlayerListItem from '../components/PlayerListItem';
import { players } from '../assets/data/players'
import Filters from '../components/Filters';

export default function TabOneScreen() {
  const playersButtomSheet = useRef<BottomSheet>(null);
  const filterBottomSheet = useRef<BottomSheet>(null);

  const viewPlayers = () => {
    playersButtomSheet.current?.expand();
  };
  
  // const filterBottomSheet = () => {
  //   filterBottomSheet.current?.expand();
  // };

  const snapPoints = [0, '50%', '50%']

  return (
    <SafeAreaView style={styles.container}>

      <TeamStats />

      <Field />

      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View players</Text>
      </Pressable>

      

      <BottomSheet
        ref={playersButtomSheet}
        index={0}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <Pressable onPress={() => filterBottomSheet.current?.expand()} style={styles.buttonContainer}>
          <Text>Filters</Text>
        </Pressable>
        <View style={styles.contentContainer}>
          <BottomSheetFlatList
            data={players}
            renderItem={({item}) => (<PlayerListItem player={item}/>)}
          />
        </View>
      </BottomSheet>
      <BottomSheet
        ref={filterBottomSheet}
        index={0}
        snapPoints={snapPoints}
      >
        <Filters />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#72cc5e',
  },
  buttonContainer: { 
    backgroundColor: 'orange',
    width: '90%',
    margin: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 'auto',
  },
  contentContainer: {
    flex: 1,
  },
});
