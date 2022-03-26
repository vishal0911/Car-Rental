import React, { useState, useEffect } from 'react';
import './Data.css';
import axios from 'axios';
import AndroidIcon from '@mui/icons-material/Android';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function Data() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
            .then(res => {
                console.log(res)
                setPosts(res.data.data.stations)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div className="block">
            {
                posts.map(post => (

                    <div className="container">

                        <img src="https://www.altfg.com/film/wp-content/uploads/images/2006/12/cars-pixar-lightning-mcqueen.jpg" alt="" />
                        <div className="name_id">
                            <p className="name">Name: <span>{post.name}</span></p>
                            <p className="id">Id: <span>{post.legacy_id}</span></p>
                        </div>
                        
                        <div className="capacity_price_stationtype">
                            <p className="capacity">Capacity: <span>{post.capacity}</span></p>
                            <p className="price">Price: <span>$ {post.short_name}</span></p>
                            <p className="station_type">Station Type: <span>{post.station_type}</span></p>
                        </div>

                        
                            <div className="rental_methods"><p>Rental Methods: <span>{post.rental_methods}</span></p></div>
                            <div className="rental_uris">
                                <p>Rent: </p>
                                <a className="android" href="https://bkn.lft.to/lastmile_qr_scan"><AndroidIcon/></a>
                                <a className="ios" href="https://bkn.lft.to/lastmile_qr_scan"><PhoneIphoneIcon/></a>
                            </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Data