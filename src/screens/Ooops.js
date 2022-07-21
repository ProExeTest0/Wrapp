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
import Emoji from '../helper/Emoji';
import Button from '../helper/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {icons} from '../helper/iconConstant';
import CommonText from '../helper/CommonText';
const Oops = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Emoji iconSource={icons.oops} />
        <CommonText
          textstyle={{marginTop: 50}}
          lablename={'oops'}
          textdata={
            'You’ve encountered an issue. Try refreshing the page, and if this error persists, please contact us at hello@wrapp.co and we’ll get back to you ASAP!'
          }
        />

        <View
          style={{
            marginTop: hp(8),
          }}>
          <Button
            btnName={'Try Again'}
            onpress={() => navigation.navigate('explore')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
});
export default Oops;
