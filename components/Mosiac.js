import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import data from '../data';
import LinearGradient from 'react-native-linear-gradient';

const Mosiac = () => {
  const mosaic = () => {
    return data.map((user) => {
      return (
        <View key={user.id} style={styles.item}>
          <ImageBackground
            imageStyle={{borderRadius: 20}}
            source={{uri: user.image_link}}
            style={styles.image}>
            <LinearGradient
              start={{x: 0.1, y: 0.5}}
              end={{x: 0.1, y: 1}}
              colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}
              style={styles.linearGradient}>
              <Text style={styles.text}>{user.headline}</Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      );
    });
  };

  return <View style={styles.container}>{mosaic()}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 800,
    overflow: 'hidden',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 250,
    width: 200,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  item: {
    height: 250,
    margin: 3,
    flexBasis: '48%',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 15,
    color: '#fff',
    alignSelf: 'flex-end',
  },
  linearGradient: {
    height: 250,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    borderRadius: 20,
  },
});

export default Mosiac;
