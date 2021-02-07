import React from 'react';
import {ProductsDisplayRedux} from "./products-feature";

export function ReduxMainView() {

    return (
        <div className="explain">
            <h1>Redux example</h1>
            <a href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow"
               target="_blank">
                Done by the basics from here</a>
            <p>You will see here a simple example of how two components, that using and updating the same data from two
                separated places.</p>
            <p>You have the products list that show different prices each 3 seconds, and the "most expensive" that show
                the current most expensive product2. </p>
            <p className="little-comment"> pay attention that if you are doing changes, and you don't reload the page
                the timer
                will start to make over-looping so you need to do a full refresh.</p>
            <ProductsDisplayRedux/>
        </div>
    )

}