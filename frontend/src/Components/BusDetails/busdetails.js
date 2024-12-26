import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import Bus from '../Bus/bus';

const URL = "http://localhost:5000/Buses";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data.Buses);
};

function BusDetails() {
    const [buses, setBuses] = useState([]);
    useEffect(() => {
        fetchHandler().then((data) => setBuses(data));
    }, []);

    return (
        <div>
            <Nav />
            <h1>Bus Details Display Page</h1>
            <div>
                {buses && buses.map((bus, i) => (
                    <div key={i}>
                        <Bus bus={bus} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BusDetails;