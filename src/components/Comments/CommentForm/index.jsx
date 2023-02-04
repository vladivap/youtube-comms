import { useState } from 'react';
import './styles.css';

export default function CommentForm(props) {
	const [nameFromState, setName] = useState('');
	const [textFromState, setText] = useState('');

	const current = new Date();
	const date = `${current.getDate()}.${
		current.getMonth() + 1
	}.${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
	// TODO:
	// FIX:

	function createButtonClick(e) {
		const newComment = {
			name: nameFromState,
			text: textFromState,
			date: date
		};
		props.onButtonClick(newComment);
	}

	return (
		<div className='Form'>
			<input
				placeholder='Ваше имя'
				onChange={(e) => {
					setName(e.target.value);
				}}
				value={nameFromState}
			/>
			<textarea
				placeholder='Введите текст комментария'
				onChange={(e) => {
					setText(e.target.value);
				}}
				value={textFromState}
			/>
			<button className='form_BTN' onClick={createButtonClick}>Добавить комментарий</button>
		</div>
	);
}
