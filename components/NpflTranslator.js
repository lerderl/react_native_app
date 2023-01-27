import { useState } from 'react';
import {Text, TextInput, View} from 'react-native';

import Npfl from '../assets/npfl.png';

const NpflTranslator = () => {
  // Store text value
  const [text, setText] = useState('');

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        defaultValue={text}
        style={{height: 40}}
        placeholder="Enter club name!"
        onChangeText={newText => setText(newText)}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => (word && `${Npfl}`))
          .join(' ')}
      </Text>
    </View>
  );
};

export default NpflTranslator;
