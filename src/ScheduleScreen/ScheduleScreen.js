import React, {Component} from 'react';
import {StatusBar, StyleSheet, AsyncStorage} from 'react-native';
import getTheme from '../../native-base-theme/components';
import {
    StyleProvider,
    Container,
    Content,
    Text,
    Left,
    Right,
    Icon,
    Button,
    Picker,
    Header, Form, Item, Input, Card, CardItem, Toast
} from "native-base";

var schedule = ["Monday: 3:30pm to 4:30pm", "Saturday: 10:00am to 10:30am"];

export default class ScheduleScreen extends Component {
    state = {
        day: undefined,
        start: undefined,
        end: undefined,
        button: false,
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

    editSchedule(entry) {
        schedule.pop(entry);
        this.setState({day: undefined});
    }

    renderSchedule() {
        if (schedule !== []) {
            return schedule.map((entry) => {
                return (
                    <CardItem key={entry}><Text>{entry}</Text></CardItem>)
            });
        }
    }

    setSchedule() {
        if (this.state.day !== undefined &&
            this.state.start !== undefined &&
            this.state.end !== undefined) {
            schedule.push(this.state.day + ": " + this.state.start +
                            " to " + this.state.end);
            Toast.show({
                text: 'Schedule updated!',
                duration: 3000
            });
        }
    }

    onDaySelected(value) {
        this.setState({
            day: value
        });
    }

    onStartSelected(value) {
        this.setState({
            start: value
        });
    }

    onEndSelected(value) {
        this.setState({
            end: value
        });
    }

    render() {
        return (
            <StyleProvider style={getTheme()}>
                <Container>
                    <Content>
                        <Form>
                            <Text style={styles.label}>Add Session:</Text>
                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Day"
                                    placeholderStyle={{color: "#74788e"}}
                                    placeholderIconColor="#007aff"
                                    iosIcon={<Icon
                                        name="arrow-down"/>}
                                    style={{width: undefined}}
                                    selectedValue={this.state.day}
                                    onValueChange={(value) => this.onDaySelected(value)}
                                >
                                    <Picker.Item label="Monday" value="Monday"/>
                                    <Picker.Item label="Tuesday" value="Tuesday"/>
                                    <Picker.Item label="Wednesday" value="Wednesday"/>
                                    <Picker.Item label="Thursday" value="Thursday"/>
                                    <Picker.Item label="Friday" value="Friday"/>
                                    <Picker.Item label="Saturday" value="Saturday"/>
                                    <Picker.Item label="Sunday" value="Sunday"/>
                                </Picker>
                            </Item>
                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Start Time"
                                    placeholderStyle={{color: "#74788e"}}
                                    placeholderIconColor="#007aff"
                                    iosIcon={<Icon
                                        name="arrow-down"/>}
                                    style={{width: undefined}}
                                    selectedValue={this.state.start}
                                    onValueChange={(value) => this.onStartSelected(value)}
                                >
                                    <Picker.Item label="10:30am" value="10:30am"/>
                                    <Picker.Item label="11:00am" value="11:00am"/>
                                    <Picker.Item label="11:30am" value="11:30am"/>
                                    <Picker.Item label="12:00pm" value="12:00pm"/>
                                    <Picker.Item label="12:30pm" value="12:30pm"/>
                                    <Picker.Item label="1:00pm" value="1:00pm"/>
                                    <Picker.Item label="1:30pm" value="1:30pm"/>
                                    <Picker.Item label="2:00pm" value="2:00pm"/>
                                </Picker>
                            </Item>
                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    placeholder="End Time"
                                    placeholderStyle={{color: "#74788e"}}
                                    placeholderIconColor="#007aff"
                                    iosIcon={<Icon
                                        name="arrow-down"/>}
                                    style={{width: undefined}}
                                    selectedValue={this.state.end}
                                    onValueChange={(value) => this.onEndSelected(value)}
                                >
                                    <Picker.Item label="10:30am" value="10:30am"/>
                                    <Picker.Item label="11:00am" value="11:00am"/>
                                    <Picker.Item label="11:30am" value="11:30am"/>
                                    <Picker.Item label="12:00pm" value="12:00pm"/>
                                    <Picker.Item label="12:30pm" value="12:30pm"/>
                                    <Picker.Item label="1:00pm" value="1:00pm"/>
                                    <Picker.Item label="1:30pm" value="1:30pm"/>
                                    <Picker.Item label="2:00pm" value="2:00pm"/>
                                </Picker>
                            </Item>
                        </Form>
                        <Button block style={styles.button}
                                onPress={() => {
                                    this.setSchedule();
                                    this.setState({button: true});
                                }}>
                            <Text>Add Session</Text>
                        </Button>
                        <Text style={styles.label}>Current Sessions:</Text>
                        <Card style={styles.card}>
                            {this.renderSchedule()}
                        </Card>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0E386A',
        height: 80,
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
