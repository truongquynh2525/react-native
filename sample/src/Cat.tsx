import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>I'm {props.name}</Text>
      <Text>{isHungry ? 'I am hungry' : 'I am full'}</Text>
      <Button title="Feed" onPress={() => setIsHungry(!isHungry)} />
    </View>
  );
};

export default Cat;
