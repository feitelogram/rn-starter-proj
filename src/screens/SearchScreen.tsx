import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { YelpResult } from '../types/YelpResult';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
  const [input, setInput] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const onSubmit = (term: string) => {
    if (typeof searchApi === 'function') searchApi(term);
  };

  const filterByPrice = (price: string): YelpResult[] => {
    if (results.length) {
      return results.filter((result: YelpResult) => {
        return result.price === price;
      });
    } else {
      return [];
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={input}
        setTerm={setInput}
        onSubmit={() => {
          onSubmit(input);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList header='Cost Effective' results={filterByPrice('$')} />
        <ResultsList header='Bit Pricier' results={filterByPrice('$$')} />
        <ResultsList header='Big Spender!' results={filterByPrice('$$$')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
