import { Button } from '@material-ui/core';
import { Edit, TextInput, SimpleForm, required, SaveButton, Toolbar, translate, ReferenceInput, SelectInput } from 'react-admin';

const EditToolbar = translate(({ onCancel, translate, ...props }) => (
       <Toolbar {...props}>
           <SaveButton />
           <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
       </Toolbar>
));
const UpdateComments = ({onCancel,...props} ) => {
    return (
        <Edit {...props} title=' '>
            <SimpleForm 
            toolbar={<EditToolbar onCancel={onCancel}/>}
             >
                 <TextInput disabled source='id' />
                <ReferenceInput source='userId' reference='users' variant='standard' validate={required()}>
                    <SelectInput optionText='name' />
                </ReferenceInput>
                <TextInput source='title' variant='standard'/>
                <TextInput source='body' variant='standard'/>
            </SimpleForm>
        </Edit>
    );
}

export default UpdateComments;