import { View, FlatList } from 'react-native'
import React from 'react'
import categoriesStyle from './categoriesStyle'
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch/useFetch'
import Loading from '../../components/loading/loading'
import Error from '../../components/error/error'
import CategoriesCard from '../../cards/categoriesCard/categoriesCard'

export default function Categories({ navigation }) {
  const { isLoading, error, list } = useFetch(Config.API_URL + "json/v1/1/categories.php")
  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const renderProducts = ({ item }) => <CategoriesCard products={item} onSelect={() => handleProductSelect(item.strCategory)} />
  const handleProductSelect = (strCategory) => { navigation.navigate("Meals", { strCategory }) }
  return (
    <View style={categoriesStyle.container}>
      <FlatList data={list.categories} renderItem={renderProducts} />
    </View>
  )
}