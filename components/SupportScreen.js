import React from 'react'
import { StyleSheet, Text, ScrollView, View, Pressable, Linking } from 'react-native';
import { useFonts } from 'expo-font';

export default function LearnScreen() {
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
            If this app has helped you in any way please consider supporting
            it's development. I will do my best regardless but the more time I
            can afford to spend updating and improving this app the better it 
            will become. Thank you :)
        </Text>
        
        <Pressable onPress={() => Linking.openURL('https://buy.stripe.com/4gwdR05l03Xj4msbII')}>
            <Text style={styles.link}>
                    $5
            </Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://buy.stripe.com/6oEeV4fZE9hDbOUeUV')}>
            <Text style={styles.link}>
                    $10
            </Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://buy.stripe.com/aEUfZ8dRweBX06cbIK')}>
            <Text style={styles.link}>
                    $20
            </Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://buy.stripe.com/fZefZ8cNs9hDf16bIL')}>
            <Text style={styles.link}>
                    $50
            </Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://buy.stripe.com/00g00a9BgctPbOU3cg')}>
            <Text style={styles.link}>
                    $100
            </Text>
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1, 
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent:  'center',
    // alignItems: 'center',
    backgroundColor: '#2e282a'
  },
  leadText: {
    color: 'white',
    width: '90%',
    margin: 20,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Dosis'
  },
  link: {
      borderWidth: 3,
      fontFamily: 'Dosis',
      borderColor: '#2e282a',
      color: '#2e282a',
      fontSize: 22,
      backgroundColor: '#EFEFEF',
      padding: 7.5,
      borderRadius: 5,
      overflow: 'hidden',
      textAlign: 'center',
      width: '70%',
      alignSelf: 'center'
  }
})