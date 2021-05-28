
import { List } from "react-admin";
import { ListComponent } from "./Components";


const CommentList = (props) => {
    return (
          <List {...props} component='div' perPage={30} pagination={false}  >
                <ListComponent />
            </List>       
    );
}

export default CommentList;