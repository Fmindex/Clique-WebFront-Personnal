/* eslint-disable */

import React, { Component } from 'react';
import EventItem from '../container/eventItem';

class cardList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <section aria-hidden="false" role="card-list">
                <h2 className="display-none">Card List</h2>
                <EventItem detail-shown="false" />
                <EventItem detail-shown="false" />
                <EventItem detail-shown="false" />
                <EventItem detail-shown="false" />
                <EventItem detail-shown="false" />
                <EventItem detail-shown="false" />
                <EventItem detail-shown="false" />
                <EventItem detail-shown="false" />
                <EventItem detail-shown="false" />
            </section>
        );
    }
}

export default cardList;