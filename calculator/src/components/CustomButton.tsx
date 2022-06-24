import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface BtnProps {
  onPress: () => void;
  title: string;
  isGray?: boolean;
  isOrange?: boolean;
}

const CustomButton = (props: BtnProps) => {
  const {onPress, title, isGray, isOrange} = props;
  return (
    <TouchableOpacity
      style={
        isGray ? styles.btnGray : isOrange ? styles.btnOrange : styles.btnTheme
      }
      onPress={onPress}>
      <Text style={styles.titleTheme}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnTheme: {
    width: 72,
    height: 72,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    backgroundColor: '#313131',
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    backgroundColor: '#a0a0a0',
  },
  btnOrange: {
    width: 72,
    height: 72,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    backgroundColor: '#f69a06',
  },
  titleTheme: {
    fontSize: 32,
    color: '#fff',
  },
});

export default CustomButton;
