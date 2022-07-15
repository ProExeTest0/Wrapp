//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import * as Progress from 'react-native-progress';

import ProgressLine from '../../components/ProgressLine';
import {useState} from 'react';

// create a component
const Email = () => {
  const [data, setData] = useState(0.5);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ProgressLine
        value={data}
        onAdd={() => setData(data + 0.1)}
        onRemove={() => setData(data - 0.1)}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Email;
