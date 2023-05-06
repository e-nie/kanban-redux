import React from 'react';
import { connect } from 'react-redux';

import Task from './Task';

const Column = (props) => {
    return (
        <div className = 'col'>
            <h3>{ props.status }</h3>
            { props.tasks.filter(el => el.status === props.status)
                .map(el => <Task key = { el.id } task = { el } />)
            }
        </div>
    );
};


const mapStateToProps = (state) => ({
    tasks: state.tasks,
});
export default connect(mapStateToProps)(Column);