import React, {Component} from 'react';
import Header from '../components/Header';
import TabComponent from '../components/TabComponent';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <TabComponent />
                <h1>The Main Component</h1>
            </div>
        )
    }
}

export default Main;