import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from 'react-native-elements';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/Ionicons';
import { getDataAction } from './Actions/StoreAction';

const mapStateToProps = (state) => {
    return {
        storeData: state.store.storeData
    }
}

function HomePage({ navigation }) {
    debugger
    const { storeData } = useSelector(mapStateToProps)
    const dispatch = useDispatch()

    useEffect(() => {
        if (storeData.length == 0) {
            dispatch(getDataAction())
        }
        //console.warn('storeData',storeData)
    })

    return (
        <View style={{ flex: 1 }} >
            <Header leftComponent={<Icon name='md-menu' size={30} color='black' />} containerStyle={{ backgroundColor: 'white' }} placement='right' centerComponent={<Icon name='md-cart' size={30} color='black' />} rightComponent={{ icon: 'search', style: { color: 'black' } }} />
            <SliderBox images={storeData.map(i => i.category_img)} />
            <FlatList style={{ flex: 1 }} data={storeData} keyExtractor={(item) => item.id} renderItem={({ item }) =>
                (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id, name: item.name, image: item.category_img })} >
                        <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }} >
                            <Image source={{ uri: item.category_img }} style={{ width: '100%', height: '100%' }} resizeMode='contain' resizeMethod='resize' />
                            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}} >
                                <Text style={{textAlignVertical: 'bottom', fontSize: 20, height: '85%'}} >{item.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )} />
        </View>
    )
}

export default HomePage;