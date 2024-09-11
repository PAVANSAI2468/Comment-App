import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    profileColor: initialContainerBackgroundClassNames[0],
  }

  toggleLike = id => {
    this.setState(prev => ({
      commentsList: prev.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prev => ({
      commentsList: prev.commentsList.filter(eachComment => {
        if (id !== eachComment.id) {
          return {...eachComment}
        }
        return ''
      }),
    }))
  }

  getName = e => {
    this.setState({name: e.target.value})
  }

  getComment = e => {
    this.setState({comment: e.target.value})
  }

  submitComments = e => {
    e.preventDefault()
    const {name, comment} = this.state
    const colorProfileClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const personComment = {
      id: uuidv4(),
      name,
      comment,
      colorProfileClassName,
      isLiked: false,
    }
    this.setState(prev => ({
      commentsList: [...prev.commentsList, personComment],
      name: '',
      comment: '',
    }))
    this.setState(prevState => ({
      profileColor:
        prevState.profileColor[
          Math.floor(Math.random() * prevState.profileColor.length)
        ],
    }))
  }

  render() {
    const {commentsList, profileColor} = this.state
    return (
      <div className="bg">
        <div className="top-container">
          <div>
            <h1>Comment</h1>
            <p>Say something about 4.O technologies</p>
            <form onSubmit={this.submitComments}>
              <input type="text" placeholder="name" onChange={this.getName} />
              <div>
                <textarea
                  rows="10"
                  cols="50"
                  placeholder="your comment"
                  onChange={this.getComment}
                />
              </div>
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div>
          <div className="no-of-comments-container">
            <p className="no-of-comments">{commentsList.length}</p>
            <p>Comments</p>
          </div>
          <ul>
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                profileColor={profileColor}
                commentDetails={eachComment}
                toggleLike={this.toggleLike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
