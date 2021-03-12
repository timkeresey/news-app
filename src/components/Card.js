import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = () => {

    return (
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image 
                    source={require('../../assets/news.jpeg')} 
                    style={styles.image}
                />
            </View>
            <View style={styles.titleWrapper}>
                <Text>Dummy Title</Text>
            </View>
            <View style={styles.descriptionWrapper}>
            <Text>Dummy Description</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
    },

    imageWrapper: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden', 
   },

   titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,

   },

   descriptionWrapper: {
        paddingHorizontal: 15,
   },

   image: {
       height: '110%',
       width: '100%',
   }
})

export default Card;