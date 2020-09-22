import React from 'react';

export default function NavHome({allHomes, homeId, homesDispatch }) {

    console.log('NavHome', homeId)

    const handleHomeId = id => {
        homesDispatch({
            type: 'HOME_ID',
            payload: parseInt(id)
        })
    }

    return (
        <>
            <p>NavHome</p>
            <select
                name="homes"
                defaultValue={homeId}
                onChange={(e) => handleHomeId(e.target.value)}
            >
                {allHomes.map(home => (
                    <option key={home.id} value={home.id} >
                        {home.name}
                    </option>
                ))}
            </select>

        </>

    )
}
