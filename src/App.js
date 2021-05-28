import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {  Add, Update, UserList,View } from './Resources/User';
import UserIcon from '@material-ui/icons/Group'
import PostIcon from '@material-ui/icons/LocalLibrary';
import post from './Resources/Posts';
import comment from './Resources/Comments'
import CommentIcon from '@material-ui/icons/ChatBubble';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
  <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} create={Add} edit={Update} show={View} icon={UserIcon}/>
      <Resource name='posts' {...post}  icon={PostIcon}/>
      <Resource name='comments' {...comment}  icon={CommentIcon}/>
  </Admin>
  );
}

export default App;
