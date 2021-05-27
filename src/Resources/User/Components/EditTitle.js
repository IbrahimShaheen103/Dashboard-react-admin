const EditTitle = ({ record }) => {
    return <span>
        User {record ? `"${record.name}"` : ''}
    </span>
}

export default EditTitle;