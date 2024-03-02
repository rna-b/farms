import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import Home from '../src/screens/Home';

const MainNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ScreenNames.Home} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MainNavigation