import {useState, useEffect } from 'react';
import {GetGif} from '../helpers/GetGif';

export const UseFetchGifs = (category) => {

    const [state, setState] = useState({
        data : [],
        loading : true
    });

    useEffect(() => {
        GetGif(category)
            .then(gif => {
                setState({
                    data : gif,
                    loading : false
                })
            })
        
    }, [category]);

    return state
}