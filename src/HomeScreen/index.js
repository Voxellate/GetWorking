import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import Settings from "../SettingsScreen/SettingsScreen.js";
import Accounts from "../AccountsScreen/AccountsScreen";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Settings: { screen: Settings },
        Accounts: { screen: Accounts },
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);

export default HomeScreenRouter;
