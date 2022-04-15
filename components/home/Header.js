import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'


const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
        </TouchableOpacity>
        
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
          <Image source = {{ uri: 'https://img.icons8.com/ios-glyphs/30/ffffff/macos-maximize.png'}}
          style = {styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image source = {{ uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/hearts.png'}}
          style = {styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>11</Text>
            </View>
          <Image source = {{ uri: 'https://img.icons8.com/material-outlined/24/ffffff/facebook-messenger--v1.png'}}
          style = {styles.icon}/>
          </TouchableOpacity>
          
          
          

        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
},

  logo: {
  width: 100,
  height: 50,
  resizeMode: 'contain',

},

iconsContainer: {
  flexDirection: 'row',
},

icon: {
  width: 30,
  height: 30,
  marginLeft: 10,
  resizeMode: 'contain'
},

unreadBadge : {
  backgroundColor: '#FF3250',
  position: 'absolute',
  left: 20,
  bottom: 18,
  width: 25,
  height: 18,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,
},

unreadBadgeText: {
  color: 'white',
  fontWeight: '600'
}
  
})
export default Header