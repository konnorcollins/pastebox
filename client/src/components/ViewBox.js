import React, { Component } from 'react';
import BoxService from './BoxService';


export default class ViewBox extends Component
{

    constructor(props)
    {
        super(props);

        // state
        this.state = {
            title: '',
            text: ''
        }

        this.boxService = new BoxService();
    }

    componentDidMount()
    {
        this.boxService.get(this.props.match.params.id, (data) => {
            this.setState({
                title: data.title,
                text: data.text
            });
        });
    }

    render()
    {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.state.title}
                    </div>
                    <div className="panel-body">
                        {this.state.text}
                    </div>
                </div>
            </div>
        );
    }
}