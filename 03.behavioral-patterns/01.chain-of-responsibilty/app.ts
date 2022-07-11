import Client from './Client';
import NicknameHandlerChain from './NicknameHandlerChain';

const client = new Client(new NicknameHandlerChain());
client.getNickname(prompt('닉네임을 입력하세요.'));
