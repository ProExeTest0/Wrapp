//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const Emoji = ({iconSource, emojiContainer}) => {
  return (
    // <View style={{paddingTop: 50}}>
    <View style={[styles.mainContainer, emojiContainer]}>
      <Image style={{height: hp(14), width: wp(30)}} source={iconSource} />
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: hp(32),
    width: hp(32),
    borderRadius: hp(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCE6E9',
    alignSelf: 'center',
  },
});

export default Emoji;
