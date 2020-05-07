import {useEffect} from 'react';
// import { HookCallbacks } from 'async_hooks';


const useFetch = (url: string) =>
{
    
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(y => {
                console.log(y);
            });
        });

    },[url]);
    // return [values, ...values+[]];
}

export default useFetch;