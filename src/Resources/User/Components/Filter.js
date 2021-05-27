import { Filter, TextInput } from "react-admin";


const Filters = (props) => {
    return (
     <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn resettable />
          
                <TextInput label="Name" source="name" resettable variant='outlined' />
            
                <TextInput label="Email" source="email" resettable variant='outlined' />
        
        </Filter>
    );
}

export default Filters;