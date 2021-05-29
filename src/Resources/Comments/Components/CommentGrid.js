import { useListContext, TextField,  ReferenceField, EditButton, DeleteButton } from 'react-admin';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline',
    verticalAlign: 'bottom'
};


const CommentGrid = () => {
    const { ids, data, basePath } = useListContext();
    return (
        <div style={{ margin: '1em' }}>
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader
                    title={<TextField record={data[id]} source="name" />}
                    subheader={<TextField record={data[id]} source="email" />}
                    avatar={<Avatar icon={<PersonIcon />} />}
                />
                <CardContent>
                    <TextField record={data[id]} source="body" />
                </CardContent>
                <CardContent>
                    about&nbsp;
                    <ReferenceField label="Post" resource="comments" record={data[id]} source="postId" reference="posts" basePath={basePath}>
                        <TextField source="title" />
                    </ReferenceField>
                </CardContent>
                <CardActions style={{ justifyContent: 'flex-end'}}>
                <EditButton resource="posts" basePath={basePath} record={data[id]} />
                <DeleteButton  resource="comments"  record={data[id]}/>
                </CardActions>
            </Card>
        )}
        </div>
    );
};
export default CommentGrid;