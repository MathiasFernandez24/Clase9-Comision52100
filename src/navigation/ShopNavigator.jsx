import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'

const ShopNavigator = () => {

    const Stack = createNativeStackNavigator()


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Bread' component={CategoryBreadScreen} />
                <Stack.Screen name='Home' component={CategoriesScreen} />
                <Stack.Screen name='Detail' component={BreadDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator

const styles = StyleSheet.create({})