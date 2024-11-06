import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { data } from '@/data/data'
import ProductView from '@/components/ProductView'
import { DataContext } from '@/context/context'
import { useNavigation } from 'expo-router'

export const category = ["All", "Men","Women",'Kids','Couples']

const HomeScreen = () => {
  const [user, setUser] = useState("yvan")
  const [categoryClicked, setCategoryClicked] = useState("Men")
  const {donnees, setDonnees} = useContext(DataContext)
  const navigator = useNavigation()

  const handleProduct = (value) => {
    setDonnees({user: donnees.user, data: value})
    navigator.navigate('product')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name='menu-outline' size={30} color={Colors.BLACK} />
        <View style={styles.headerRight}>
          <Ionicons name='search' size={30} color={Colors.BLACK} />
          <Ionicons name='cart-outline' size={30} color={Colors.BLACK} onPress={()=>navigator.navigate('cart')}/>
        </View>
      </View>
      <Text style={{
        color: Colors.BLACK,
        fontFamily: "outfit",
        fontSize: 25,
        textAlign: "left"
      }}>
        Hello {donnees?.user.username},
      </Text>

      <View style={styles.hero}>
      <View style={styles.heroLeft}>
        <View>
          <Text style={{
            color: Colors.BLACK,
            fontFamily: "outfit-medium",
            fontSize: 35,
            textAlign: "center",

          }}>25% Off</Text>
          <Text style={{
            color: Colors.BLACK,
            fontFamily: "outfit",
            fontSize: 18,
            textAlign: "center"
          }}>Nov 1 - Nov 20</Text>
        </View>
        <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 8,
          width: 150,
        }}>
          <Text style={{
            color: Colors.BLACK,
            fontFamily: "outfit",
            fontSize: 20,
            textAlign: "center"
          }}> Grab Now</Text>
        </TouchableOpacity>
      </View>
      <Image 
      source={require('@/assets/images/hero-img.png')}
      style={{
        objectFit: 'cover',
        width: "50%",
        height: "100%"
      }}/>
      </View>

      <View style={styles.wrapper}>
        <FlatList
        data={category}
        horizontal={true}
        renderItem={({item}) =>(
          <TouchableOpacity 
          style={!(categoryClicked===item)&&{
            borderRadius: 10,
            borderColor: Colors.GRAY,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 7,
            marginHorizontal: 10,
          }||{
            borderRadius: 10,
            borderColor: Colors.PRIMARY,
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 7,
            marginHorizontal: 10,
            backgroundColor: Colors.PRIMARY
          }}
          onPress={()=> setCategoryClicked(item)}
          >
            <Text style={!(categoryClicked===item)&&{
              color: Colors.DARK_GRAY,
              fontFamily: "outfit",
              fontSize: 25,
              textAlign: "center"
            }||{
              color: Colors.BLACK,
              fontFamily: "outfit",
              fontSize: 25,
              textAlign: "center"
            }}>{item}</Text>
          </TouchableOpacity>
        )}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        />
      </View>

      <ScrollView
      style={styles.productContainer}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      >
        {data.map((item, index) =>(
          <ProductView 
          image={item.image} 
          title={item.name} 
          price={item.price} 
          handlePress= {()=>handleProduct(item)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: "100%",
    backgroundColor: Colors.BACKGROUND,
    flexDirection: "column",
    padding: 20,
  },
  header:{
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: 100,
  },
  hero:{
    marginVertical: 20,
    width: "100%",
    height: 250,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    backgroundColor: Colors.GRAY,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 25
  },
  heroLeft:{
    flexDirection: "column",
    justifyContent: "space-between",
    width: "45%",
    height: "100%",
    paddingVertical: 25
  },
  wrapper:{
    width: "100%",
    height: "auto",
    paddingVertical: 10,
  },
  productContainer:{
    width: "100%",
    height: "auto",
    paddingVertical: 10,
    display: "flex",
    flexWrap: 'wrap',
    gap: 5,
    
  },

  contentContainer:{
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

})