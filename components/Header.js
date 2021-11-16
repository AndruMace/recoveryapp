import React, { useState, useContext} from "react"
import { Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DaysContext } from './Context';


export default function MyHeader({ navigation }) {

    const DayContext = useContext(DaysContext);
    return (
        <View style={styles.customHeader}>
            <Ionicons
                onPress={() => navigation.navigate('Help')}
                name={'help-circle-outline'} 
                size={30} color={'black'}
                style={styles.helpIcon}
            />
            <Text style={styles.headerText}>{`Days: ${DayContext.days}`}</Text>
            <Ionicons
            onPress={() => navigation.navigate('EditDays')}
            name={'pencil-outline'} 
            size={20} color={'black'}
            style={styles.editIcon}
            />
        </View>
    )
  }

const styles = StyleSheet.create({
    customHeader: {
    backgroundColor: '#ef3e36',
    display: 'flex',
    flexDirection: 'row',
    padding: '1.5%',
    paddingTop: '7.5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    },
    headerText: {
    fontSize: 20,
    // paddingRight: '2.5%',
    // paddingLeft: '2.5%'
    },
    editIcon: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: '1%'
    },
})
