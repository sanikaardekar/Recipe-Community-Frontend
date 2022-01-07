import React from 'react';
import MostLiked from '../../components/MostLiked/MostLiked';
import Cuisine from '../../components/CuisineList/Cuisine'
import RecentlyAdded from '../../components/RecentlyAdded/RecentlyAdded';
export default function Home()
{
    return(
        <>
        <MostLiked/>
        <Cuisine/>
        <RecentlyAdded/>
        </>
    )
}