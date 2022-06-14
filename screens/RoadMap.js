import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Box, Button, Modal, FormControl, Input, TextArea } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

function Achievments() {
  return (
    <View style={{ flex: 1, backgroundColor: "#BCEFE3" }}>
      <Image
        source={require("../assets/achievement.png")}
        style={{
          alignSelf: "center",
          height: 750,
          width: 380,
          //   resizeMode: "stretch",
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function RoadMap() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={FirstStack} />
      <Stack.Screen name="Achievements" component={Achievments} />
    </Stack.Navigator>
  );
}

function FirstStack() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Box style={{ height: 150, alignItems: "flex-end" }}>
        <Button
          style={{ margin: 20 }}
          onPress={() => navigation.navigate("Achievements")}
        >
          View Achievments
        </Button>
        <Button
          style={{ margin: 20, marginTop: 10 }}
          onPress={() => setShowModal(true)}
        >
          Time Capsule
        </Button>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          alignSelf="center"
          width="110%"
        >
          <Modal.Content maxWidth="800px">
            <Modal.CloseButton />
            <Modal.Header>Write a time capsule!</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label style={{ fontSize: 7 }}>
                  Email
                </FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Received Date</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Message</FormControl.Label>
                <TextArea
                  h={130}
                  placeholder="What do you want to ask yourself 5 years later?"
                  w="100%"
                  maxW="300"
                />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Send
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Box>
      <Image
        source={require("../assets/map.png")}
        style={{
          alignSelf: "center",
          height: 550,
          width: 390,
          //   resizeMode: "stretch",
        }}
      />
    </View>
  );
}
