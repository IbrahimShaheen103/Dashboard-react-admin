
import { Edit, TextInput, SimpleForm,} from 'react-admin';


const Update = (props) => {
    return (
        <Edit {...props} title=' '>
            <SimpleForm 
            
             >
                <TextInput source='body' variant='standard'/>
            </SimpleForm>
        </Edit>
    );
}

export default Update;