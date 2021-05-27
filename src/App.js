import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {  Add, Update, UserList,View } from './Resources/User';
import UserIcon from '@material-ui/icons/Group'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
  <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} create={Add} edit={Update} show={View} icon={UserIcon}/>
  </Admin>
  );
}

export default App;
