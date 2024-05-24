import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

interface ButtonProps {
  label: string;
  border?: boolean;
  actionFunction?: () => void;
}

const RoundedButton: React.FC<ButtonProps> = ({
  label,
  border = false,
  actionFunction = () => {
    console.log('hi');
  },
}) => {
  const [test, setTest] = useState('');

  return (
    <View
      style={{
        backgroundColor: border ? 'white' : 'red',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: border ? 2 : 2,
        borderColor: border ? 'red' : 'transparent',
      }}
      onTouchStart={actionFunction}>
      <Text style={[style.textStyle, {color: border ? 'red' : 'white'}]}>
        {label}
      </Text>
    </View>
  );
};

export default RoundedButton;

const style = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    color: 'white',
  },
  borderedText: {
    color: 'red',
  },
});
