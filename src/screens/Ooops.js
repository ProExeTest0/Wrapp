//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Emoji from '../helper/Emoji';
import Button from '../helper/Button';
import {icons} from '../helper/iconConstant';
import CommonText from '../helper/CommonText';
const Oops = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Emoji iconSource={icons.oops} />
      <CommonText
        lablename={'oops'}
        textdata={
          'You’ve encountered an issue. Try refreshing the page, and if this error persists, please contact us at hello@wrapp.co and we’ll get back to you ASAP!'
        }
      />
      <Button
        btnName={'Try Again'}
        onpress={() => navigation.navigate('explore')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
});
export default Oops;
