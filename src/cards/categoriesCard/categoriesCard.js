import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import categoriesCardStyle from './categoriesCardStyle'

export default function CategoriesCard({ products, onSelect }) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={categoriesCardStyle.container}>
        <Image style={categoriesCardStyle.image} source={{ uri: products.strCategoryThumb }} />
        <Text style={categoriesCardStyle.text}>{products.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}