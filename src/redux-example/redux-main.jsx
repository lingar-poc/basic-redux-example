import React from 'react';

export function ReduxMainView(){

    return(
        <div className="explain">
            <h1>Redux example</h1>
            <a href= "https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow" target= "_blank">
            Done by the basics from here</a>
            <p>You will see here a simple example of how two components, that using and updating the same data from two separated places.</p>
            <p>You have the products list that show different prices each 3 seconds, and the "most expensive" that show
            the current most expensive product. </p>
        </div>
    )

}