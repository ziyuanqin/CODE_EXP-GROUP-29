import { View, Text, StyleSheet, Image, Alert } from "react-native";
import React, { useState } from "react";
import {
  Stack,
  Radio,
  Button,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
} from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const StackNav = createStackNavigator();

export default function MoodTracker() {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNav.Screen name="Home" component={MoodToday} />
      <StackNav.Screen name="Statistics" component={Stat} />
    </StackNav.Navigator>
  );
}

function MoodToday() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 100, alignItems: "flex-end" }}>
        <Button
          style={{ margin: 20 }}
          onPress={() => navigation.navigate("Statistics")}
        >
          Statistics
        </Button>
      </View>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 30,
          margin: 10,
          marginBottom: 30,
          fontFamily: "sans-serif-medium",
        }}
      >
        How are you feeling today?
      </Text>
      <Image
        source={require("../assets/emoji.png")}
        style={{
          alignSelf: "center",
          height: 110,
          width: 395,
          //   resizeMode: "stretch",
        }}
      />
      <Radio.Group
        name="mood"
        defaultValue="3"
        accessibilityLabel="pick a mood"
      >
        <Stack direction="row" mb="2.5" mt="3" ml="7" space={9}>
          <Radio value="1" my={1}>
            1
          </Radio>
          <Radio value="2" my={1}>
            2
          </Radio>
          <Radio value="3" my={1}>
            3
          </Radio>
          <Radio value="4" my={1}>
            4
          </Radio>
          <Radio value="5" my={1}>
            5
          </Radio>
        </Stack>
      </Radio.Group>
      <Button
        style={{ alignSelf: "center", marginTop: 20 }}
        onPress={() => Alert.alert("Mood recorded!")}
      >
        Submit
      </Button>
    </View>
  );
}

// function Success() {
//   return (
//     <Alert status="success">
//       <VStack space={2} flexShrink={1} w="100%">
//         <HStack flexShrink={1} space={2} justifyContent="space-between">
//           <HStack space={2} flexShrink={1}>
//             <Alert.Icon mt="1" />
//             <Text fontSize="md" color="coolGray.800">
//               Mood recorded!
//             </Text>
//           </HStack>
//           <IconButton
//             variant="unstyled"
//             _focus={{
//               borderWidth: 0,
//             }}
//             icon={<CloseIcon size="3" />}
//             _icon={{
//               color: "coolGray.600",
//             }}
//           />
//         </HStack>
//       </VStack>
//       console.log("yes")
//     </Alert>
//   );
// }

function Stat() {
  return (
    <View>
      <Image
        source={require("../assets/line_graph.png")}
        style={{
          alignSelf: "center",
          height: 260,
          width: 300,
          marginTop: 30,
          //   resizeMode: "stretch",
        }}
      />
      <Image
        source={require("../assets/pie_chart.png")}
        style={{
          alignSelf: "center",
          height: 260,
          width: 330,
          marginTop: 20,
          //   resizeMode: "stretch",
        }}
      />
    </View>
  );
}
