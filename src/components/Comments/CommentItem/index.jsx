import './styles.css'

export const CommentItem = ({ name, date, text }) => {
	return <div className="comment-item">
		<div className="comment-header">
			<b>{name}</b>
			<span className="comment-date">{date}</span>
		</div>
		{text}
	</div>
}