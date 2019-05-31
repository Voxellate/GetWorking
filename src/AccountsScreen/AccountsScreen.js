import React, {Component} from 'react';
import {StatusBar, StyleSheet, AsyncStorage} from 'react-native';
import getTheme from '../../native-base-theme/components';
import {
    StyleProvider,
    Container,
    Content,
    Text,
    Right,
    Icon,
    Button,
    Picker,
    Header, Form, Item, Input, Card, CardItem, Toast
} from "native-base";

var linkedAccounts = ["BP Fuel Card: MrDECO2500"];

export default class AccountsScreen extends Component {
    state = {
        notifyValue: false,
        soundsValue: true,
        account: undefined,
        username: undefined,
        selectedReward: undefined,
        button: false,
    };

    onValueChange(value: string) {
        this.setState({
            studyHours: value
        });
    }


    renderLinks() {
        if (linkedAccounts !== []) {
            return linkedAccounts.map((account) => {
                return (
                    <CardItem key={account}><Text>{account}</Text></CardItem>)
            });
        }
    }

    setLinks() {
        if (this.state.account !== undefined && this.state.username !== undefined) {
            linkedAccounts.push(this.state.account + ": " + this.state.username.toString());
            Toast.show({
                text: 'Account Linked!',
                duration: 3000
            });
        }
    }

    onAccountSelected(value) {
        this.setState({
            account: value
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
                        <Form>
                            <Text style={styles.label}>Add Account:</Text>
                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Account Type"
                                    placeholderStyle={{color: "#74788e"}}
                                    placeholderIconColor="#007aff"
                                    iosIcon={<Icon
                                        name="arrow-forward"/>}
                                    style={{width: undefined}}
                                    selectedValue={this.state.account}
                                    onValueChange={(value) => this.onAccountSelected(value)}
                                >
                                    <Picker.Item label="Flybuys"
                                                 value="FlyBuys"/>
                                    <Picker.Item
                                        label="League of Legends"
                                        value="League of Legends"/>
                                    <Picker.Item label="JB Hi-Fi"
                                                 value="JB Hi-Fi"/>
                                </Picker>
                            </Item>
                            <Item>
                                <Input placeholder="Username"
                                       onEndEditing={(e) => {
                                           this.setState({username: e.nativeEvent.text})
                                       }}
                                />
                            </Item>
                            <Item last style={{marginBottom: 10}}>
                                <Input placeholder="Password"/>
                            </Item>
                        </Form>
                        <Button block style={styles.button}
                                onPress={() => {
                                    this.setLinks();
                                    this.setState({button: true});
                                }}>
                            <Text>Add Account</Text>
                        </Button>
                        <Text style={styles.label}>Linked Accounts:</Text>
                        <Card style={styles.card}>
                            {this.renderLinks()}
                        </Card>
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
    card: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        paddingTop: 5,
        marginBottom: 10,
        paddingBottom: 5
    },
    label: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 10,
    },
    button: {
        marginTop: 10,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#0E386A',
        fontWeight: 'bold'
    }
});
