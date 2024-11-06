import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { DataContext } from '@/context/context'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { useNavigation } from 'expo-router'

const ProductScreen = () => {
    const [lenght, setLenght] = useState("M")
    const [like, setLike] = useState(false)
    const {donnees, setDonnees} = useContext(DataContext)
    const [color, setColor] = useState('Red')
    const navigator = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity 
            onPress={()=>navigator.goBack()}
            style={styles.backArray}>
                <Ionicons name="arrow-back" size={22} color={Colors.BLACK} />
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                width: 100,
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <TouchableOpacity 
            onPress={()=>setLike(!like)}
            style={styles.backArray}>
                <Ionicons name={!like&&"heart-outline"||"heart-sharp"} size={22} color={!like&&Colors.BLACK||Colors.PRIMARY} />
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>console.log('share')}
            style={styles.backArray}>
                <Ionicons name="share-outline" size={22} color={Colors.BLACK} />
            </TouchableOpacity>
            </View>
        </View>
      <Image 
      source={donnees.data.image} 
      alt='product'
      style={{
        width: '100%',
        height: '50%',
        objectFit: 'fill',
      }}/>
    <ScrollView 
    contentContainerStyle={styles.contentContainer}
    style={styles.subContainer}
    showsVerticalScrollIndicator={false}
    >

      <Text style={{
        color:Colors.BLACK,
        fontFamily: "outfit-medium",
        fontSize: 30,
        textAlign: 'left',
        marginVertical: 20
      }}> {donnees.data.name} </Text>
      <View style={{
        flexDirection: 'row',
        gap: 80,
        width: '100%',
        height: 'auto',
        alignItems: 'center'
      }}>
        <Text style={{
            color:Colors.DARK_GRAY,
            fontFamily: "outfit",
            fontSize: 20,
            textAlign: 'left'
        }}>$ {donnees.data.price} </Text>
        <View style={{
            flexDirection: 'row',
            gap: 3,
            alignItems: 'center',
        }}>
            <Ionicons name='star' size={20} color={Colors.SECONDARY} />
            <Text style={{
                color:Colors.DARK_GRAY,
                fontFamily: "outfit",
                fontSize: 20,
            }}> {donnees.data.rating} </Text>
        </View>
      </View>
      <Text style={{
        color:Colors.DARK_GRAY,
        fontFamily: "outfit",
        fontSize: 20,
        textAlign: 'left'
      }}> Size :   {lenght} </Text>
      <View style={styles.wrapper}>
        <TouchableOpacity 
        onPress={()=> setLenght("S")}
        style={!(lenght==="S")&&{
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: 'auto',
            borderColor: Colors.GRAY,
            borderRadius: 5 ,
            borderWidth: 1.1,
            shadowColor: Colors.BLACK,
            shadowOpacity: 0.9,
            shadowRadius: 2,
            shadowOffset:{width: 4, height:-5},
        }
        ||
        {
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: 'auto',
            borderColor: Colors.BLACK,
            backgroundColor: Colors.BLACK,
            borderRadius: 5 ,
            borderWidth: 1.1,
            shadowColor: Colors.BLACK,
            shadowOpacity: 0.9,
            shadowRadius: 2,
            shadowOffset:{width: 4, height:-5},            
        }}>
            <Text style={!(lenght==='S')&&{
                color:Colors.DARK_GRAY,
                fontFamily: "outfit",
                fontSize: 20,
                textAlign: 'center'
            }||
            {
                color:Colors.WHITE,
                fontFamily: "outfit",
                fontSize: 20,
                textAlign: 'center'
            }}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> setLenght("M")}
        style={!(lenght==="M")&&{
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: 'auto',
            borderColor: Colors.GRAY,
            borderRadius: 5 ,
            borderWidth: 1.1,
            shadowColor: Colors.BLACK,
            shadowOpacity: 0.9,
            shadowRadius: 2,
            shadowOffset:{width: 4, height:-5},
        }
        ||
        {
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: 'auto',
            borderColor: Colors.BLACK,
            backgroundColor: Colors.BLACK,
            borderRadius: 5 ,
            borderWidth: 1.1,
            shadowColor: Colors.BLACK,
            shadowOpacity: 0.9,
            shadowRadius: 2,
            shadowOffset:{width: 4, height:-5},            
        }}>
            <Text style={!(lenght==='M')&&{
                color:Colors.DARK_GRAY,
                fontFamily: "outfit",
                fontSize: 20,
                textAlign: 'center'
            }||
            {
                color:Colors.WHITE,
                fontFamily: "outfit",
                fontSize: 20,
                textAlign: 'center'
            }}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> setLenght("L")}
        style={!(lenght==="L")&&{
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: 'auto',
            borderColor: Colors.GRAY,
            borderRadius: 5 ,
            borderWidth: 1.1,
            shadowColor: Colors.BLACK,
            shadowOpacity: 0.9,
            shadowRadius: 2,
            shadowOffset:{width: 4, height:-5},
        }
        ||
        {
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: 'auto',
            borderColor: Colors.BLACK,
            backgroundColor: Colors.BLACK,
            borderRadius: 5 ,
            borderWidth: 1.1,
            shadowColor: Colors.BLACK,
            shadowOpacity: 0.9,
            shadowRadius: 2,
            shadowOffset:{width: 4, height:-5},            
        }}>
            <Text style={!(lenght==='L')&&{
                color:Colors.DARK_GRAY,
                fontFamily: "outfit",
                fontSize: 20,
                textAlign: 'center'
            }||
            {
                color:Colors.WHITE,
                fontFamily: "outfit",
                fontSize: 20,
                textAlign: 'center'
            }}>L</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> setLenght("XL")}
        style={!(lenght==="XL")&&{
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: 'auto',
            borderColor: Colors.GRAY,
            borderRadius: 5 ,
            borderWidth: 1.1,
            shadowColor: Colors.BLACK,
            shadowOpacity: 0.9,
            shadowRadius: 2,
            shadowOffset:{width: 4, height:-5},
        }
        ||
        {
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: 'auto',
            borderColor: Colors.BLACK,
            backgroundColor: Colors.BLACK,
            borderRadius: 5 ,
            borderWidth: 1.1,
            shadowColor: Colors.BLACK,
            shadowOpacity: 0.9,
            shadowRadius: 2,
            shadowOffset:{width: 4, height:-5},            
        }}>
            <Text style={!(lenght==='XL')&&{
                color:Colors.DARK_GRAY,
                fontFamily: "outfit",
                fontSize: 20,
                textAlign: 'center'
            }||
            {
                color:Colors.WHITE,
                fontFamily: "outfit",
                fontSize: 20,
                textAlign: 'center'
            }}>XL</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> setLenght("XXL")}
        style={!(lenght==="XXL")&&{
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: 'auto',
            borderColor: Colors.GRAY,
            borderRadius: 5 ,
            borderWidth: 1.1,
            shadowColor: Colors.BLACK,
            shadowOpacity: 0.9,
            shadowRadius: 2,
            shadowOffset:{width: 4, height:-5},
        }
        ||
        {
            paddingVertical: 12,
            paddingHorizontal: 18,
            width: 'auto',
            borderColor: Colors.BLACK,
            backgroundColor: Colors.BLACK,
            borderRadius: 5 ,
            borderWidth: 1.1,
            shadowColor: Colors.BLACK,
            shadowOpacity: 0.9,
            shadowRadius: 2,
            shadowOffset:{width: 4, height:-5},            
        }}>
            <Text style={!(lenght==='XXL')&&{
                color:Colors.DARK_GRAY,
                fontFamily: "outfit",
                fontSize: 20,
                textAlign: 'center'
            }||
            {
                color:Colors.WHITE,
                fontFamily: "outfit",
                fontSize: 20,
                textAlign: 'center'
            }}>XXL</Text>
        </TouchableOpacity>
      </View>

      <Text style={{
        color:Colors.DARK_GRAY,
        fontFamily: "outfit",
        fontSize: 20,
        textAlign: 'left'
      }}> Select Color: {color}</Text>
      <View style={styles.colorWrapper}>
        <TouchableOpacity
        onPress={()=> setColor('Red')}
        style={{
            width: 20,
            height: 20,
            backgroundColor: Colors.RED,
            borderWidth: 1.2,
            borderColor: Colors.GRAY,
            borderRadius: 10,
        }}></TouchableOpacity>

        <TouchableOpacity
        onPress={()=> setColor('White')}
        style={{
            width: 20,
            height: 20,
            backgroundColor: Colors.WHITE,
            borderWidth: 1.2,
            borderColor: Colors.GRAY,
            borderRadius: 10,
        }}></TouchableOpacity>

        <TouchableOpacity
        onPress={()=> setColor('Black')}
        style={{
            width: 20,
            height: 20,
            backgroundColor: Colors.BLACK,
            borderWidth: 1.2,
            borderColor: Colors.GRAY,
            borderRadius: 10,
        }}></TouchableOpacity>

        <TouchableOpacity
        onPress={()=> setColor('Green')}
        style={{
            width: 20,
            height: 20,
            backgroundColor: Colors.GREEN,
            borderWidth: 1.2,
            borderColor: Colors.GRAY,
            borderRadius: 10,
        }}></TouchableOpacity>
      </View>
      <Text style={{
        color:Colors.BLACK,
        fontFamily: "outfit-medium",
        fontSize: 25,
        textAlign: 'left',
      }}> Description</Text>
      <Text style={{
        color:Colors.GRAY,
        fontFamily: "outfit",
        fontSize: 20,
        textAlign: 'left',
        width: "100%",
      }}> {donnees.data.description} </Text>
      
      </ScrollView>
      <TouchableOpacity 
        onPress={()=>navigator.navigate('cart')}
        style={styles.cartButton}
        >
            <Text style={{
                color:Colors.BLACK,
                fontFamily: "outfit-medium",
                fontSize: 20,
                textAlign: 'left',
            }}> Add to Cart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        padding: 0,
        flexDirection: 'column',
        backgroundColor: Colors.BACKGROUND,
        justifyContent: 'flex-end',
    },
    subContainer:{
        padding: 20,
        flexDirection: 'column',
        gap: 15,
    },

    contentContainer:{
        flexDirection: 'column',
        gap: 15,
    },
    wrapper:{
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        width: '100%',
        height: 'auto',

    },
    colorWrapper:{
        flexDirection: 'row',
        gap: 10,
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
    header:{
        zIndex: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        marginTop: 35,
        marginHorizontal: 25,
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    backArray:{
        padding: 6,
        backgroundColor: Colors.WHITE,
        borderRadius: 50,
        position: "relative",
        shadowColor: Colors.DARK_GRAY,
        elevation: 8,
        shadowRadius: 10,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.9,
    }
})