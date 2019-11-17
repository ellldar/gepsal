import React from 'react';
import {View, Text, Modal, TouchableHighlight, StyleSheet, Image} from 'react-native';
import styles from '../styles'
import InfoElement from '../Elements/InfoElement';

export default class HomeScreen extends React.Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    };

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <TouchableHighlight
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <View style={modal.container}>
                            <View style={modal.header}>
                                <Image
                                    style={modal.avatar}
                                    source={{uri: 'https://i.pinimg.com/736x/ea/f2/2e/eaf22e6a189f76ed24054e2ca7feb00f.jpg'}}
                                />
                                <Text style={modal.name}>Mr. Tony Stark</Text>
                            </View>
                            <View style={modal.body}>
                                <View style={modal.info}>
                                    <Text style={modal.infoTitle}>Price:</Text>
                                    <Text style={modal.infoText}>$1000</Text>
                                </View>
                                <View style={modal.info}>
                                    <Text style={modal.infoTitle}>Languages:</Text>
                                    <Text style={modal.infoText}>English - Asgardian</Text>
                                </View>
                                <View style={modal.info}>
                                    <Text style={modal.infoTitle}>Specialty:</Text>
                                    <Text style={[modal.infoText, {paddingBottom: 100}]}>Intergalactic Exchange</Text>
                                </View>
                                <Image
                                    style={modal.phone}
                                    source={{uri: 'https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png'}}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </Modal>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Translator Home</Text>
                </View>
                <TouchableHighlight style={styles.content}
                                    onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                    <View style={{flex:1, width: '100%'}}>
                        <InfoElement title={"Upcoming Jobs"} info={"10:30 Nov 16 - Mr. Leo Johnson\n\nEnglish - Chinese | International Trade"}/>
                        <InfoElement info={"18:00 Nov 17 - Mr. Tony Start\n\nEnglish - Asgardian | Intergalactic Research"}/>
                        <InfoElement info={"09:00 Nov 20 - Mr. Thor Odinsson\n\nAsgardian - Irish | Ale Brewery Exchange"}/>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const modal = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 2,
        width: '100%',
        paddingTop: 22,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e53935'
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2
    },
    name: {
        paddingTop: 10,
        fontSize: 26,
        fontWeight: '600',
        color: '#DDD'
    },
    phone: {
        width: 70,
        height: 70
    },
    body: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 60
    },
    info: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    infoTitle: {
        fontSize: 20,
        fontWeight: '700',
        paddingRight: 50,
    },
    infoText: {
        fontSize: 20
    }
});
