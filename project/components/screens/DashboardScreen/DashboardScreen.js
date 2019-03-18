import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ListView } from 'react-native';

import TopBar from '../../mainbars/TopBar';
import TopSubBar from '../../mainbars/TopSubBar';
import Header from './Header';
import AwardsBar from './AwardsBar';

import Row from './Row'
import profiles from '../../data/Profiles';

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
                <ListView
                    contentContainerStyle = {styles.listContainer}
                    dataSource = {this.state.dataSource}
                    renderRow = {(data) => <Row {...data} />}
                />
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
        height: '1%',
        width: '100%'
    }
});