import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from './src/components/CustomButton';
import {myColors} from './src/util/Colors';

const App = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber] = useState('');
  const [operation] = useState('');
  // const [result, setResult] = React.useState<Number | null>(null);

  const firstNumberDisplay = () => {};

  const handleNumberPress = (numberValue: string) => {
    console.log(numberValue);
  };

  const handleOperationPress = (operationValue: string) => {
    console.log(operationValue);
  };

  const getResult = () => {};

  return (
    <SafeAreaView style={styles.viewBottom}>
      <View style={styles.viewDisplay}>
        <Text style={styles.screenSecondNumber}>
          {secondNumber}
          <Text style={styles.operation}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={styles.containerKeyboard}>
        <View style={styles.row}>
          <CustomButton isGray title="C" onPress={() => null} />
          <CustomButton
            title="+/-"
            isGray
            onPress={() => handleOperationPress('+/-')}
          />
          <CustomButton
            title="％"
            isGray
            onPress={() => handleOperationPress('％')}
          />
          <CustomButton
            title="÷"
            isOrange
            onPress={() => handleOperationPress('/')}
          />
        </View>
        <View style={styles.row}>
          <CustomButton title="7" onPress={() => handleNumberPress('7')} />
          <CustomButton title="8" onPress={() => handleNumberPress('8')} />
          <CustomButton title="9" onPress={() => handleNumberPress('9')} />
          <CustomButton
            title="×"
            isOrange
            onPress={() => handleOperationPress('*')}
          />
        </View>
        <View style={styles.row}>
          <CustomButton title="4" onPress={() => handleNumberPress('4')} />
          <CustomButton title="5" onPress={() => handleNumberPress('5')} />
          <CustomButton title="6" onPress={() => handleNumberPress('6')} />
          <CustomButton
            title="-"
            isOrange
            onPress={() => handleOperationPress('-')}
          />
        </View>
        <View style={styles.row}>
          <CustomButton title="1" onPress={() => handleNumberPress('1')} />
          <CustomButton title="2" onPress={() => handleNumberPress('2')} />
          <CustomButton title="3" onPress={() => handleNumberPress('3')} />
          <CustomButton
            title="+"
            isOrange
            onPress={() => handleOperationPress('+')}
          />
        </View>
        <View style={styles.row}>
          <CustomButton title="." onPress={() => handleNumberPress('.')} />
          <CustomButton title="0" onPress={() => handleNumberPress('0')} />
          <CustomButton
            title="⌫"
            onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
          />
          <CustomButton title="=" isOrange onPress={() => getResult()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  viewBottom: {
    flex: 1,
    backgroundColor: '#000000',
  },
  containerKeyboard: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  viewDisplay: {
    flex: 1,
    width: '90%',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginBottom: 15,
  },
  screenSecondNumber: {
    fontSize: 40,
    color: 'gray',
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  operation: {
    color: myColors.orange,
    fontSize: 50,
    fontWeight: '500',
  },
  // screenSecondNumber: {
  //   fontSize: 40,
  //   color: 'gray',
  //   fontWeight: '200',
  //   alignSelf: 'flex-end',
  // },
});
