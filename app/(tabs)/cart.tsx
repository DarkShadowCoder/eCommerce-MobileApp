import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import CartView from '@/components/CartView'
import { useNavigation } from 'expo-router'

const CartScreen = () => {
  const navigator = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name='arrow-back' size={25} color={Colors.BLACK} onPress={()=>navigator.goBack()}/>
        <Text style={{
          color:Colors.BLACK,
          fontFamily: "outfit-medium",
          width: "100%",
          fontSize: 25,
          textAlign: 'center',
        }}> My Card</Text>
      </View>
      <View style={styles.mainContainer}>
        <CartView 
        image={require('@/assets/images/fashion1.jpg')} 
        title= "Beautiful Woman Clothes" 
        size="XL"
        price= {250}
        />

        <CartView 
        image={require('@/assets/images/fashion2.jpg')} 
        title= "Red Woman dress" 
        size="M"
        price= {450}
        />
      </View>

      <TouchableOpacity
        onPress={()=>console.log('Proceed Checkout')}
        style={styles.cartButton}
        >
            <Text style={{
                color:Colors.BLACK,
                fontFamily: "outfit-medium",
                fontSize: 20,
                textAlign: 'left',
            }}> Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.BACKGROUND,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "100%",
    height: "100%",
    padding: 15
  },
  header:{
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingVertical: 25
  },
  mainContainer:{
    width: "100%",
    height: "70%",
    flexDirection: 'column',
    gap: 15,
    alignItems: 'center',
  },
  cartButton:{
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 20,
    marginHorizontal: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 20
},

})