import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/ProgressLine';
import CommonText from '../helper/CommonText';
import {TextInput} from 'react-native-paper';
import Button from '../helper/Button';
const EmailSignup = ({navigation}) => {
  return (
    <>
      <Header progress={20} />
      <View>
        <CommonText lablename={'Sign up with email'} />
        <TextInput
          label={'Email'}
          placeholderTextColor={'#3C3C3C'}
          activeUnderlineColor={'black'}
          underlineColor={'black'}
          style={{backgroundColor: null, margin: 10}}
        />
        <TextInput
          label={'Password'}
          placeholderTextColor={'#3C3C3C'}
          underlineColor={'black'}
          activeUnderlineColor={'black'}
          secureTextEntry={true}
          style={{backgroundColor: null, margin: 10}}
        />
        <TextInput
          label={'Confirm Password'}
          placeholderTextColor={'#3C3C3C'}
          underlineColor={'black'}
          activeUnderlineColor={'black'}
          style={{backgroundColor: null, margin: 10}}
        />
      </View>
      <Button
        btnName={'Continue'}
        onpress={() => navigation.navigate('maininfo')}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default EmailSignup;
