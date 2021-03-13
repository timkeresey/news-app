import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const Card = (props) => {

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails')}>
            <View style={styles.card}>
                <View style={styles.imageWrapper}>
                    <Image 
                        source={{uri: props.image}} 
                        style={styles.image}
                    />
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>
                        {props.title.length > 25 ? props.title.slice(0, 25) + '...' : props.title}
                    </Text>
                    <MaterialIcons name='favorite-border' color='#72bcd4' size={24} />
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>
                        {props.description.length > 100 ? props.description.slice(0, 100) + '...' : props.description}
                    </Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
   },

   descriptionWrapper: {
        paddingHorizontal: 15,
   },

   image: {
       height: '110%',
       width: '100%',
   },

   title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
   },

   description: {
       fontFamily: 'Ubuntu',
       fontSize: 15, 
       marginTop: 10,
   }
})

export default Card;