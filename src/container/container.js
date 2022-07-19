import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from '../pages/categories/categories'
import Detail from '../pages/detail/detail'
import colors from '../assets/colors/colors'
import Meals from '../pages/meals/meals'

export default function Container() {
  const Stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Categories'>
          <Stack.Screen name='Categories' component={Categories}
            options={{
              headerTitleAlign: "center",
              headerTitle: "Categories",
              headerTintColor: colors.orange_1,
              headerTitleStyle: { fontSize: 30 },
            }} />
          <Stack.Screen name='Detail' component={Detail} />
          <Stack.Screen name='Meals' component={Meals}
            options={{
              headerTitleAlign: "center",
              headerTitle: "Meals",
              headerTintColor: colors.orange_1,
              headerTitleStyle: { fontSize: 30 },
            }} />
        </Stack.Navigator>

      </NavigationContainer>
    </View>
  )
}