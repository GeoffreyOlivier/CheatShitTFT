import React, { useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Pressable
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../stores/user.reducer'
import { useNavigation } from '@react-navigation/native'

const ListChampion = () => {
  const navigation = useNavigation()
  const numColumns = 3
  const dispatch = useDispatch()
  const users = useSelector(selectAll)


  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  const renderItem = ({ item }) => {

    if (item.empty === true) {
      return <View style={(styles.item, styles.itemTransparent)} />
    }
    return (
      <Pressable onPress={() => navigation.navigate('Champion', { item })}>
        <View style={[styles.item, styles['cost' + item.cost]]}>
           <Image source={item.image[item.name]} style={styles.image}/>
        </View>
        <Text style={styles.name}>{item.name}</Text>
      </Pressable>
    )
  }
  return (
    <View>
      <FlatList
        style={styles.list}
        data={users}
        renderItem={renderItem}
        numColumns={numColumns}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  itemTransparent: {
    backgroundColor: 'blue'
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cost1: {
    backgroundColor: '#A9A9A9'
  },
  cost2: {
    backgroundColor: '#058635'
  },
  cost3: {
    backgroundColor: '#1666B8'
  },
  cost4: {
    backgroundColor: '#8b3b9a'
  },
  cost5: {
    backgroundColor: '#c48e31'
  },
  cost8: {
    backgroundColor: '#8b3b9a'
  },
  cost10: {
    backgroundColor: '#eeca20'
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  list: {
    marginBottom: 100
  },
  image: {
    height: '100%',
    width: '100%'
  }
})

export default ListChampion
