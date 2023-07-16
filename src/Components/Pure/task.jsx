import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task_class';

const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2> 
            <h3>
                Apellido: { task.last_name }
            </h3>
            <h4>
                Correo: { task.email }
            </h4>
            <h5>
                Estado: { task.level ? 'DESCONECTADO' : 'CONECTADO' }
            </h5>
            
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
};


export default TaskComponent;
