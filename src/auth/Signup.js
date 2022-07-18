//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button from '../helper/Button';
import {icons} from '../helper/iconConstant';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native';

const Signup = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onHidePress = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.imagestyle} source={icons.signupgroupphoto} />
      {/* <View style={{marginTop: 40, backgroundColor: 'red'}}> */}
      <View>
        <Button
          btnName={'Sign Up'}
          btnstyle={styles.signupbtn}
          onpress={() => setModalVisible(true)}
        />
        <Button
          btnName={'Create your profile'}
          // btnstyle={styles.profilebtn}
          isBorderButton={true}
        />
      </View>
      {/* </View> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{margin: 0}}>
        <View style={styles.modelbackground}>
          <View style={styles.modelview}>
            <Button
              iconSource={icons.apple}
              btnstyle={[styles.loginbtn]}
              onpress={() => onHidePress()}
            />
            <Button btnstyle={styles.loginbtn} onpress={() => onHidePress()} />
            <Button
              img={icons.apple}
              // iconSource={icons.apple}
              btnstyle={styles.loginbtnApple}
              onpress={() => onHidePress()}
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
    height: 335,
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
