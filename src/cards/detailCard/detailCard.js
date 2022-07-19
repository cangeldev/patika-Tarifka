import { Text, View, Image, Button, Linking } from 'react-native'
import React from 'react'
import detailCardStyle from './detailCardStyle'

export default function DetailCard({ details }) {
    return (
        <View style={detailCardStyle.container}>
            <Image style={detailCardStyle.image} source={{ uri: details.strMealThumb }} />
            <View style={detailCardStyle.titleContainer}>
                <Text style={detailCardStyle.title}>{details.strMeal}</Text>
                <Text style={detailCardStyle.area}>{details.strArea}</Text>
            </View>
            <View style={detailCardStyle.desc}>
                <Text style={detailCardStyle.text}>{details.strInstructions}</Text>
            </View>
            <View style={detailCardStyle.link}>
                <Button style={detailCardStyle.button} title="Watch on Youtube" color="red" onPress={() => { Linking.openURL(details.strYoutube) }} />
            </View>
        </View>
    )
}