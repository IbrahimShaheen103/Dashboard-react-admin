import { useEffect, useState } from "react";
import Loading from './Loading'
import Dashboard from './Dashboard'

const Container = () => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
      setLoad(true);
      setTimeout(() => { setLoad(false) }, 3000)
    }, [])
    return (
        <>
            {
                load ? <Loading loading={load} /> : <Dashboard />
            }
        </>
    );
}

export default Container;