import React from 'react'
import { StyleSheet, Text, ScrollView, View, Linking } from 'react-native';
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
            Resources to help you understand your addiction, 
            and get on the path to recovery:
        </Text>

        <ScrollView style={styles.linkList}>
            
            <Text style={styles.link}
                onPress={() => Linking.openURL('https://drugfree.org/article/is-addiction-a-disease/')}
            >
                Is Addiction a Disease?
            </Text>
            <Text style={styles.link}
                onPress={() => Linking.openURL('https://www.drugabuse.gov/publications/media-guide/science-drug-use-addiction-basics')}
            >
                The Basics of Addiction
            </Text>
            <Text style={styles.link}
                onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Dialectical_behavior_therapy#Overview')}
            >
                Dialectical Behaviour Therapy
            </Text>
            <Text style={styles.link}
                onPress={() => Linking.openURL('https://ascpjournal.biomedcentral.com/articles/10.1186/s13722-018-0115-3')}
            >
                Mindfulness and Addiction
            </Text>
            <Text style={styles.link}
                onPress={() => Linking.openURL('https://www.addictioncenter.com/treatment/holistic-therapy/')}
            >
                Holistic Therapies
            </Text>
            <Text style={styles.link}
                onPress={() => Linking.openURL('https://www.drugabuse.gov/publications/principles-drug-addiction-treatment-research-based-guide-third-edition/resources')}
            >
                Much More
            </Text>
        </ScrollView>
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
  linkList: {
    display: 'flex',
    width: '97.5%',
    backgroundColor: 'rgba(237, 237, 237, .43)',
    alignSelf: 'center',
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 10,
    paddingBottom: 60,
    height: '60%',
    // marginTop: '15%',
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
      borderWidth: 1,
      borderColor: '#2e282a',
      color: '#2e282a',
      fontSize: 22,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      overflow: 'hidden',
      textAlign: 'center',
      margin: 7.5
  }
})