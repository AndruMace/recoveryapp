import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen({ navigation }) {
    const [loaded] = useFonts({
      Dosis: require('../assets/fonts/Dosis/static/Dosis-ExtraBold.ttf'),
      DosisLight: require('../assets/fonts/Dosis/static/Dosis-Medium.ttf'),
    });

    if (!loaded) {
      return null;
    }

    return (
      <View style={styles.viewStyle}>
        <Pressable 
          style={[styles.buttonStyleOne, styles.buttonContainer]}
          onPress={() => navigation.navigate('SelfLove')}
        >
          <Text style={styles.buttonText}>I'm Worth It</Text>
        </Pressable>
        <Pressable 
          style={[styles.buttonStyleTwo, styles.buttonContainer]}
          onPress={() => navigation.navigate('Activities')}
        >
          <Text style={styles.buttonText}>Alternate Activities</Text>
        </Pressable>
        <Pressable 
          style={[styles.buttonStyleTwo, styles.buttonContainer]}
          onPress={() => navigation.navigate('Motivation')}
        >
          <Text style={styles.buttonText}>What Motivates Me...</Text>
        </Pressable>
        <Pressable 
          style={[styles.buttonStyleOne, styles.buttonContainer]}
          onPress={() => navigation.navigate('Gameplan')}
        >
          <Text style={styles.buttonText}>Get Back up Gameplan</Text>
        </Pressable>
        <Pressable 
          style={[styles.buttonStyleOne, styles.buttonContainer]}
          onPress={() => navigation.navigate('Learn')}
        >
          <Text style={styles.buttonText}>Learn About Addiction</Text>
        </Pressable>
        <Pressable 
          style={[styles.buttonStyleTwo, styles.buttonContainer]}
          onPress={() => navigation.navigate('Support')}
        >
          <Text style={styles.buttonText}>Support this App</Text>
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent:  'center',
    // alignItems: 'center',
    backgroundColor: '#2e282a'
  },
  buttonStyleOne: {
    backgroundColor: '#edb88b',
  },
  buttonStyleTwo: {
    backgroundColor: '#17bebb',
  },
  buttonContainer: {
    display: 'flex',
    padding: 20,
    width: '45%',
    height: '30%',
    margin: 7.5,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Dosis'
  }
})