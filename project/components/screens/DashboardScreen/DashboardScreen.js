import React from 'react';
import {StyleSheet, KeyboardAvoidingView, ListView, ScrollView} from 'react-native';

import TopBar from '../../mainbars/TopBar';
import TopSubBar from '../../mainbars/TopSubBar';
import Header from './Header';
import AwardsBar from './AwardsBar';

import {Leaderboard} from './Leaderboard';
import {profiles} from '../../data/Profiles';

export default class DashboardScreen extends React.Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(profiles)
        };
    }

    render() {
        return (
            <KeyboardAvoidingView style = {styles.container}>
                <TopBar />
                <TopSubBar />
                <Header />
                <AwardsBar />
                <ScrollView>
                    <ListView
                        contentContainerStyle = {styles.listContainer}
                        dataSource = {this.state.dataSource}
                        renderRow = {(data) => <Leaderboard {...data} />}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%'
    }
});