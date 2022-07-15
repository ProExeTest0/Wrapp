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
const Oops = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Emoji iconSource={icons.oops} />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 32,
          marginTop: hp(6.89),
        }}>
        Oops!
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
        You've encountered an issue. Try refreshing the page, and if this error
        persists, please contact us at
        <TouchableOpacity>
          <Text style={{color: '#F271B1'}}> hello@wrapp.co </Text>
        </TouchableOpacity>
        and we'll get back to you ASAP!
      </Text>
      <TouchableOpacity>
        <View
          style={{
            marginTop: hp(8),
          }}>
          <Button
            btnName={'Try Again'}
            onpress={() => navigation.navigate('Explore')}
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
export default Oops;
