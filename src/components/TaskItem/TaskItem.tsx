import { useState } from 'react';
import './TaskItem.css';

type Task = {
	id: number;
	description: string;
	isFinished: boolean;
};

type Props = {
	items: Task;
	onDeleteClick: (id: string) => void;
};

const TaskItem = (props: Props) => {
	const [isDone, setIsDone] = useState(false);
	const taskDoneHandler = () => {
		setIsDone((prev) => !prev);
	};
	const TaskDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		props.onDeleteClick((e.target as HTMLButtonElement).id);
	};
	let TextContent: JSX.Element;
	if (isDone) {
		TextContent = <p className='task__complete'>{props.items.description}</p>;
	} else {
		TextContent = <p className='task__incomplete'>{props.items.description}</p>;
	}

	return (
		<div className='task'>
			<div key={props.items.id} className='task__text'>
				{TextContent}
			</div>
			<div>
				<button onClick={taskDoneHandler} className='task__done'>
					Done
				</button>
				<button id={props.items.id.toString()} onClick={TaskDeleteHandler} className='task__delete'>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TaskItem;
