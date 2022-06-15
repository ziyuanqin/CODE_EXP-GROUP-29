import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

export default function Countdown() {
  return (
    <Image
      source={require("../assets/countdown.png")}
      style={{
        alignSelf: "center",
        height: 730,
        width: 400,
        //   resizeMode: "stretch",
      }}
    />
  );
}
