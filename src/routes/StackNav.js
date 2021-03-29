import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Channels from '../views/Channels';
import Chats from '../views/Chats';
import WorkSpacesScreen from '../views/WorkSpacesScreen';

const StackNav = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
         <Stack.Screen name={'workSpaces'} component={WorkSpacesScreen} />
         <Stack.Screen name={'Channels'} component={Channels} />
        <Stack.Screen name={'Chats'} component={Chats} />
         </Stack.Navigator>
    )
}

export default StackNav

const styles = StyleSheet.create({})
