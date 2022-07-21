//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Additional = () => {
  return (
    <View style={styles.container}>
      <Text>Additional</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Additional;
