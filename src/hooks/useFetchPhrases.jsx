import { useEffect, useState } from "react";
 

export const useFetchPhrases = ( author )=>{

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(()=>{

        async function FetchData() {

            setLoading(true);
            
            try {
                
                const response = await fetch(`https://pensador-api.vercel.app/?term=${author}&max=50`)

                const data = await response.json();
                
                setData(data);
                
            } catch (error) {
                setError(`Houve um erro: ${error.message}`)
            }

            
            setLoading(false);
        }
        
        FetchData();
    },[author])







    return { data, loading, error } ;
};



