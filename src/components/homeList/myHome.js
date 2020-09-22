import React, { useState, useEffect } from 'react';

export default function MyHome({allHomes, homeId}) {

    const [ myHome, setMyHome ] = useState({});

    useEffect(() => {
        if(homeId && allHomes) {
            const selection = allHomes.find((home) => parseInt(homeId) === parseInt(home.id))
            setMyHome(selection)
        }
    }, [allHomes, homeId])

    console.log('myHome', myHome)

    return (
        <div>
            <p>homeSelected</p>
            {myHome.name}
        </div>
    )
}
