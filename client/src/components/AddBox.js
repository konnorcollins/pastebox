// components/AddBox.js
// /Add or /Create route

import React, { Component } from 'react';
import BoxService from './BoxService';

/* Main form for creating a new pastebox */
export default class AddBox extends Component 
{
    constructor(props)
    {
        super(props);

        // state
        this.state = {
            title: '',
            text: ''
        };

        // services
        this.boxService = new BoxService();

        // function binds
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleTitleChange(event)
    {
        event.preventDefault();
        this.setState({
            title: event.target.value
        })
    }

    handleTextChange(event)
    {
        event.preventDefault();
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit(event)
    {
        event.preventDefault();
        let history = this.props.history;
        this.boxService.add(
            this.state.title, 
            this.state.text, 
            data => 
            {
                history.push(`/view/${data._id}`);
            }
        );
            /* keep an eye on this, might need to store a ref to 'this' rather than this.history */
    }

    handleCancel(event)
    {
        event.preventDefault();
        this.props.history.push('/'); // maybe make a home page or something
    }

    render()
    {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Create New PasteBox
                        </div>
                        <div className="panel-body">
                            <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" className="form-control"/>
                            <textarea type="text" name="text" value={this.state.text} onChange={this.handleTextChange} placeholder="Paste text here..." rows="4" className="form-control"/>
                        </div>
                        <div className="panel-footer">
                            <button type="submit" className="btn btn-primary">Create</button>
                            <button type="button" onClick={this.handleCancel} className="btn btn-default">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}