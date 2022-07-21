//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';

// create a component
const Header = ({progress}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View
        style={{
          height: 25,
          width: '80%',
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 15,
          // alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 16,
            width: `${progress}%`,
            backgroundColor: 'pink',
            borderRadius: 15,
            marginHorizontal: 5,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

//make this component available to the app
export default Header;
