import React from 'react';
import {Image, Text, View} from 'react-native';
import Cat from './src/Cat';

const App = () => {
  return (
    <View>
      <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}} />
      <Text>Hello world, this is my sample app</Text>
      <Cat name="Cat1" />
      <Cat name="Cat2" />
    </View>
  );
};

export default App;
