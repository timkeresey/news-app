import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsListScreen';
import FavoritesScreen from '../screens/FavoriteScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='NewsList' 
                component={NewsListScreen} 
                options={{title: 'All News'}}
            />
            <Stack.Screen 
                name='NewsDetails' 
                component={NewsDetailsScreen} 
                options={{title: 'News Details'}}
            />
        </Stack.Navigator>
    );
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name='Home' component={HomeNavigator} />
                <Tabs.Screen name='Favorites' component={FavoritesScreen} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;