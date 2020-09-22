import React, {useEffect, useReducer, useCallback} from 'react';
import axios from 'axios';
import HomeReducer from './HomeReducer';
import NavHome from '../nav/NavHome';
import MyHome from './myHome';

const HomeList = React.memo(function HomeList() {
    const initialState = {
        homes : [],
        homeId : 0
    }

    const [homesState, homesDispatch] = useReducer(
		HomeReducer,
		initialState
    );

    const allHomes = homesState.homes;

    const getAllHomes = useCallback(
        () => {
            axios
            .get(`api/v1/homes`)
            .then(res => 
                homesDispatch({
                    type: 'GET_HOMES',
                    payload: res.data.homes
                })
            )
            .catch(err => console.log(err))
    });

    useEffect(() => {
        getAllHomes();
    }, [])

    console.log('allHomes', allHomes)

    return (
        <div>
            <p>HomeList</p>
            {allHomes.map((home) =>
                <li key={home.id}>{home.name}</li>
            )}

            <NavHome allHomes={allHomes} homeId={homesState.homeId} homesDispatch={homesDispatch} />
            <MyHome allHomes={allHomes} homeId={homesState.homeId} />

        </div>
    )
});

export default HomeList;
