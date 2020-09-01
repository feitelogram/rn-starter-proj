import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

interface YelpResults {
  total: number;
  businesses: YelpResult[];
}

interface YelpResult {
  rating: number;
  price: string;
  id: string;
  name: string;
  image_url: string;
}

const SearchScreen = () => {
  const [input, setInput] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const onSubmit = (term: string) => {
    if (typeof searchApi === 'function') searchApi(term);
  };

  return (
    <View>
      <SearchBar
        term={input}
        setTerm={setInput}
        onSubmit={() => {
          onSubmit(input);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
      <ResultsList />
      <ResultsList />
      <ResultsList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
