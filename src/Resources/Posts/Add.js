import { Button } from '@material-ui/core';
import { Create, TextInput, SimpleForm, required, SaveButton, Toolbar, translate, ReferenceInput, SelectInput } from 'react-admin';

const CreateToolbar = translate(({ onCancel, translate, ...props }) => (
       <Toolbar {...props}>
           <SaveButton />
           <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
       </Toolbar>
));
const Add = ({onCancel,...props} ) => {
    return (
        <Create {...props} title=' '>
            <SimpleForm 
            toolbar={<CreateToolbar onCancel={onCancel}/>}
             >
                <ReferenceInput source='userId' reference='users' variant='standard' validate={required()}>
                    <SelectInput optionText='name' />
                </ReferenceInput>
                <TextInput source='title' variant='standard'/>
                <TextInput source='body' variant='standard'/>
            </SimpleForm>
        </Create>
    );
}

export default Add;