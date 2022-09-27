import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME_SCREEN} from './src/screens/Home';
import {DESIGN_SCREEN, DesignScreen} from "./src/screens/Design";
import {HomeDrawer} from "./src/navigations/HomeDrawer";
import {SUPPORT_SCREEN, SupportScreen} from "./src/screens/Support";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={HOME_SCREEN}>
                <Stack.Screen name={"HOME_DRAWER"} component={HomeDrawer} options={{headerShown: false}}/>
                <Stack.Screen name={DESIGN_SCREEN} component={DesignScreen} options={{headerShown: false}}/>
                <Stack.Screen name={SUPPORT_SCREEN} component={SupportScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}