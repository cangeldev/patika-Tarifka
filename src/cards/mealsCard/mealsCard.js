import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import mealsCardStyle from './mealsCardStyle'

export default function MealsCard({ test ,onSelectDetail}) {
  return (
    <TouchableWithoutFeedback  onPress={onSelectDetail}>
      <View style={mealsCardStyle.container}>
        <ImageBackground style={mealsCardStyle.image} source={{ uri: test.strMealThumb }}>
          <Text numberOfLines={1} style={mealsCardStyle.text}>{test.strMeal}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}
