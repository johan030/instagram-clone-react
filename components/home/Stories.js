import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'
import { ScrollView } from 'react-native-web'



const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showHorizontalScroolIndicator={false}>

                {USERS.map((story, index) => (
                    <View key = {index} style={{ alignItems: 'center'}}>
                        <Image source={{ uri: story.image }} style={styles.story} />
                        <Text style= {{color: 'white',  marginTop: 10 }}>
                            {story.user.length > 6 ? story.user.slice(0, 6).toLowerCase() + '...' 
                        :story.user.toLowerCase()}
                        </Text>
                    </View>

                ))}

            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginLeft:  6,
        borderWidth: 3,
        borderColor: '#ff8501',
    }
})
export default Stories