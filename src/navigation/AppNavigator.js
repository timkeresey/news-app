import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsListScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='NewsList' component={NewsListScreen} />
                <Stack.Screen name='NewsDetails' component={NewsDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;