import { ChangeEvent, useState } from 'react';
import './Form.css';

type Task = {
	id: number;
	description: string;
	isFinished: boolean;
};
type Props = {
	onAddTask: (task: Task) => void;
};

const Form = (props: Props) => {
	const [inputText, setInputText] = useState('');
	const submintEventHandler = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newTask: Task = {
			id: Math.random(),
			description: inputText,
			isFinished: false,
		};
		props.onAddTask(newTask);
		setInputText('');
	};
	const inputEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};
	return (
		<form onSubmit={submintEventHandler}>
			<div className='form'>
				<h1 className='form__title'>Manage your task easily</h1>
				<div className='form__input-box'>
					<input
						onChange={inputEventHandler}
						value={inputText}
						className='form__input'
						type='text'
					/>
					<button type='submit' className='form__btn'>
						Add task
					</button>
				</div>
			</div>
		</form>
	);
};

export default Form;
