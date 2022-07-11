import Client from './Client';
import CommentService from './CommentService';
import LinkCommentDecorator from './LinkCommentDecorator';
import ImageCommentDecorator from './ImageCommentDecorator';
import FilterCommentDecorator from './FilterCommentDecorator';

// 조건적으로 기능을 추가할 수 있다.
const useLink = true;

const useImagTag = true;

const useFiltering = true;

let commentService = new CommentService();

if (useLink) {
  commentService = new LinkCommentDecorator(commentService);
}

if (useImagTag) {
  commentService = new ImageCommentDecorator(commentService);
}

if (useFiltering) {
  commentService = new FilterCommentDecorator(commentService);
}

const client = new Client(commentService);
client.writeComment(prompt('댓글을 입력해주세요') ?? '');
