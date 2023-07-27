import React from 'react';

import {
  Text,
  TouchableOpacity,
} from 'react-native';

const WalletButton = ({title, bg, color, radius}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bg,
        borderRadius: radius,
        paddingVertical: 12,
        paddingHorizontal: 35,
      }}>
      <Text style={{color: color, fontSize: 17, textAlign: 'center'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default WalletButton;
