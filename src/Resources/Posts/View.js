import { Button } from "@material-ui/core";
import { Show, SimpleShowLayout, TextField, Toolbar, translate } from "react-admin";
const EditToolbar = translate(({ onCancel, translate, ...props }) => (
    <Toolbar {...props}>

        <Button onClick={onCancel}>{translate('ra.action.cancel')}</Button>
    </Toolbar>
));
const View = ({onCancel,...props}) => {
    return (
        <Show {...props} title=' '>
            <SimpleShowLayout toolbar={<EditToolbar onCancel={onCancel} />}>
                <TextField source='body' multiline />
            </SimpleShowLayout>
        </Show>
    );
}

export default View;