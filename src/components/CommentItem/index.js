// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLike, deleteComment, profileColor} = props
  const {id, name, comment, isLiked} = commentDetails

  const profileColoring = profileColor

  const onclickLikeButton = () => {
    toggleLike(id)
  }

  const onclickDeleteBtn = () => {
    deleteComment(id)
  }

  const isLinkedImgDisplay = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li>
      <div className="comment-profile-container">
        <div className="profile">
          <p className={`${profileColoring}`}>{name[0]}</p>
        </div>
        <div className="comment">
          <p>{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <img src={isLinkedImgDisplay} alt="like" onClick={onclickLikeButton} />
        <img
          onClick={onclickDeleteBtn}
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
