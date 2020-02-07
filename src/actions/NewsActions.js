import {GET_NEWS,LOADING} from './Types';


// fetch news data from the api

export const getNews=(count,limit)=>dispatch=>{

    dispatch(setLoading());

    fetch(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`,{
        method:'GET'
    })
    .then(res=>res.json())
    .then( totalItems=>{
        
        
        const items=totalItems
        .filter((item,index)=>index>=count && index<(count+limit))
        .map(item=>{
           return fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
                .then(res=>res.json())
                .then(res=>{
                    return res;
            });
            
        })
        
                

                Promise.all(items)
                    .then(values=>{

                        
                        return dispatch({
                            type:GET_NEWS,
                            payload:{
                                data:values,
                                count,
                                totalItems:totalItems.length
                            }
                        })


                    });
                
        
    });


}

// sets loading

export const setLoading=()=>{

    return {
        type:LOADING
    }

}