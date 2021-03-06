import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import SupportScreen from './SupportScreen';
import LearnScreen from './LearnScreen';
import EditDaysScreen from './EditDaysScreen';
import HelpScreen from './Help';
import ContactScreen from './Contact';
import PrivacyScreen from './Privacy';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
    return (
      <HomeStack.Navigator
        screenOptions={() => ({   
            headerShown: false,
        })}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Support" component={SupportScreen} />
        <HomeStack.Screen name="Learn" component={LearnScreen} />
        <HomeStack.Screen name="Help" component={HelpScreen} />
        <HomeStack.Screen name="EditDays" component={EditDaysScreen} />
        <HomeStack.Screen name="Contact" component={ContactScreen} />
        <HomeStack.Screen name="Privacy" component={PrivacyScreen} />
      </HomeStack.Navigator>
    );
  }
