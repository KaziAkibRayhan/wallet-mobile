import React from 'react';

import {
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import color from '../../styles/color';
import {styles} from '../../styles/styles';
import WalletButton from '../button/WalletButton';
import Input from '../input/Input';

const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={[color.light.green, color.light.lightGreen]}
        style={styles.container}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}>
        <Image source={require('../../assets/auth-images/auth1.png')} />

        <Input placeholder="Username" icon="user" keyboard="default" />

        <Input
          placeholder="Password"
          icon="lock"
          keyboard="default"
          is_password={true}
        />

        <Text
          style={{
            color: color.light.white,
            textAlign: 'right',
            width: '100%',
            marginEnd: 70,
          }}>
          Forgot Password?
        </Text>
        <WalletButton
          title="Log In"
          bg={color.light.buttonBG}
          color={color.light.white}
          radius={50}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <Text>Not set up yet?</Text>
            <Text>Sign Up</Text>
          </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default Login;
