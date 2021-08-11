import React, { Suspense, useRef } from 'react';
import { StyleSheet, SafeAreaView, Pressable, Text, Alert, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRecoilValue } from 'recoil';


import Field  from '../components/Field';
import TeamStats from '../components/TeamStats';

import Filters from '../components/Filters';
import PlayersList from '../components/PlayersList';
import { positionFilterState } from '../atoms/Players';

export default function TabOneScreen() {
  const playersButtomSheet = useRef<BottomSheet>(null);
  const filterBottomSheet = useRef<BottomSheet>(null);
  const filters = useRecoilValue(positionFilterState);

  const viewPlayers = () => {
    playersButtomSheet.current?.expand();
  };
  
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
        <Pressable 
          onPress={() => filterBottomSheet.current?.expand()} 
          style={styles.buttonContainer}>
          {(filters.length !== 0) && (
            <View style={styles.filterIndicator} ></View>
          )}
          <Text>Filters</Text>
        </Pressable>
        <View style={styles.contentContainer}>
        <Suspense fallback={<Text>Loading players...</Text>}>
          <PlayersList />
        </Suspense>
        </View>
      </BottomSheet>

      <BottomSheet ref={filterBottomSheet} index={0} snapPoints={snapPoints}>
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
    flexDirection: 'row',
    justifyContent: 'center',
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
  filterIndicator: {
    backgroundColor: 'lightgreen',
    height: 15,
    width: 15,
    borderRadius: 50,
    marginHorizontal: 10,
  },
});
