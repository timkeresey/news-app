import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Card = (props) => {

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails')}>
            <View style={styles.card}>
                <View style={styles.imageWrapper}>
                    <Image 
                        source={require('../../assets/news.jpeg')} 
                        style={styles.image}
                    />
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Dummy Title</Text>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Dummy Description</Text>
                </View>
            </View>
        </TouchableOpacity>
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
   },

   title: {
        fontSize: 20,
        marginTop: 10,
   },

   description: {
       fontSize: 15, 
       marginTop: 10,
   }
})

export default Card;