//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../helper/Button';
import {icons} from '../helper/iconConstant';
import Modal from 'react-native-modal';
import CommonText from '../helper/CommonText';
const Signup = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onEmailSigninPress = () => {
    navigation.navigate('emailsign');
  };
  const onGmailigninPress = () => {
    navigation.navigate('progress');
  };
  const onappleSigninPress = () => {
    navigation.navigate('emailsign');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.imagestyle} source={icons.signupgroupphoto} />

      <View>
        <Button
          btnName={'Sign Up'}
          btnstyle={styles.signupbtn}
          onpress={() => setModalVisible(true)}
        />
        <Button btnName={'Create your profile'} isBorderButton={true} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{margin: 0}}>
        <View style={styles.modelbackground}>
          <View style={styles.modelview}>
            <CommonText
              lablename={'Sign up with'}
              textstyle={{top: 30, marginRight: 150}}
            />
            <Button
              img={icons.email}
              iconSource={icons.apple}
              btnstyle={[styles.loginbtn]}
              btnText={{marginRight: 150}}
              onpress={() => {
                onEmailSigninPress(), setModalVisible(false);
              }}
              btnName={'Email'}
            />
            <Button
              img={icons.gmail}
              btnstyle={styles.loginbtn}
              btnText={{marginRight: 150}}
              onpress={() => {
                onGmailigninPress(), setModalVisible(false);
              }}
              btnName={'Gmail'}
            />
            <Button
              img={icons.apple}
              btnstyle={styles.loginbtnApple}
              oonpress={() => {
                onappleSigninPress(), setModalVisible(false);
              }}
              isBorderButton={true}
              btnText={{color: 'white', marginRight: 50}}
              btnName={'Sign Up with Apple'}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  imagestyle: {
    height: 500,
    width: '100%',
  },
  modelbackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  signupbtn: {
    margin: 20,
    width: '75%',
    height: 75,
  },
  profilebtn: {
    borderWidth: 2,
    backgroundColor: 'white',
    width: '75%',
    height: 75,
  },
  modelview: {
    height: 380,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  loginbtn: {
    borderWidth: 2,
    backgroundColor: 'white',
    width: '85%',
  },
  loginbtnApple: {
    borderWidth: 2,
    backgroundColor: 'black',
    width: '85%',
  },
});
export default Signup;
