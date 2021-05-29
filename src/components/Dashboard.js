import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {  Add, Update, UserList,View } from '../Resources/User';
import UserIcon from '@material-ui/icons/Group'
import PostIcon from '@material-ui/icons/LocalLibrary';
import {PostList} from '../Resources/Posts';
import {Album} from '../Resources/album'
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import CommentIcon from '@material-ui/icons/ChatBubble';
import { CommentList } from '../Resources/Comments';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const Dashboard = () => {
    return ( 
        <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} create={Add} edit={Update} show={View} icon={UserIcon}/>
      <Resource name='posts' list={PostList}  icon={PostIcon}/>
      <Resource name="comments" list={CommentList}  icon={CommentIcon}/>
      <Resource name='photos' list={Album}  icon={PhotoAlbumIcon}/>
  </Admin>
     );
}
 
export default Dashboard;