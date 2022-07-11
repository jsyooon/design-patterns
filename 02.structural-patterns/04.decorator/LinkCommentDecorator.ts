import CommentDecorator from './CommentDecorator';

class LinkCommentDecorator extends CommentDecorator {
  addComment(comment: string) {
    super.addComment(this.replaceLink(comment));
  }

  replaceLink(comment: string) {
    return comment.replace(/(https?:\/\/([^\s]+))/g, '<a href="$1">$1</a>');
  }
}

export default LinkCommentDecorator;
