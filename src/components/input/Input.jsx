import React from 'react';

import {
  Text,
  TextInput,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Input = () => {
  return (
    <View>
      <Text>
        <AntDesign name="user" color="white" style={{fontSize: 20}} />
        <AntDesign name="star" color="white" style={{fontSize: 20}} />
      </Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor={'white'}
        style={{
          borderBottomColor: 'white',
          borderBottomWidth: 1,
          paddingVertical: 0,
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 20,
        }}
        keyboardType="default"
      />
    </View>
  );
};

export default Input;
