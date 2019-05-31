import React, {Component} from 'react';
import {StatusBar, StyleSheet, Image} from 'react-native';
import getTheme from '../../native-base-theme/components';
import TimerMixin from 'react-timer-mixin';
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
    Separator, Header,
} from "native-base";

export default class SettingsScreen extends Component {
    state = {
        notifyValue: false,
        soundsValue: true,
        studyHours: undefined,
        timer: null,
        counter: 0
    };

    timer() {
        let seconds = Math.round(this.state.counter % 60);
        let minutes = Math.trunc(this.state.counter / 60);
        if (seconds < 10) {
            seconds = "0" + seconds
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        return ("00:" + minutes + ":" + seconds);
    }

    rewardImage() {
        if (this.state.counter < 15) {
            return (<Image style={styles.giftCard}
                           source={require('../../assets/card-0.png')}/>);
        } else if (this.state.counter < 30) {
            return (<Image style={styles.giftCard}
                           source={require('../../assets/card-1.png')}/>)
        } else if (this.state.counter < 45) {
            return (<Image style={styles.giftCard}
                           source={require('../../assets/card-2.png')}/>)
        } else if (this.state.counter < 60) {
            return (<Image style={styles.giftCard}
                           source={require('../../assets/card-3.png')}/>)
        } else if (this.state.counter < 75) {
            return (<Image style={styles.giftCard}
                           source={require('../../assets/card-4.png')}/>)
        } else {
            return (<Image style={styles.giftCard}
                           source={require('../../assets/card-5.png')}/>)
        }


    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({timer});
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    tick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

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
                <Container style={{backgroundColor: '#0E386A'}}>
                    <Content>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: 75
                        }}>
                        {this.rewardImage()}
                        <Text style={styles.timer}>{this.timer()}</Text>
                        </View>

                        <Button block style={styles.working}
                                onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={styles.working}>
                                Stop
                            </Text>
                        </Button>
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

    timer: {
        fontSize: 92,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 25,
        marginBottom: 25,
    },

    working: {
        backgroundColor: '#FFFFFF',
        marginLeft: 20,
        marginRight: 20,
        fontSize: 48,
        paddingTop: 20,
        paddingBottom: 20,
        alignContent: 'center',
        color: '#0E386A',
        fontWeight: "bold",
        height: 100,
    }
});
