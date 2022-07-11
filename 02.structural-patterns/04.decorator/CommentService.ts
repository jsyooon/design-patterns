class CommentService {
  addComment(comment: string) {
    document.body.insertAdjacentHTML('beforeend', `<div>${comment}</div>`);
  }
}

export default CommentService;
