import React, {Component} from "react";
import HomeScreen, {NavigationBar} from "./src/HomeScreen/HomeScreen.js";
import SettingsScreen from "./src/SettingsScreen/SettingsScreen.js";
import AccountsScreen from "./src/AccountsScreen/AccountsScreen.js";
import WorkingScreen from "./src/WorkingScreen/WorkingScreen.js"
import ScheduleScreen from "./src/ScheduleScreen/ScheduleScreen.js"
import {createStackNavigator, createAppContainer} from "react-navigation";
import {Root} from 'native-base';


const RootStack = createStackNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
    Accounts: AccountsScreen,
    Working: WorkingScreen,
    Schedule: ScheduleScreen
}, {
    initialRouteName: "Home"
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <Root><AppContainer/></Root>;
    }
}
