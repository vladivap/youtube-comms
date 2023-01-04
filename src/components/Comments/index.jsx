import { useState } from "react"
import { CommentItem } from "./CommentItem"
import { initialComments } from "./mock"
import './styles.css';

export const Comments = () => {
	const [comments, setComments] = useState(initialComments)

	/* Где-то здесь надо добавлять комменты... */

	return <div className="comments-container">
		<h2>Комментарии к видео</h2>
		*Здесь надо отображать форму для комментариев*
		<div className="comments-list">
			{comments.map(comment => 
				<CommentItem key={`${comment.name}${comment.date}`} {...comment} />
			)}
		</div>
	</div>
}