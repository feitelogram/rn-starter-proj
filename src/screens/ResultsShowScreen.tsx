import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

interface RSSProps {
  route: RouteProp<RootStackParamList, 'Show'>;
}

interface BusinesssInfo {
  photos: string[];
  name: string;
}

const ResultsShowScreen = ({ route }: RSSProps) => {
  const id = route.params.id || '0';
  const [info, setInfo] = useState({ photos: [], name: '' });

  const getResult = async (id: string) => {
    const resp = await yelp.get(`/${id}`);
    try {
      setInfo(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!info) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>{info.name}</Text>
      <FlatList
        data={info.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
