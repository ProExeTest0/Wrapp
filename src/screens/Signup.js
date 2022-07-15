//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import Button from '../../components/Button';
import {icons} from '../helper/iconConstant';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native';
const Signup = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onHidePress = () => {
    setModalVisible(false);
    navigation.navigate('Email');
  };
  
  return (
    <View style={styles.container}>
      <Image style={styles.imagestyle} source={icons.signupgroupphoto} />
      <View style={{marginTop: 40}}>
        <Button
          btnName={'Sign Up'}
          btnstyle={{margin: 20, width: '75%', height: 75}}
          onpress={() => setModalVisible(true)}
        />
        <Button
          btnName={'Create your profile'}
          btnstyle={{
            borderWidth: 2,
            backgroundColor: 'white',
            width: '75%',
            height: 75,
          }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={{margin: 0, flex: 1}}>
          <View style={styles.modelevent}>
            <TouchableOpacity onPress={() => onHidePress()}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagestyle: {
    height: 500,
    width: '100%',
  },
  modelevent: {
    backgroundColor: 'white',
    flex: 0.5,
  },
});

//make this component available to the app
export default Signup;
