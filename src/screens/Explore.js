//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Emoji from '../helper/Emoji';
import Button from '../helper/Button';
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
      <View>
        <Button
          btnName={'Explore'}
          onpress={() => navigation.navigate('onboard')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
});
export default Explore;
