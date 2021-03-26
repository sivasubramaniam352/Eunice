import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon  from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MIcons from 'react-native-vector-icons/MaterialIcons';
const Input = ({PH, error,password, changeFunc, dark}) => {
  return (
    <View style={styles.container}>
    <View style={dark?[styles.InputContainerDark, error && {borderBottomColor:'red'}]:[styles.InputContainer, error && {borderBottomColor:'red'}]}>
      <Icon name={PH === 'email/phone' ?'account':
       PH === 'password'? 'form-textbox-password':
       PH === 'email' ?'email':
       PH === 'phone' ?'phone':
       PH === 'search' ? 'magnify':
       'account'} color={dark ? 'white':'black'} style={{marginTop:8,}} size={20} />
      <TextInput
      style={{width:'80%',color:dark?'white':'black'}}
      placeholder={PH}
      keyboardType={'default'}
      secureTextEntry={password}
      onChangeText={(e) => changeFunc(e)}
      placeholderTextColor={'grey'}
      />
     {error ? <MIcons name={'error'} style={{marginTop:10,}} size={15}  color={'red'}/>: null}
    </View>
  <Text style={styles.errorTxt}>{error?error:' '}</Text>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  InputContainer:{
    width:'100%',
    height:40,
    flexDirection:'row',
    borderBottomWidth:0.5,

  },
   InputContainerDark:{
    width:'100%',
    height:40,
    flexDirection:'row',
    borderBottomWidth:0.5,
    borderBottomColor:'white',
  },
  container:{
    marginVertical:5,
  },
  errorTxt:{
    fontSize:10,
    color:'red',
  }
})
