import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { YelpResult } from '../types/YelpResult';
import ResultsDetail from './ResultsDetail';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface ResultsListProps {
  header: string;
  results: YelpResult[];
}

const ResultsList = ({ header, results }: ResultsListProps) => {
  const navigation = useNavigation();

  if (!results.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item: YelpResult) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
