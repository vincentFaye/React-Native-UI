import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import data from '../data';

const LatestMembers = () => {
  const latestMembers = () => {
    return data.map((user) => {
      return (
        <View key={user.id} style={styles.item}>
          <Image style={styles.userImage} source={{uri: user.user_avatar}} />
          <Text>{user.username}</Text>
        </View>
      );
    });
  };
  return (
    <View>
      <View>
        <Text style={styles.title}>Latest Members</Text>
      </View>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {latestMembers()}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a4b0be',
    marginVertical: 8,
    borderBottomColor: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    paddingTop: 15,
    fontWeight: 'bold',
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: 20,
  },
  item: {
    alignItems: 'center',
    padding: 5,
  },
});

export default LatestMembers;
