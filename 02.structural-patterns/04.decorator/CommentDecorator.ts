import CommentService from './CommentService';

class CommentDecorator extends CommentService {
  private commentService: CommentService;

  constructor(commentService: CommentService) {
    super();
    this.commentService = commentService;
  }

  addComment(comment: string) {
    this.commentService.addComment(comment);
  }
}

export default CommentDecorator;
