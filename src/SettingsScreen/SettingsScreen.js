import React, {Component} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import getTheme from '../../native-base-theme/components';
import {
    StyleProvider,
    Container,
    Content,
    Text,
    List,
    ListItem,
    Left,
    Right,
    Body,
    Icon,
    Switch,
    Button,
    View,
    Picker,
    Separator, Header, Thumbnail
} from "native-base";

export default class SettingsScreen extends Component {
    state = {
        notifyValue: false,
        soundsValue: true,
        studyHours: "6",
    };

    toggleNotify = (val) => {
        this.setState({notifyValue: val});
    };

    toggleSound = (val) => {
        this.setState({soundsValue: val});
    };

    onValueChange(value: string) {
        this.setState({
            studyHours: value
        });
    }

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Header style={styles.header}>
                    <StatusBar barStyle="light-content"/>
                    <Right>
                        <Button transparent light
                                onPress={() => props.navigation.navigate('Home')}>
                            <Icon name='arrow-back' style={{marginLeft: 10}}/>
                        </Button>
                    </Right>
                </Header>
            ),
        };
    };

    render() {
        return (
            <StyleProvider style={getTheme()}>
                <Container>
                    <Content>
                        <List>
                            <ListItem>
                                <Left>
                                    <View style={styles.buttonSize}>
                                        <Button style={[styles.iconBorders, {
                                            backgroundColor: "#0a60ff"
                                        }]}>
                                            <Icon active name="stopwatch"
                                                  style={styles.icons}/>
                                        </Button>
                                    </View>
                                    <Text>Maximum Study Hours</Text>
                                </Left>
                            </ListItem>
                            <ListItem style={{paddingTop:0, paddingBottom:0}}>
                                <Left>
                                    <Picker
                                        mode="dropdown"
                                        placeholderStyle={{color: "#74788e"}}
                                        placeholderIconColor="#007aff"
                                        iosIcon={<Icon
                                            name="arrow-forward"/>}
                                        style={{width: undefined}}
                                        selectedValue={this.state.studyHours}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                    </Picker>
                                </Left>
                            </ListItem>
                            <Separator/>
                            <ListItem>
                                <Left>
                                    <View style={styles.buttonSize}>
                                        <Button
                                            style={[styles.iconBorders, {
                                                backgroundColor: "#fd8209"
                                            }]}>
                                            <Icon active
                                                  name="notifications"
                                                  style={styles.icons}/>
                                        </Button>
                                    </View>
                                    <Text>Push Notifications</Text>
                                </Left>
                                <Right>
                                    <Switch value={this.state.notifyValue}
                                            onValueChange={this.toggleNotify}/>
                                </Right>
                            </ListItem>
                            <ListItem>
                                <Left>
                                    <View style={styles.buttonSize}>
                                        <Button
                                            style={[styles.iconBorders, {
                                                backgroundColor: "#43d751"
                                            }]}>
                                            <Icon active type="FontAwesome"
                                                  name="volume-up"
                                                  style={styles.icons}/>
                                        </Button>
                                    </View>
                                    <Text>Reward Sounds</Text>
                                </Left>
                                <Right>
                                    <Switch value={this.state.soundsValue}
                                            onValueChange={this.toggleSound}/>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    icons: {
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5,
        flex: 1
    },

    iconBorders: {
        height: "100%",
        paddingTop: 0,
        paddingBottom: 0,
        width: "100%",
        textAlign: "center"
    },

    buttonSize: {
        marginRight: 10,
        width: 35,
        height: 35,
        textAlign: "center"
    },

    header: {
        backgroundColor: '#0E386A',
        height: 80,
    },
});
