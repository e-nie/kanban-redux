import React from 'react';
import { connect } from 'react-redux';

const Task = (props) => {
    return (
        <div className = 'card'>

            <div className = 'card-body'>
                <h5 className = 'card-title'>{ props.task.name }</h5>
                <p className = 'card-text'>{ props.task.description }</p>
            </div>
            <ul className = 'list-group list-group-flush'>
                <li className = 'list-group-item'>
                    <button> &larr;</button>
                    { props.task.status }
                    <button> &rarr;</button>
                </li>
                <li className = 'list-group-item'>
                    <button onClick={()=> props.changePriorityUp(props.task.id)} disabled={props.priorities[props.priorities.length -1] === props.task.priority}>&uarr;</button>
                    { props.task.priority }
                    <button onClick={() => props.changePriorityDown(props.task.id)} disabled={props.priorities[0] === props.task.priority}> &darr;</button>
                </li>
                <li className = 'list-group-item'>A third item</li>
            </ul>
            <div className = 'card-body'>
                <button type = 'button' className = 'btn btn-primary'>Primary</button>
                <button type = 'button' className = 'btn btn-secondary'>Secondary</button>
                <button type = 'button' className = 'btn btn-success'>Success</button>
                <button type = 'button' className = 'btn btn-danger'>Danger</button>
            </div>
        </div>
    );
};

const mapStateToProps=(state) => ({
    priorities: state.priorities
})



const mapDispatchToProps = (dispatch) => ({
    changePriorityUp: (id) => dispatch({type: 'CHANGE_PRIORITY_UP', payload: id}),
    changePriorityDown: (id) => dispatch({type: 'CHANGE_PRIORITY_DOWN', payload: id})
});




export default connect(mapStateToProps, mapDispatchToProps)(Task);