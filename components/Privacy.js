import React from 'react'
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';
import { useFonts } from 'expo-font';

export default function PrivacyScreen() {
    return (
      <View style={styles.viewStyle}>
        <ScrollView style={styles.scrollViewStyle}>
            <Text style={styles.leadText}>
                Privacy Policy
                {'\n\n'}
            </Text>
            <Text style={styles.bodyText}>
                Privacy Policy for EzPz Recovery App:
                {'\n\n'}
                We collect no more data than what the app store from which you are downloading this provides us.
                We will save this information in aggragate purely to sweep broad generalizations about app poplarity and usage,
                nothing will be targetted at any individual nor will any individuals data be something we use outside of the
                aformentioned statistical reasoning. 
                {'\n\n'}
                You may, at any time, request any and all of your stored information from us and we will provide it as quickly
                as we are able, at no charge.
                {'\n\n'}
                This app does access phone storage in order to save your inputted information. This information is not shared
                or saved with us in any capacity. The apps interactions with phone storage extend only as far as are absolutely required for the
                app to read and write the data entered by you. If you delete this applications, please note that all related data
                will likely be deleted as well, so be sure to save anything you entered to another source if you wish to keep it.
                {'\n\n'}
                This app is open-source so please feel free to open up an issue or contribute on Github:
                <Text style={styles.link}
                onPress={() => Linking.openURL('https://github.com/AndruMace/recoveryapp')}
                >
                {' '}https://github.com/AndruMace/recoveryapp
              </Text>
                
            </Text>
       </ScrollView>
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
    backgroundColor: '#2e282a',
  },
  scrollViewStyle: {
    width: '97.5%',
    padding: '5%'
  },
  leadText: {
    color: 'white',
    width: '90%',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 24,
  },
  bodyText: {
      fontSize: 19,
      fontFamily: 'DosisLight',
      color: 'white',
      width: '85%',
  }
})