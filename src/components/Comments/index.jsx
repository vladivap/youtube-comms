import { useState } from "react"
import { CommentItem } from "./CommentItem"
import CommentForm from "./CommentForm"
import { initialComments } from "./mock"

import './styles.css';


export const Comments = () => {
	const [comments, setComments] = useState(initialComments)

	function addNewComment(comment) {
		const newComments = [...comments, comment];
		setComments(newComments);
	}

	return <div className="comments-container">
		<h2>Комментарии к видео</h2>
		<CommentForm onButtonClick={addNewComment}/>
		
		<div className="comments-list">
			{comments.map(comment => 
				<CommentItem key={`${comment.name}${comment.date}`} {...comment} />
			)}
		</div>
	</div>
}