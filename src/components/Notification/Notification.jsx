import { Component } from 'react';
import PropTypes from 'prop-types';

export class Notification extends Component {
    render () {
        return (
            <h4>{this.props.message}</h4>
        )
    }
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};