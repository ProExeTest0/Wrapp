import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import Button from '../helper/Button';
import CommonText from '../helper/CommonText';
import Emoji from '../helper/Emoji';
import {icons} from '../helper/iconConstant';

const Onboard = ({navigation}) => {
  const ref = useRef();
  const [change, setChange] = useState(0);
  console.log('change', change);

  const Nextbtn = () => {
    return (
      <TouchableOpacity
        style={{
          marginTop: 5,
          marginRight: 10,
          alignSelf: 'flex-end',
          flexDirection: 'row',
          marginBottom: 40,
        }}
        onPress={() => {
          navigation.navigate('signup');
        }}>
        <Text style={{fontWeight: '700'}}>Skip </Text>
        <Image style={{height: 17, width: 20}} source={icons.skipArrow} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{flex: 4, backgroundColor: 'white'}}>
        <Swiper
          ref={ref}
          style={styles.wrapperimage}
          activeDotColor={'black'}
          activeDotStyle={{width: 20, marginBottom: 200}}
          dotColor={'gray'}
          onIndexChanged={index => {
            setChange(index);
          }}
          loop={false}
          dotStyle={{
            marginBottom: 200,
          }}>
          <View>
            <Nextbtn />
            <Emoji iconSource={icons.firstonboard} />
            <CommonText
              textstyle={{marginTop: 90}}
              lablename={'Make new friends'}
              textdata={
                '   Wrapp helps you truly connect with cool people in your area that share the same interests as you '
              }
            />
          </View>
          <View>
            <Nextbtn />
            <Emoji
              iconSource={icons.secondonboard}
              emojiContainer={{backgroundColor: '#FBF3D7'}}
            />
            <CommonText
              textstyle={{marginTop: 90}}
              lablename={'Find new events'}
              textdata={
                ' Wrapp up your week with a fun event in your area or even create your own! '
              }
            />
          </View>

          <View style={{marginTop: 60}}>
            <Emoji
              iconSource={icons.thirdonbord}
              emojiContainer={{backgroundColor: '#E9E6FC'}}
            />
            <CommonText
              textstyle={{marginTop: 90}}
              lablename={'Let s begin!'}
              textdata={' Kick off your experienceby exploring the app '}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Button
          btnName={change < 2 ? 'Continue' : 'Explore'}
          btnstyle={{width: '45%'}}
          onpress={() => {
            if (change < 2) {
              ref.current.scrollBy(change + 1);
            } else {
              navigation.navigate('signup');
            }
          }}
        />
      </View>
    </>
  );
};
export default Onboard;
const styles = StyleSheet.create({
  wrapperimage: {
    marginTop: 60,
    marginBottom: 190,
    backgroundColor: 'white',
  },
});
