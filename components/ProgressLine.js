import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {useState} from 'react';

const ProgressLine = ({value, onAdd, onRemove}) => {
  return (
    <View style={styles.container}>
      <Progress.Bar progress={value} width={300} />
      <TouchableOpacity onPress={onAdd}>
        <Text>add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemove}>
        <Text>remove</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default ProgressLine;
