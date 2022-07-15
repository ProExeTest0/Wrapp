//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// create a component
const Button = ({btnName, onpress, btnstyle}) => {
  //   console.log('props',);
  console.log(onpress);
  return (
    <View>
      <TouchableOpacity onPress={onpress}>
        <View style={[styles.container, btnstyle]}>
          <Text style={{textAlign: 'center', fontWeight: '700', fontSize: 15}}>
            {btnName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(45),
    height: hp(8),
    backgroundColor: '#FAA8D1',
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    top: 20,
  },
});
export default Button;
