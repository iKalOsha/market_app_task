import React from 'react';
import {View, Text, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

function SlidingPages({navigation}) {
    return (
        <Onboarding onDone={() => navigation.replace('HomePage')} pages={[
            {
                backgroundColor: 'white',
                image: <Image source={require('./assets/bart.png')} />,
                title: 'Welcome to our market app!'
            },
            {
                backgroundColor: 'blue',
                image: <Image source={require('./assets/bart2.png')} />,
                title: 'You can buy whatever you want on here'
            },
            {
                backgroundColor: 'green',
                // image: <Image source={require('./assets/bart3.png')} />,
                title: 'Just click next and lets go'
            }
        ]} />
    )
}

export default SlidingPages;