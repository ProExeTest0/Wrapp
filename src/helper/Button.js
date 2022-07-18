//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const Button = ({btnName, onpress, btnstyle, img, isBorderButton}) => {
  //   console.log('props',);
  console.log(onpress);

  // const isBorderButton = true;

  return (
    // <TouchableOpacity style={[styles.container, btnstyle]} onPress={onpress}>
    <TouchableOpacity
      style={isBorderButton ? styles.boredrButtonStyle : styles.container}
      onPress={onpress}>
      <Image
        style={{
          height: 25,
          width: 25,
          // backgroundColor: 'red',
          margin: 10,
          marginLeft: 25,
          top: 5,
        }}
        source={img}
      />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 15,
          bottom: 25,
        }}>
        {btnName}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(75),
    height: hp(8),
    backgroundColor: '#FAA8D1',
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    top: 20,
  },
  boredrButtonStyle: {
    width: wp(75),
    height: hp(8),
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    top: 20,
    // marginVertical: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
});
export default Button;
