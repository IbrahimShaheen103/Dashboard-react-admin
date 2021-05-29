import { List } from 'react-admin';
import { CommentGrid } from './Components';
import Jump from 'react-reveal/Jump'
import { Dialog } from '@material-ui/core';
import { Route } from 'react-router';
import { connect } from "react-redux";
import { push } from "react-router-redux"
import Update from './Update'
const CommentList = (props) => {
    const handleClose = () => {
        props.push('/comments')
    }
    return (
        <>
            <List title="All comments" {...props} exporter={false}>
                <Jump>
                    <CommentGrid />
                </Jump>
            </List>
            <Route path="/comments/:id">
                {({ match }) => {
                    const isMatch = match && match.params && match.params.id !== "create";

                    return (
                        <Dialog open={isMatch} onClose={handleClose}>
                            {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                            {isMatch ? (
                                <Update
                                    id={match.params.id}
                                    onCancel={handleClose}
                                    {...props}
                                />
                            ) : null}
                        </Dialog>
                    );
                }}
            </Route>
        </>
    );
}
export default connect(undefined, { push })(CommentList);