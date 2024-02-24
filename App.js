import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [personName, setPersonName] = useState("John Doe");

  const changeUserName = () => {
    setPersonName("Doe****");
    console.log(personName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.textTitleStyle, styles.textButtonStyle]}>
        Welcome
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={changeUserName}
      >
        <Text style={styles.textButtonStyle}>Chage Name</Text>
      </TouchableOpacity>
      <Text>{personName}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(191, 201, 202)",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: "rgb(0, 0, 0)",
    padding: 10,
    margin: 10,
  },
  textButtonStyle: {
    color: "white",
  },
  textTitleStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});