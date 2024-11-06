import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const CartView = (props:any) => {
    const [counter, setCounter] = useState(1)
  return (
    <View style={styles.container}>
        <Image 
        source={props.image}
        alt='cart'
        style={{
            objectFit: 'fill',
            width: "38%",
            height: "100%",
            borderRadius: 20
        }}
        />
        <View style={styles.cartLeft}>
            <View style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
                width: "80%"
            }}>
                <View style={{
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 5,
                    width: '90%',
                }}>
                    <Text style={{
                        color:Colors.BLACK,
                        fontFamily: "outfit-medium",
                        fontSize: 23,
                        textAlign: 'center',
                        lineHeight: 27
                        }}> 
                            {props.title} 
                    </Text>

                    <Text style={{
                        color:Colors.GRAY,
                        fontFamily: "outfit",
                        fontSize: 20,
                        textAlign: 'left',
                        }}> 
                           Size: {props.size} 
                    </Text>

                    <Text style={{
                        color:Colors.PRIMARY,
                        fontFamily: "outfit",
                        fontSize: 20,
                        textAlign: 'left',
                        }}> 
                            $ {props.price} 
                    </Text>
                </View>

                <View style={styles.counterContainer}>
                    <TouchableOpacity
                    onPress={()=>setCounter(counter-1)} 
                    style={{
                        paddingHorizontal: 10,
                    }}
                    >
                        <Ionicons name="remove" size={15} />
                    </TouchableOpacity>
                    <Text style={{
                        color:Colors.PRIMARY,
                        fontFamily: "outfit",
                        fontSize: 20,
                        textAlign: 'center',
                    }}> {counter} </Text>

                    <TouchableOpacity
                    onPress={()=>setCounter(counter+1)} 
                    style={{
                        paddingHorizontal:10
                    }}
                    >
                        <Ionicons name="add" size={15} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: 50,
                height: "100%",
                padding: 5,
            }}>
                <Ionicons name="crop-sharp" size={25} />
            </View>
            
        </View>

    </View>
  )
}

export default CartView

const styles = StyleSheet.create({
    container:{
    width: '100%',
    height: 170,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    },
    cartLeft:{
        flexDirection: "row",
        gap:5,
        alignItems: "center",
        justifyContent: "space-between",
        width: "60%",
        height: "100%"
    },
    counterContainer:{
        width: "auto",
        height: 40,
        flexDirection: "row",
        gap: 2,
        borderRadius: 4,
        borderWidth: 1.2,
        borderColor: Colors.PRIMARY,
        alignItems: "center",

    }
})