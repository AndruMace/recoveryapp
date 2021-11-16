import React, { useState, useContext } from 'react'
import { Text, StyleSheet, TextInput, Pressable, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DaysContext } from './Context';


async function storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, value)
    console.log(`Stored ::: ${value} with KEY ${key}`)
  } catch(e) {
    console.log(`ASYNC STORAGE setItem ERROR ::: ${e}`)
  }
}

export default function EditDaysScreen({ navigation }) {
  let DayContext = useContext(DaysContext)
  // console.log(`LOG 1: ${}`)
  console.log(DaysContext._currentValue)
  
  const [days, setDays] = useState('')

  async function onUserSubmit() {
    try {
      await storeData('daysClean', days)
      DayContext.updateDays(days)
    } catch(e) {
      console.log(`User submission ERROR ::: ${e}`)
    }

    navigation.navigate('Home')
  }

  return (
      <View style={styles.viewStyle}>
        <Text style={styles.text}>How many days clean?</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={setDays} 
          value={days}
          placeholder='You can do it.'
          />
        <Pressable 
          style={[styles.button]}
          onPress={onUserSubmit}
        >
          <Text style={styles.buttonText}>Update Days</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent:  'center',
    backgroundColor: '#2e282a',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Dosis',
    color: 'white',
    margin: 20
  },
  input: {
    height: '10%',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    color: 'black',
  },
  button: {
    width: '60%',
    padding: '3%',
    backgroundColor: '#ef3e36',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000000',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 100,
    alignSelf: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'DosisLight',
    fontSize: 24,
  }
})
