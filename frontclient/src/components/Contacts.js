import React, { Component } from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        fetch('/api/v1/person')
            .then(response => response.json())
            .then(data => this.setState({contacts: data}))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddContacts />
                </div>
                <div className="row">
                    {this.state.contacts.map((item) => (
                        <SingleContact key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Contacts;