/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Heading from './components/Heading';
import Hero from './components/Hero';
import LatestMembers from './components/LatestMembers';
import Mosiac from './components/Mosiac';
import data from './data';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Heading />
          <Hero />
          <LatestMembers />
        </View>
        <View>
          <Text style={styles.mosaicText}>Monday</Text>
        </View>
        <Mosiac />
        <Text style={styles.newsText}>News</Text>
        <FlatList
          style={styles.flatlist}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.rowStyle}>
              <View style={styles.imageContainer}>
                <Image source={{uri: item.image_link}} />
              </View>
              <View style={styles.rightSideContent}>
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    width: 90,
                    backgroundColor: '#7bed9f',
                    textAlign: 'center',
                    borderRadius: 6,
                    paddingVertical: 4,
                  }}>
                  {item.type}
                </Text>
                <Text style={styles.headline}>{item.headline}</Text>
                <View style={styles.avatarAndCaption}>
                  <Image
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{height: 24, width: 24, borderRadius: 12}}
                    source={{uri: item.user_avatar}}
                  />
                  <Text style={{paddingLeft: 10}}>{item.username}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  flatlist: {
    width: '100%',
  },
  rowStyle: {
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: '#a4b0be',
    padding: 5,
    margin: 5,
  },
  imageContainer: {
    height: 120,
    width: Dimensions.get('window').width / 3 - 4,
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  rightSideContent: {
    width: Dimensions.get('window').width / 1.5,
    paddingLeft: 8,
  },
  mosaicText: {
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  newsText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    paddingLeft: 6,
  },
  headline: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  avatarAndCaption: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 15,
  },
});

export default App;
