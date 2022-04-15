import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native-web'
import  Header  from '../components/home/Header'
import Stories from '../components/home/Stories'
import {POSTS} from '../data/posts'



const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header /> 
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <post post={post} key={index}/>
        ))}
        
      </ScrollView>
      
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default HomeScreen