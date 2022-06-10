import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function CountDown() {
  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>- Major Milestone -</Text>
      <Button title="Click me to go to Home" onPress={pressHandler}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
      fontSize: '20px',
      fontStyle: 'bold'
  }
});