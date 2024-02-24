import React from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

export const Onboarding1 = () => {
  return (
   <SafeAreaView style={styles.container}>
        <View>
            <Text>Hi from Onboarding1!</Text>
        </View>
   </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});