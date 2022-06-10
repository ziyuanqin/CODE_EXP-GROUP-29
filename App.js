import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import CountDown from './components/CountDown';

// import CountDown from './components/CountDown.js';

export default function App() {
  const [eventName, setName] = useState();
  const [numberPpl, setNum] = useState();


  return (
    <View style={styles.container}>

      <Text>Enter Details:</Text>
      <TextInput 
        placeholder='Enter event name' 
        onChangeText={(val) => setName(val)}
      />
      <TextInput 
        placeholder='Enter number of people' 
        keyboardType='numeric'
        onChangeText={(val) => setNum(val)}
      />
      <Text>Event Name: {eventName} {"\n"}Number of Pax: {numberPpl}</Text>
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
});
