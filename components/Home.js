import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Header from './components/Header';

export default function Home({ navigation }) {
    const [eventName, setName] = useState();
    const [numberPpl, setNum] = useState();

    const pressHandler = () => {
        navigation.navigate('CountDown')
    }

    return (
        <View style={styles.container}>
        <Header/>
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


        <Button title="Go to Countdown Page" onPress={pressHandler}/>
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
        fontSize: '20px',
        fontStyle: 'bold'
    }
});