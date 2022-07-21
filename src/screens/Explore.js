//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Emoji from '../helper/Emoji';
import Button from '../helper/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {icons} from '../helper/iconConstant';
import CommonText from '../helper/CommonText';

// create a component
const Explore = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Emoji iconSource={icons.explore} />
      <CommonText
        lablename={'Explore locally'}
        textdata={
          'Explore locally Wrapp is currently only available in Italy and Spain.'
        }
      />

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
