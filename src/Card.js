// JavaScript source code
import React, { Component } from 'react';
import './App.css';
import office1 from './image/office1.jpg';
import office2 from './image/office2.jpg';
import office3 from './image/office3.jpg';
import office4 from './image/office4.jpg';

class CardHeader extends React.Component {
    render() {
        const { image } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} id={image} className="card-header">
            </header>
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            <button className="button button-primary">
                <i className="fa fa-chevron-right"></i> Find out more
            </button>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">
                <p className="date">May 31 2020</p>

                <h2>{this.props.title}</h2>

                <p className="body-content">{this.props.text}</p>

                <Button />
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        return (
            <div className="card-display">
                <article className="card">
                    <CardHeader image={office1} alt="card image"/>
                    <CardBody title={'VIRTUAL OFFICE'} text={'Kayaks crowd maintain controversial coexistence'} />
                </article>

                <article className="card">
                    <CardHeader image={office2} alt="card image" />
                    <CardBody title={'CUSTOMIZED OFFICE'} text={'Kayaks crowd maintain controversial coexistence'} />
                </article>

                <article className="card">
                    <CardHeader image={office3} alt="card image" />
                    <CardBody title={'SERVICED OFFICE'} text={'Kayaks crowd maintain controversial coexistence'} />
                </article>

                <article className="card" alt="card image">
                    <CardHeader image={office4} />
                    <CardBody title={'MEETING ROOM'} text={'Kayaks crowd maintain controversial coexistence'} />
                </article>
            </div>
        )
    }
}

export default Card;
