//import liraries
import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ProgressLine from '../../components/ProgressLine';
import {useState} from 'react';
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
const styles = StyleSheet.create({});
export default Email;
