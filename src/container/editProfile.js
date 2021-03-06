/* eslint-disable */

import React, { Component } from 'react';
import autoBind from '../hoc/autoBind';
import Circle from '../components/circle';

class editProfile extends Component {
    // constructor(props) {
    //     super(props);
    // }

    onExit() {
        this.props.toggle_pop_item();
    }

    render() {
        return (
            <div>
                <div className="background-overlay" aria-hidden="true"/>
                <div className="edit-profile basic-card-no-glow">
                    <section className="edit-pro-head">
                        <button role="exit" onClick={this.onExit.bind(this)}>
                            <img src="../../resource/images/X.svg" />
                        </button>
                        <img src="../resource/images/dummyProfile.png" alt="profile-pic" />
                        <div className="profile-head">
                            <h1 alt="profile-name">Mitsuha Atchula</h1>
                            <div alt="faculty-icon" /> <p>Faculty of Engineering</p>
                        </div>
                    </section>
                    <p className="hr"></p>
                    <section className="edit-pro-left">
                        <img alt="id"/> <p>5831000020</p>
                        <img alt="birth"/> <p>14 March 1997</p>
                        <img alt="nickname"/> <p>Nickname</p>
                        <img alt="line"/> <p>Line ID</p>
                        <img alt="email"/> <p>Email</p>
                        <img alt="mobile"/> <p>Mobile Number</p>
                        <img alt="size"/> <p>T-Shirt Size</p>
                        <img alt="med"/> <p>Medical Problem</p>
                        <img alt="food"/> <p>Food Allergy</p>
                    </section>
                    <p className="sec-line"></p>
                    <section className="edit-pro-right">
                        <div className="fb-link">
                            <img alt="fb-link"/> <p>Mitsu Za-inw</p>
                            <button className="unlink">Unlink</button>
                        </div>
                        <div className="cu-link">
                            <img alt="cu-link"/> <p>5831000020</p>
                            <button className="unlink">Unlink</button>
                        </div>
                        <div className="my-tag">
                            <p>YOUR INTERESTED TAG</p>
                            <section>
                                <Circle parent="tag" />
                                <Circle parent="tag" />
                                <Circle parent="tag" />
                                <Circle parent="tag" />
                                <Circle parent="tag" />
                                <Circle parent="tag" />
                                <Circle parent="tag" />
                            </section>
                            <div><button>EDIT</button></div>
                        </div>
                        <div className="btn-plane">
                            <button className="cancel">CANCEL</button>
                            <button className="save">SAVE</button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default autoBind(editProfile);
