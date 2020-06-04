import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
});
