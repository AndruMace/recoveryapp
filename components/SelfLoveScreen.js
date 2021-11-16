import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, TextInput, Pressable, ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

async function storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, value)
    console.log(`Stored ::: ${value} with KEY ${key}`)
  } catch(e) {
    console.log(`ASYNC STORAGE setItem ERROR ::: ${e}`)
  }
}

async function getLoveKeys() {
  let loveKeys = []
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
  } catch(e) {
    console.log(`ASYNC STORAGE getAllKeys ERROR ::: ${e}`)
  }

  keys.forEach((key) => {
    if (key.substring(0, 4) === 'love') {
      loveKeys.push(key)
    }

    return;
  })

  console.log(loveKeys.length)
  return loveKeys
}

async function generateKey() {
  let ran = Math.floor(Math.random() * 9999)
  let ranFormatted = ran.toLocaleString(undefined, {minimumIntegerDigits: 4, useGrouping: false})
  let loveKeys = await getLoveKeys()
  return `love_${ranFormatted}_${loveKeys.length}`
}

async function getUserKeyPostPairs(keys) {
  let keyPostPairs = []
  try {
    keyPostPairs = await AsyncStorage.multiGet(keys)
  } catch(e) {
    console.log(`ASYNC STORAGE multiGet ERROR ::: ${e}`)
  }

  return keyPostPairs;
}

async function fetchPosts() {
  let keys = await getLoveKeys()
  let userPosts = await getUserKeyPostPairs(keys)
  let postObjs = []
  userPosts.forEach((post) => {
    postObjs.push({
      key: post[0], 
      data: post[1]
    })
  })
  return postObjs
}

export default function SelfLoveScreen() {
  const [text, setText] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getData() {
      let userPosts = await fetchPosts()
      setPosts(userPosts)
    }

    getData()
  }, [])

  async function onUserSubmit() {
    try {
      let key = await generateKey()
      await storeData(key, text)
      setPosts([{key: key, data: text}, ...posts])
      setText('')
    } catch(e) {
      console.log(`User submission ERROR ::: ${e}`)
    }
  }

  async function removePost(post) {
    try {
      await AsyncStorage.removeItem(post)
      let updatedPosts = await fetchPosts()
      setPosts(updatedPosts)
    } catch(e) {
      console.log(`Error removing post ::: ${e}`)
    }
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Why Am I Worth It?</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={setText} 
        value={text}
        placeholder='E.g. "I am worth recovery because I..."'
        multiline={true}
      />
      <Pressable 
        style={[styles.button]}
        onPress={onUserSubmit}
      >
        <Text style={styles.buttonText}>Add To List</Text>
      </Pressable>
      <ScrollView style={styles.listContainer}>
        {[...posts].sort((prev, next) => next.key.substring(10,11) - prev.key.substring(10,11)).map((post, i) => {
          return (
            <View style={styles.listItem} key={i}>
              <Text style={styles.listText}>
                {post.data}
              </Text>
              <Pressable 
                onPress={() => removePost(post.key)}
              >
                <Ionicons name={'trash-outline'} size={20} color={'black'} />
              </Pressable>
           </View>
          )
        })}
      </ScrollView>
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
    height: '20%',
    width: '95%',
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
  smallButton: {
    width: '10%',
    borderRadius: 100,
    backgroundColor: 'red',
    borderWidth: 5,
    borderColor: 'black',
    alignSelf: 'center'
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'DosisLight',
    fontSize: 24,
  },
  listContainer: {
    display: 'flex',
    width: '97.5%',
    backgroundColor: 'rgba(237, 237, 237, .43)',
    alignSelf: 'center',
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 10,
    paddingBottom: 60,
    height: '40%',
    marginTop: '15%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ededed',
    borderRadius: 7.5,
    padding: 11.5,
    margin: 2,
    marginBottom: 6
  },
  listText: {
    width: '90%'
  }
})
