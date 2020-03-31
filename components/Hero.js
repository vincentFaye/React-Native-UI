import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Hero = () => {
  return (
    <View>
      <ImageBackground
        style={styles.image}
        imageStyle={{borderRadius: 10}}
        source={require('../img/mountain.jpg')}>
        <LinearGradient
          style={styles.linearGradient}
          start={{x: 0.1, y: 0.6}}
          end={{x: 0.1, y: 1}}
          colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}>
          <Text style={styles.heroText}>Over the horizon</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    height: 250,
  },
  heroText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-end',
    paddingLeft: 50,
    paddingBottom: 25,
  },
  linearGradient: {
    flexDirection: 'row',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top:0,
  }
});

export default Hero;
