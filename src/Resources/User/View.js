import {
    Show,
    Tab,
    TabbedShowLayout,
    TextField
} from "react-admin";
import PersonIcon from '@material-ui/icons/Person';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import Fade from 'react-reveal/Fade'
import { Aside } from "./Components";
const View = (props) => {
    return (
<Fade>
        <Show aside={<Aside />} {...props} >
            <TabbedShowLayout >
                <Tab label='Personal Data' icon={<PersonIcon />}>
                    <TextField source='id' />
                    <TextField source='name' />
                    <TextField source='username' />
                </Tab>
                <Tab label='Contact Info' icon={<ContactMailIcon />}>
                    <TextField source='email' />
                    <TextField source='phone' />
                    <TextField source='website' />
                </Tab>
                <Tab label='Adress Info' icon={<LocationCityIcon />}>
                    <TextField source='address.street' label='Street' />
                    <TextField source='address.city' label='City' />
                    <TextField source='address.zipcode' label='City' />
                </Tab>
            </TabbedShowLayout>
        </Show>
        </Fade>
    );
}

export default View;
