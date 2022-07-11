import CommentDecorator from './CommentDecorator';

class ImageCommentDecorator extends CommentDecorator {
  addComment(comment: string) {
    super.addComment(this.unescapeImage(comment));
  }

  unescapeImage(comment: string) {
    return comment.replace(/&lt;(img\ssrc="[^\s]+")\s?\/?&gt;/g, '<$1 />');
  }
}

export default ImageCommentDecorator;
