import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div>
                {this.props.friends}
            </div>    
        )
    }
}

const mapStateToProps = ({ friends, fetchingData }) => ({
    friends,
    fetchingData
});

export default withRouter(
    connect(
        mapStateToProps,
        { getData }
    )(FriendsList)
);