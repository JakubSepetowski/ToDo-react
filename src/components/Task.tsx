import TaskItem from './TaskItem/TaskItem';

type Task = {
	id: number;
	description: string;
	isFinished: boolean;
};

type Props = {
	tasks: Task[];
	onDeleteTask: (arry: Task[]) => void;
};

const Task = (props: Props) => {
    
	const deleteHandler = (id: string) => {
		const newTasks = props.tasks.filter((task) => {
			return task.id != +id;
		});
		props.onDeleteTask(newTasks);
	};

	if (props.tasks.length === 0) {
		return <p className='err'>No tasks yet</p>;
	}

	return (
		<div>
			{props.tasks.map((task) => {
				return <TaskItem key={task.id} items={task} onDeleteClick={deleteHandler} />;
			})}
		</div>
	);
};

export default Task;
