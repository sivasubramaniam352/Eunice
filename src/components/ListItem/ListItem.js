import React, { useContext, useState } from 'react'
import { Dimensions, StyleSheet, Image, Text, View, Pressable } from 'react-native'
import ButtonComp from '../Button/ButtonComp';
import ENTIcons from 'react-native-vector-icons/dist/Entypo';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {GlobalContext} from '../../services/Global/GlobalContext'
import { TextInput } from 'react-native';
import { Button } from 'react-native';
const scrH = Dimensions.get('window').height;
const scrW = Dimensions.get('window').width;

const ListItem = ({upFoodQty, imageUri,qtyChangehandleFun,updateQtyFun ,id, data, quantity, name, 
    foodType, cuisine, cuisines,incDec,count, rating, price, type, pressOrd, pressItem }) => {
    // console.log(quantity, "NO");
    const{State} = useContext(GlobalContext);
    const{user} = State;
    const OrederFun = () => {
        
        let obj = data;
        obj.quantity = count;
         Alert.alert(
            "Confirm Cart",
            `confirm this ${name} to add in cart`,
            [
              {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
              },
              { text: "OK", onPress: () =>  pressOrd(obj) }
            ],
            { cancelable: true }
          );
       
    }
    return (

        <Pressable style={[styles.cont, type == 'food' ? { flexDirection: 'row-reverse', justifyContent: 'space-between' } : null]}
            onPress={() => {
                if (type ==='food' || type === 'cart') {
                    return 0;
                }
                return pressItem(id)
            }}
        >
            <Image source={{ uri: imageUri ? imageUri : 'https://picsum.photos/200/300' }}
                style={{ width: '30%', borderRadius: 10, height: '100%' }}
            />
            {type === 'food' && user.type ==='Consumer' && <ButtonComp
                title={'Add to cart'}
                style={{ position: 'absolute', bottom: 0, left: 12 }}
                pressFunc={() => pressOrd && OrederFun()}
            />}
            {type === 'food' && user.type ==='Restaurant' && 
            <View>
            <TextInput
            placeholder={'qty'}
            keyboardType={'number-pad'}
            value={upFoodQty}
            style={{width:50,height:20,padding:0 ,borderWidth:1,borderColor:'gray'}}
            onChangeText={(e)=> qtyChangehandleFun(e)}
            />
          {upFoodQty ?  <ButtonComp 
            title={'update qty'}
            pressFunc={() => updateQtyFun()}

            />:null}
            </View> }
            <View style={styles.textCont}>

                <Text style={styles.restName}>{name}</Text>
                <Text style={styles.cuisines}>{cuisine && cuisine}</Text>
                {type === 'food' && <Text style={styles.cuisines}>quantity: <Text style={{ color: foodType === 'Veg' ? 'green' : 'red' }}>{quantity}</Text></Text>}
                    {type === 'cart' && <View style={{flex:1, marginTop:15 ,flexDirection:'row'}}>
                        <View style={{flexDirection:'row', marginLeft:'15%'}}>
                        <TouchableOpacity
                        onPress={()=>{
                            console.log(data,"DFDF");
                            incDec('inc',data)
                        }}
                        >
                            <ENTIcons name='squared-plus' color={foodType === 'Veg' ? 'green' : 'red'} size={25}/>
                            
                        </TouchableOpacity>
                        <View>
                       <Text style={{}}> {quantity} </Text>
                       </View>
                        <TouchableOpacity
                        onPress={()=>incDec('dec',data)}
                        >
                            <ENTIcons name='squared-minus' color={foodType === 'Veg' ? 'green' : 'red'} size={25}/>
                            
                        </TouchableOpacity>
                        </View>
                        <View style={{marginLeft:'20%'}}>
            <Text  >{`₹ ${price*quantity}`}</Text>
            </View>

                    </View>}
                <Text style={styles.cuisines}>{cuisines && cuisines.map(d => (
                    `${d} `
                ))}</Text>
                <Text style={{  }} >{type === 'food' ? `₹ ${price}` : null}</Text>
                {type === 'food' && foodType ?
                    <View style={foodType === 'Veg' ? styles.veg : styles.nonVeg} ></View>
                    : null}
            </View>
        </Pressable>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    cont: {
        width: '100%',
        height: scrH / 6,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10,

    },
    textCont: {
        paddingHorizontal: 10,

    },
    restName: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    cuisines: {
        fontSize: 10,
        color: 'grey'
    },
    veg: {
        width: 10,
        height: 10,
        borderWidth: 0.5,
        borderRadius: 20,
        backgroundColor: 'green',
        marginTop: 20

    },
    nonVeg: {
        width: 10,
        height: 10,
        borderWidth: 0.5,
        borderColor: 'red',
        borderRadius: 20,
        backgroundColor: 'red',
        marginTop: 20
    }

})
