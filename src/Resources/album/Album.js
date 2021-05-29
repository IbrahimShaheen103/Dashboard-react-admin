import { List } from 'react-admin'
import { AlbumComponent } from './Components'
import Zoom from 'react-reveal/Zoom'
const Album = (props) => {


    return (
        <List component='div' {...props} pagination={false} exporter={false}>
            <Zoom>
                <AlbumComponent />
            </Zoom>
        </List>
    );
}

export default Album;
