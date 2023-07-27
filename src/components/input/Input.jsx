import React from 'react';

import {
  Text,
  TextInput,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import color from '../../styles/color';

const Input = ({placeholder, icon, keyboard, is_password}) => {
  return (
    <View style={{width: '100%', marginBottom: 15}}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 25,
          alignItems: 'center',
          position: 'relative',
        }}>
        <AntDesign
          style={{padding: 10}}
          name={icon}
          size={20}
          color={color.light.white}
        />
        <TextInput
          style={{
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            color: color.light.black,
            width: '100%',
          }}
          placeholder={placeholder}
          placeholderTextColor={color.light.white}
          keyboardType={keyboard}
          secureTextEntry={is_password}
        />
      </View>
      <Text
        style={{
          borderBottomWidth: 1,
          borderBottomColor: color.light.white,
          width: '100%',
          position: 'absolute',
          top: 25,
        }}></Text>
    </View>
  );
};

export default Input;
