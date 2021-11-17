import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function ContactScreen() {
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
            Contact Me!
            {'\n\n'}
        </Text>
        <Text style={styles.bodyText}>
            If you are running into technical issues, have suggestions, or just want to chat about technology and/or recovery,
            feel free to reach out to me. My email is amacedeveloper@gmail.com, and my phone number is +1 202-817-4826 
            (unfortuantely, I only speak English). I'd love to hear from someone that enjoys my app and could get more out of it,
            so please don't hesitate. I look forward to speaking with you :)
            {'\n\n'}
            This app is open-source so please feel free to open up an issue or contribute on Github:
            <Text style={styles.link}
                onPress={() => Linking.openURL('https://github.com/AndruMace/recoveryapp')}
                >
                {' '}https://github.com/AndruMace/recoveryapp
              </Text>
        </Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    color: '#1DA1F2'
  },
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
  }
})