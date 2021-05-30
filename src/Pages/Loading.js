import CircleLoader from "react-spinners/CircleLoader";
const Loading = ({ loading }) => {
    return (
        <div className='container'>
            <CircleLoader color={'#00A6FD'} loading={loading} size={150} />
        </div>
    );
}

export default Loading;