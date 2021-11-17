import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function HelpScreen({ navigation }) {
    const [loaded] = useFonts({
      Dosis: require('../assets/fonts/Dosis/static/Dosis-ExtraBold.ttf'),
      DosisLight: require('../assets/fonts/Dosis/static/Dosis-Medium.ttf'),
    });

    if (!loaded) {
      return null;
    }

    return (
      <View style={styles.viewStyle}>
        <Text style={styles.leadText}>
            How to Effectively Use This App:
        </Text>
        <Text style={styles.bodyText}>
            This app is not meant to be an all inclusive tool for recovery, but rather to provide aid when you may need it most.
            Fill out each section, revisit it daily to update your day count and to add anything new you can think ofto any of the list.
            Even if you have nothing new to add for the day, just take some time to reflect on what you've already added.
            If you feel yourself nearing relapse, pull this app out and review your motivations, remind yourself of your self-worth,
            find something to distract you.
            {'\n\n'}
            If that fails, then be sure you have a plan in place to get back on the path to recovery. Relapses happen,
            but that doesn't mean you should stop trying.
            {'\n\n'}
            Good luck. You've got this.
        </Text>
        <View style={styles.ppcm}>
          <Text onPress={() => navigation.navigate('Privacy')} style={styles.endtext}>Privacy Policy</Text>
          <Text onPress={() => navigation.navigate('Contact')} style={styles.endtext}>Contact Me</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent:  'center',
    alignItems: 'center',
    backgroundColor: '#2e282a'
  },
  leadText: {
    color: 'white',
    width: '90%',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Dosis'
  },
  bodyText: {
      fontSize: 19,
      fontFamily: 'DosisLight',
      color: 'white',
      width: '85%',
  },
  ppcm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    width: '100%'
  },
  endtext: {
    color: 'white',
    padding: '5%',
    textDecorationColor: 'white',
    textDecorationLine: 'underline'
  }
})