import React, { Component } from 'react';

import Filter from './components/Filter';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Filter</h1>

                <Filter />
            </div>
        );
    }
}

export default App;
