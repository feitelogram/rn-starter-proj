import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface SearchBarProps {
  term?: string;
  setTerm?: (text: string) => void;
  onSubmit?: () => void;
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <View style={styles.backgroundColor}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder='Search'
        value={props.term}
        onChangeText={props.setTerm}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={props.onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
