import {
    ChipField, Datagrid,
    DeleteButton,EditButton,EmailField,
    List,ShowButton,TextField
} from 'react-admin'
import Fade from 'react-reveal/Fade'
import { AddressPanal,Filters,MyUrlField } from "./Components";
const UserList = (props) => {
    return (
        <Fade top>
        <List {...props} title='List Of Users' filters={<Filters/>}>
            <Datagrid expand={<AddressPanal />}>
                <TextField source='id' />
                <TextField source='name' />
                <ChipField source='username' />
                <EmailField source='email' />
                <TextField source='phone' />
                <MyUrlField source='website' />
                <ShowButton />
                <EditButton  />
                <DeleteButton undoable={false} label='' />
            </Datagrid>
        </List>
        </Fade>
    );
}

export default UserList;