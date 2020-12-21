import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

const ConnectedList = ({ posts }) => (
    { posts }
);

const List = connect(mapStateToProps)(ConnectedList);
export default List;