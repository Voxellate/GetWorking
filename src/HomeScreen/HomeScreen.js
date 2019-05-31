import React, {Component} from 'react';
import {StyleSheet, Text, StatusBar, View} from 'react-native';
import getTheme from '../../native-base-theme/components';

import {
    StyleProvider,
    Container,
    Content,
    Header,
    Title,
    Left,
    Thumbnail,
    Body,
    Right,
    Button,
    Icon,
    Form,
    Picker,
    Card,
    CardItem
} from "native-base";

var previousRewards = [
    {id: "1", text: "23/05/19              Blue Essence                 20"},
    {id: "2", text: "23/05/19              Flybuys Points               10"},
    {id: "3", text: "26/05/19              Flybuys Points               30"},
];

export default class HomeScreen extends React.Component {

    static navigationOptions = (navigationProps) => {
        return {
            header: (props) => (
                <Header style={styles.header}>
                    <StatusBar barStyle="light-content"/>
                    <Left>
                        <Button transparent>
                            <Thumbnail square
                                       source={require('../../assets/icon.png')}/>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent light
                                onPress={() => props.navigation.navigate('Schedule')}>
                            <Icon name='calendar'/>
                        </Button>
                        <Button transparent light
                                onPress={() => props.navigation.navigate('Settings')}>
                            <Icon name='settings'/>
                        </Button>
                        <Button transparent light
                                onPress={() => props.navigation.navigate('Accounts')}>
                            <Icon type='MaterialCommunityIcons' name='account-circle'/>
                        </Button>
                    </Right>
                </Header>
            ),
        };
    };

    renderCategories() {
        return previousRewards.map((item, index) => <CardItem
            key={index}><Text>{item.text}</Text></CardItem>);
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedReward: undefined
        };
    }

    onValueChange(value: string) {
        this.setState({
            selectedReward: value
        });
    }

    render() {
        return (
            <StyleProvider style={getTheme()}>
                <Container>
                    <Content>
                        <View style={{
                            flex: 1, flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{height: 100}}>
                                <Text style={styles.label}>Reward Type:</Text>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down"/>}
                                    placeholder="Select your Reward"
                                    placeholderStyle={{color: "#74788e"}}
                                    placeholderIconColor="#007aff"
                                    style={{width: undefined}}
                                    selectedValue={this.state.selectedReward}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="Flybuys Points"
                                                 value="flybuys"/>
                                    <Picker.Item
                                        label="League of Legends Blue Essence"
                                        value="lolessence"/>
                                    <Picker.Item label="JB Hi-Fi Gift Card"
                                                 value="jbhifi"/>
                                </Picker>
                            </View>
                            <View style={{height: 400}}>
                                <Text style={styles.label}>Previous
                                    Rewards:
                                </Text>
                                <Card style={styles.card}>
                                    {this.renderCategories()}
                                </Card>
                            </View>
                            <View style={{height: 100}}>
                                <Button block style={styles.working}
                                        onPress={() => this.props.navigation.navigate('Working')}>
                                    <Text style={styles.working}>Get
                                        Working!</Text>
                                </Button>
                            </View>
                        </View>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#0E386A',
        height: 80,
    },
    label: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 10,
    },
    card: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        paddingTop: 5,
        marginBottom: 10,
        paddingBottom: 5
    },
    working: {
        backgroundColor: '#0E386A',
        marginLeft: 20,
        marginRight: 20,
        fontSize: 48,
        paddingTop: 20,
        paddingBottom: 20,
        alignContent: 'center',
        color: '#FFFFFF',
        fontWeight: "bold",
        height: 100,
    }
});
