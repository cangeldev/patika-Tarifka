import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import detailStyle from './detailStyle'
import useFetch from '../../hooks/useFetch/useFetch'
import Loading from '../../components/loading/loading'
import Error from '../../components/error/error'
import Config from 'react-native-config'

export default function Detail(props) {

  const { isLoading, error, list } = useFetch(`${Config.API_DET}${idMeal}`)
  const { idMeal,strYoutube} = props.route.params
  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  return (
    <View>
      <Image style={detailStyle.container} />
      <Text>{strYoutube}</Text>
    </View>
  )
}