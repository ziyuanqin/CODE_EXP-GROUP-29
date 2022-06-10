import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import Header from './components/Header';

export default function App() {
  const pressHandler = () => {
    navigation.navigate('CountDown')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
        <View style={styles.content}>
          <Button title="Go to Count Down" onPress={pressHandler}/>
        </View>
      </View>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    padding: 40,
  },
  content: {
    marginTop: 410
  }
});
