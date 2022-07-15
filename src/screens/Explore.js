//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Emoji from '../../components/Emoji';
import Button from '../../components/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {icons} from '../helper/iconConstant';

// create a component
const Explore = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Emoji iconSource={icons.explore} />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 32,
          marginTop: hp(6.89),
        }}>
        Explore locally
      </Text>
      <Text
        style={{
          fontWeight: '400',
          textAlign: 'center',
          fontSize: 15,
          marginHorizontal: wp(8.5),
          marginTop: hp(1.47),
          lineHeight: hp(2.77),
        }}>
        Wrapp is currently only available in Italy and Spain.
      </Text>
      <TouchableOpacity>
        <View
          style={{
            marginTop: hp(13.67),
          }}>
          <Button
            btnName={'Explore'}
            onpress={() => navigation.navigate('onboard')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
});

//make this component available to the app
export default Explore;
