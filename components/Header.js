import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
      <View style={styles.header}>
          <Text style={styles.title}>DSTA NS App</Text>
      </View>
    );
}
  
const styles = StyleSheet.create({
    header: {
        height: 50,
        width: 300,
        paddingTop: 10,
        backgroundColor: 'brown',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});