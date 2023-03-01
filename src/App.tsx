import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Task from './components/Task';

const tasks: Task[] = [];

function App() {
	const [newTasks, setNewTasks] = useState(tasks);

	const deleteHandler = (tasks: Task[]) => {
		setNewTasks(tasks);
	};

	const taskAddHanlder = (task: Task) => {
		setNewTasks((prevTasks) => {
			return [task, ...prevTasks];
		});
	};

	return (
		<div>
			<Form onAddTask={taskAddHanlder} />
			<Task tasks={newTasks} onDeleteTask={deleteHandler} />
		</div>
	);
}

export default App;
