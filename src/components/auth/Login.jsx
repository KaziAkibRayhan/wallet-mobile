import React from 'react';

import {
  Image,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import color from '../../styles/color';
import {styles} from '../../styles/styles';

const Login = () => {
  return (
    <LinearGradient
      colors={[color.light.green, color.light.lightGreen]}
      style={styles.container}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}>
      <Image source={require('../../assets/auth-images/auth1.png')} />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'red',
          paddingBottom:0
        }}>
        <AntDesign style={{padding: 10}} name="user" size={20} color="#000" />
        <TextInput
          style={{
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            color: '#424242',
          }}
          placeholder="User Nickname"
        />
      </View>
    </LinearGradient>
  );
};

export default Login;
