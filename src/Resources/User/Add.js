
import {
    Create, email, FormTab, required, TabbedForm
} from 'react-admin'
import { CustomInput } from '../../components'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import StreetviewIcon from '@material-ui/icons/Streetview';
import BusinessIcon from '@material-ui/icons/Business';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import DescriptionIcon from '@material-ui/icons/Description';
import ExploreIcon from '@material-ui/icons/Explore';
import LightSpeed from 'react-reveal/LightSpeed'
const validateEmail = [email(), required()];
const Add = (props) => {
    return (
        <Create {...props}>
            <TabbedForm>
                <FormTab label='Personal Info' icon={<PersonAddIcon />}>
                    <LightSpeed>
                        <CustomInput source='name' Icon={AccountCircle} validate={required()} />
                        <CustomInput source='username' Icon={AssignmentIndIcon} />
                    </LightSpeed>
                </FormTab>
                <FormTab label='Contact Info' icon={<PermContactCalendarIcon />}>
                    <LightSpeed>
                        <CustomInput Icon={EmailIcon} source='email' validate={validateEmail} />
                        <CustomInput Icon={PhoneIcon} source='phone' />
                        <CustomInput Icon={LanguageIcon} source='website' />
                    </LightSpeed>
                </FormTab>
                <FormTab label='Address' icon={<AddLocationIcon />}>
                    <LightSpeed>
                        <CustomInput Icon={StreetviewIcon} source='address.street' label='Street' />
                        <CustomInput Icon={LocationCityIcon} source='address.city' label='City' />
                        <CustomInput Icon={ExploreIcon} source='address.zipcode' label='Zip-Code' />
                    </LightSpeed>
                </FormTab>
                <FormTab label='Company' icon={<BusinessIcon />}>
                    <LightSpeed>
                        <CustomInput Icon={ScatterPlotIcon} source='company.name' label="Company Name" />
                        <CustomInput Icon={DescriptionIcon} source='company.catchPhrase' label="Description" multiline />
                    </LightSpeed>
                </FormTab>
            </TabbedForm>
        </Create>
    );
}

export default Add;