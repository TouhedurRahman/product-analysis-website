import { useEffect, useState } from 'react';

const UseData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "data.json";
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    return [data, setData];
};

export default UseData;