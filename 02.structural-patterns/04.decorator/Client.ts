import CommentService from './CommentService';

class Client {
  commentService: CommentService;
  constructor(commentService: CommentService) {
    this.commentService = commentService;
  }
  writeComment(comment: string) {
    this.commentService.addComment(comment);
  }
}

export default Client;
