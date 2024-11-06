import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const ProductView = (props:any) => {
    const [like, setLike] = useState(false)
  return (
    <TouchableOpacity 
    onPress={props.handlePress}
    style={styles.container}>
        <TouchableOpacity 
        onPress={()=>setLike(!like)}
        style={{
            padding: 5,
            backgroundColor: Colors.WHITE,
            borderRadius: 50,
            position: "relative",
            zIndex: 10,
            left: "37%",
            top: 44,
            shadowColor: Colors.DARK_GRAY,
            elevation: 8,
            shadowRadius: 10,
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 0.9,
        }}>

            <Ionicons name={!like&&"heart-outline"||"heart-sharp"} size={20} color={!like&&Colors.BLACK||Colors.PRIMARY} />
        </TouchableOpacity>
      <Image 
        source={props.image} 
        alt='product'
        style={{
            objectFit:"cover",
            width: "100%",
            height: "70%",
            borderRadius: 20,
        }}
        />
        <View style={styles.textTitle}>
            <Text style={{
                color: Colors.DARK_GRAY,
                fontFamily: "outfit",
                fontSize: 18,
                textAlign: "center"
            }}>
                {props.title}
            </Text>
            <Text style={{
                color: Colors.BLACK,
                fontFamily: "outfit-medium",
                fontSize: 18,
                textAlign: "center"
            }}>
                $ {props.price}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default ProductView

const styles = StyleSheet.create({
    container:{
        width: "48%",
        height: 320,
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        justifyContent: "space-between",
    },
    textTitle:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3
    }
})