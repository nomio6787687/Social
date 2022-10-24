import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {
    const [popular,setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await api.json();
        setPopular(data.recipes);
    };

    return(
    <div>
        {popular.map((recipe) => {
            return(
               <Wrapper>
                <h3>Popular Picks</h3>
                {popular.map((recipe) => {
                    return(

                    );
                })} 
               </Wrapper>
            );
        })}
    </div>
    );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default Popular;
  