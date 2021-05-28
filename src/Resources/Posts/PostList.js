import {
    CardActions,
    CloneButton,
    CreateButton,
    Datagrid,
    DeleteButton,
    EditButton,
    List,
    ReferenceField,
    ShowButton,
    TextField,
} from "react-admin"
import { Route, Switch } from 'react-router';
import { connect } from "react-redux";
import { push } from "react-router-redux"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Add from './Add'
import Update from './Update'
import { PostFilter } from "./Components";
import { Dialog, Drawer } from '@material-ui/core';
import View from "./View";


const ListActions = ({ basePath }) => (
    <CardActions>
        <CreateButton basePath={basePath} />
    </CardActions>
);

const PostList = (props) => {
    const handleClose = () => {
        props.push('/posts')
    }
    return (
        <>
            <Fade top>
                <List {...props} filters={<PostFilter />} actions={<ListActions />} >
                    <Datagrid  >
                        <TextField source='id' />
                        <ReferenceField label='User' source='userId' reference='users'>
                            <TextField source='name' />
                        </ReferenceField>
                        <TextField source='title' />
                        <ShowButton />
                        <CloneButton />
                        <EditButton />
                        <DeleteButton undoable={false} label='' />
                    </Datagrid>
                </List>
            </Fade>
            <Switch>
                <Slide right>
                    <Route path="/posts/create">
                        {({ match }) => (
                            <Drawer open={!!match} anchor="right" onClose={handleClose}>
                                <Add onCancel={handleClose} {...props} />
                            </Drawer>
                        )}
                    </Route>
                    <Route path="/posts/:id" exact>
                        {({ match }) => {
                            const isMatch = match && match.params && match.params.id !== "create";

                            return (
                                <Drawer open={isMatch} anchor="right" onClose={handleClose}>
                                    {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                                    {isMatch ? (
                                        <Update
                                            id={match.params.id}
                                            onCancel={handleClose}
                                            {...props}
                                        />
                                    ) : null}
                                </Drawer>
                            );
                        }}
                    </Route>
                    <Route path="/posts/:id/show" >
                        {({ match }) => {
                            const isMatch = match && match.params && match.params.id !== "create";

                            return (
                                <Dialog open={isMatch} onClose={handleClose}>
                                    {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                                    {isMatch ? (
                                        <View
                                            id={match.params.id}
                                            onCancel={handleClose}
                                            {...props}
                                        />
                                    ) : null}
                                </Dialog>
                            );
                        }}
                    </Route>
                </Slide>
            </Switch>
        </>
    );
}

export default connect(undefined, { push })(PostList);
