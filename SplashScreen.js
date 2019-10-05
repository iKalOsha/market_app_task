import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(function() {
            navigation.navigate('Sliding');
        }, 4000)
    })
    return (
    <View style={{justifyContent: 'center', alignItems: 'center'}} >
        <Image source={require('./assets/splash.png')} />
    </View>
    )
}

export default SplashScreen;