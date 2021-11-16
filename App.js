import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SelfLoveScreen from './components/SelfLoveScreen';
import HomeStackScreen from './components/HomeStack';
import ActivitiesScreen from './components/ActivitiesScreen';
import MotivationsScreen from './components/MotivationsScreen';
import GameplanScreen from './components/GameplanScreen';
import MyHeader from './components/Header';
import { DaysContext } from './components/Context';

const Tab = createBottomTabNavigator();

// TODO: Finish custom header and add context for days

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = 'home'
          } else if (route.name === 'SelfLove') {
            iconName = 'heart'
          } else if (route.name === 'Activities') {
            iconName = 'bicycle'
          } else if (route.name === 'Motivation') {
            iconName = 'trophy'
          } else if (route.name === 'Gameplan') {
            iconName = 'list'
          }
                  
          return (
            <View style={styles.iconContainer}>
              <Ionicons iconStyle={{borderWidth:'1', borderRadius: 'size/2'}} 
                name={iconName} size={size} color={color} 
              />
            </View>
          )
        },
        header: ({ navigation }) => {
          title = 'Days: 0' 
          return <MyHeader title={title} navigation={navigation}/>
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#333333',
        tabBarStyle: {
          backgroundColor: '#ef3e36',
          height: '8%',
        }
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStackScreen}/>
      <Tab.Screen name="SelfLove" component={SelfLoveScreen} />
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
      <Tab.Screen name="Motivation" component={MotivationsScreen} />
      <Tab.Screen name="Gameplan" component={GameplanScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [daysState, setDaysState] = React.useState({days: '0', updateDays: updateDays})

  const updateDays = (days) => {
    setDaysState((prev) => [...prev, days])
  }
  
  return (
    <DaysContext.Provider value={daysState}>
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
    </DaysContext.Provider>
  );
}

const styles = StyleSheet.create({
 iconContainer: {
    backgroundColor: '#ef3e36',
    borderRadius: 100,
    elevation: 10,
    padding: '7.5%',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 100,
  }
})


