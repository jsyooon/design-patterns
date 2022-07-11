import CommentDecorator from './CommentDecorator';

class FilterCommentDecorator extends CommentDecorator {
  addComment(comment: string) {
    super.addComment(this.filterWord(comment));
  }

  filterWord(comment: string) {
    return comment.replace(/(병신|비융신|ㅂㅅ|피융신|븅신|뵹신|퓽신|뿅신)/g, '**');
  }
}

export default FilterCommentDecorator;
