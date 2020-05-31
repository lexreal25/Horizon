// JavaScript source code
import React, { Component } from 'react';
import office1 from './image/office1.jpg';
import office2 from './image/office2.jpg';
import office3 from './image/office3.jpg';
import office4 from './image/office4.jpg';
import 'bootstrap';


class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardTitle : '',
            cardImage: '',
            cardBody: '',
            button:''
        }
    }


    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="body">
                            <image className="card-img" src={office1.jpg} />
                            <div className="card-title">
                                <h3>VIRTUAL OFFICE</h3>
                            </div>
                            <div className="card-text">
                                <p>This is some text to be inserted here describing our package</p>
                            </div>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Cards;