import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './SplashScreen';
import HomePage from './HomePage';
import SlidingPages from './SlidingPages';
import Details from './Details';
import ItemDetails from './ItemDetails';

export const Routes = createAppContainer(createStackNavigator({
    Splach: {screen: SplashScreen},
    Sliding: {screen: SlidingPages},
    HomePage: {screen: HomePage},
    Details: {screen: Details},
    ItemDetails: {screen: ItemDetails}
}, {
    headerMode: 'none',
})
)