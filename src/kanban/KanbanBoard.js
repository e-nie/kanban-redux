import React from 'react';
import { connect } from 'react-redux';
import Column from './Column';

const KanbanBoard = ({ appName, statuses }) => {
    return (
        <div>
            <h1>{ appName }</h1>
            <button>Create New Task</button>
            <div className = 'container text-center'>
                <div className = 'row align-items-start'>
                    {statuses.map((el, i) => <Column key={i} status={el}/>)}
                </div>
            </div>



        </div>
    );
};

const mapStateToProps = (state) => ({
    appName: state.appName,
    statuses: state.statuses,
});

export default connect(mapStateToProps)(KanbanBoard);