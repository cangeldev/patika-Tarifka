import { View, FlatList } from 'react-native'
import React from 'react'
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch/useFetch'
import Loading from '../../components/loading/loading'
import Error from '../../components/error/error'
import MealsCard from '../../cards/mealsCard/mealsCard'
import mealsStyle from './mealsStyle'

export default function Meals(props) {
  const { navigation } = props;
  const { strCategory } = props.route.params
  const { isLoading, error, list } = useFetch(`${Config.API_FOODS}${strCategory}`)
  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const handle = (idMeal) => { navigation.navigate('Detail',{idMeal}) }

  const renderProducts = ({ item }) => <MealsCard test={item} onSelectDetail={()=>handle(item.idMeal)} />
  return (
    <View style={mealsStyle.container}>
      <FlatList data={list.meals} renderItem={renderProducts} />
    </View>
  )
}



