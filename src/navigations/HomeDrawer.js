import React from 'react';
import {HOME_SCREEN, HomeScreen} from "../screens/Home";
import {MODEL_SCREEN, ModelScreen} from "../screens/Model";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import {Linking} from "react-native";

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Find Us" onPress={() => Linking.openURL('https://www.tesla.com')}/>
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function HomeDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName={MODEL_SCREEN}
            screenOptions={{headerShown: false}}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name={HOME_SCREEN} component={HomeScreen}/>
            <Drawer.Screen name={MODEL_SCREEN} component={ModelScreen} options={{headerShown: false}}/>
        </Drawer.Navigator>
    );
}

export {HomeDrawer};