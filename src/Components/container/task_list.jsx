import React from 'react';
import { Task } from '../../models/task_class';
import { LEVELS } from '../../models/levels_enum';
import TaskComponent from '../Pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Camilo', 'Martinez', 'canmargu@protonmail.com', LEVELS.DESCONECTADO);

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de la tarea')
    }

    return (
        <div>
            <div>
                <h1>
                Your Task:
                </h1>
            </div>
            {/* TODO Aplicar un For/Map para renderizar una lista*/}
            <TaskComponent task = { defaultTask }></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
