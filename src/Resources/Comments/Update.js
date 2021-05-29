import { Button } from '@material-ui/core';
import { Edit, TextInput, SimpleForm, SaveButton, Toolbar, translate } from 'react-admin';

const EditToolbar = translate(({ onCancel, translate, ...props }) => (
    <Toolbar {...props}>
        <SaveButton />
        <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
    </Toolbar>
));
const UpdateComments = ({ onCancel, ...props }) => {
    return (
        <Edit {...props} title=' '>
            <SimpleForm
                toolbar={<EditToolbar onCancel={onCancel} />}
            >
                <TextInput source='body' multiline />
            </SimpleForm>
        </Edit>
    );
}
export default UpdateComments;