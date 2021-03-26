import React, { useState } from 'react'
import { StyleSheet,Modal, Text, View,TouchableHighlight, Dimensions, Pressable } from 'react-native'
import McIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ButtonComp from '../Button/ButtonComp';
import ListItem from '../ListItem/ListItem';
const scrW = Dimensions.get("window").width;
const scrH = Dimensions.get("window").height; 
const AddCartModal = ({name, imageUrl,visibility,price ,quantity,id, foodType,ModalExitFun,onpressButton}) => {
    // console.log("quantity",quantity);
    const [count, setcount] = useState(1)
    const incrementDecrement =(type) =>{
        if (type === 'inc') {
            if (count >= quantity) {
                return
            }
           return setcount(count + 1)
        }
        if (type === 'dec'){
            if (count <=1) {
                return
            }
         return setcount(count -1)
        }
    }
    return (
        <Modal
        animationType="slide"
        transparent={true}
        
        visible={visibility}
        onRequestClose={() => ModalExitFun(
            {quantity:count,
            price:price*count,
            id,
            }
        )}

      >
        
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ListItem 
            name={name || 'food1'}
            imageUri={imageUrl}
            type={'food'}
            price={price * count || 10 *count}
            foodType={foodType || 'NonVeg'}
            />
          
            <View 
            style={{flex:1,
    
                width:'100%',
                paddingHorizontal:10,
                   flexDirection:'row',
                justifyContent:'space-between' }}
            >
            <View style={{flexDirection:'row'}} > 
                <Pressable
                onPress={()=>incrementDecrement('inc')}
                ><McIcons name={'plus-box'} color={foodType === 'Veg'?'green':'red'} size={20} />
                </Pressable>
                <Text>{count}</Text>
                <Pressable
                 onPress={()=>incrementDecrement('dec')}
                >
                
                <McIcons name={'minus-box'} color={foodType === 'Veg'?'green':'red'} size={20} />
                </Pressable>
            </View>

            <ButtonComp 
            pressFunc={()=>onpressButton()}
            title={'Add To Cart'}
            type = {foodType || 'NonVeg'}
            
            />
            </View>
          </View>
        </View>
      </Modal>
    )
}

export default AddCartModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
        
        
      },
      modalView: {

          width:scrW,
          height:scrH/3,
       
        backgroundColor: "white",
        borderTopStartRadius: 20,
        borderTopEndRadius:20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
