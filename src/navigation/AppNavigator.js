import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialIcons} from '@expo/vector-icons';

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsListScreen';
import FavoritesScreen from '../screens/FavoriteScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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

function FavoritesNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Favorites' component={FavoritesScreen} />
        </Stack.Navigator>
    );
}

function TabsNavigator() {
    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: () => {
                    let iconName;
                    if (route.name=='Home') {
                        iconName='home'
                    } else if (route.name=='Favorites') {
                        iconName='favorite'
                    }
                    return <MaterialIcons name={iconName} size={24} />
                }
            })}
        >
            <Tabs.Screen name='Home' component={HomeNavigator} />
            <Tabs.Screen name='Favorites' component={FavoritesNavigator} />
        </Tabs.Navigator>
    );
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='News' component={TabsNavigator} />
                <Drawer.Screen name='About' component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;