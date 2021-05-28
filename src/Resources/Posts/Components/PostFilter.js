import { Filter, ReferenceInput, SelectInput, TextInput } from "react-admin";

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn   />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty variant='outlined'>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);
export default PostFilter;