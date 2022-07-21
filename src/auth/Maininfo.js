import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/ProgressLine';
const Maininfo = () => {
  return (
    <View style={styles.container}>
      <Header progress={40} />
      <Text>Maininfo</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default Maininfo;
