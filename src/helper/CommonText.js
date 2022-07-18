//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const CommonText = ({lablename, textdata, textstyle}) => {
  return (
    <View style={[textstyle]}>
      <Text style={styles.headertext}>{lablename}</Text>
      <Text style={styles.smalltext}>{textdata}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  headertext: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 32,
  },
  smalltext: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 15,
    lineHeight: 20,
  },
});

//make this component available to the app
export default CommonText;
