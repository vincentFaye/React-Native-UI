import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Basic Demo UI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff7550',
    borderRadius: 8,
    elevation: 6,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 15,
    color: '#fff',
  },
});

export default Heading;
