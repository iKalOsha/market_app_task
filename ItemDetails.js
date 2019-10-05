import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

function ItemDetails() {
    var name = useNavigation().getParam('name')
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}} >{name}</Text>
    </View>
    )
}

export default ItemDetails;