import React from 'react';
import {View, Text, FlatList, Image, Dimensions, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import { Header } from 'react-native-elements';
import {useNavigation} from 'react-navigation-hooks';
import Icon from 'react-native-vector-icons/Ionicons';

var name = undefined
var image = undefined
var dimensions = Dimensions.get('window')
var screenWidth = dimensions.width
const mapStateToProps = (state, props) => {
    const id = useNavigation().getParam('id');
    name = useNavigation().getParam('name');
    image = useNavigation().getParam('image');
    return {
        product: state.store.storeData.filter(i => i.id === id).map(i => i.products)
    }
}

function Details({navigation}) {
    const {product} = useSelector(mapStateToProps)
    return (
        <View style={{flex: 1}}>
        <Header placement='left' containerStyle={{ backgroundColor: 'transparent' }} centerComponent={{text: name, style: {color: 'black'}}} leftComponent={<Icon name='md-arrow-back' size={30} color='black' />} />
            <FlatList style={{flex: 1}} data={product[0]} keyExtractor={(item) => `${item.id}`} renderItem={({item}) => 
        (
            <TouchableOpacity onPress={() => navigation.navigate('ItemDetails', {name: item.name})} >
            <View style={{height: 350, justifyContent: 'center', alignItems: 'center'}} >
                <Image source={{uri: item.product_img}} style={{ width: '85%', height: '85%' }} resizeMode='contain' resizeMethod='resize'  />
                <Text>{item.weight}</Text>
                <Text>{item.price}</Text>
            </View>
            </TouchableOpacity>
        )} />
        </View>
    )
}

export default Details;