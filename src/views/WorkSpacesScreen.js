import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../services/Global/GlobalContext'
import ListItem from '../components/ListItem/ListItem'
import { useNavigation } from '@react-navigation/core'
const WorkSpacesScreen = () => {
    const nav = useNavigation();
    const {State, StateDispatch} = useContext(GlobalContext)


    return (
        <View
        style={{
            padding:10,
            flex:1
        }}
        >
    { 
    [...State.user.created_workspaces , ...State.user.admitted_workspaces].map((d,i) =>{
        return <TouchableOpacity
        key={i}
            style={{
                padding:10,
               backgroundColor:'white',
                marginVertical:5,
               height:50,
               elevation:2,
               borderRadius:10
            }}
            onPress={() =>{nav.navigate('Channels', {wsId:d.workSpace._id})}}
        >
            <View
            style={{
                flexDirection:'row',
                paddingHorizontal:5,
                justifyContent:'space-between',
                alignItems:'center'
            }}
            >
            <View>
                <Text>{d.workSpace.name} </Text>
                </View> 
            <View>
                <Text> Peers : {d.workSpace && d.workSpace.users.length + 1}</Text>
                </View>                

            </View>
           <View>
            
           </View>
        </TouchableOpacity>
    })
    }         
        </View>
    )
}

export default WorkSpacesScreen

const styles = StyleSheet.create({})
