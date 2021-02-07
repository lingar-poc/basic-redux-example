import React, {useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {setProducts, selectProducts} from "./products-slice";

/**
 * Simple general component for showing products list
 */
export class ProductsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let view = this.props.data.map((item, idx) => {
            return (<div key={idx}><span>{item.name}</span> <span>{item.price}</span></div>);
        });

        return (<div className="products-list">
            <h1>Products list</h1>
            {view}
        </div>);
    }
}

export function ProductsDisplayRedux(props) {
    useEffect(() => {
            console.log("Starting run products prices ");
            startTimer();
        }, []//will happen only once
    );


    //inner functions
    function dataToArray() {
        data = [];
        for (const [key, value] of Object.entries(productsState)) {
            console.log(`${key}: ${value}`);
            data.push({name: key, price: value});
        }

    }

    function startTimer() {
        console.log("only once?")
        interval = setInterval(() => {
                //instead of doing like in regular component:
                // this.setState({
                //     book: this.getRandomInt(100),
                //     bread: this.getRandomInt(100),
                //     shoes: this.getRandomInt(100),
                //     candle: this.getRandomInt(100)
                // });

                //we doing that:
                dispatch(setProducts(
                    {
                        book: getRandomInt(100),
                        bread: getRandomInt(100),
                        shoes: getRandomInt(100),
                        candle: getRandomInt(100)
                    }
                ));
                dataToArray();
            }
            , seconds * 3000);
    }

    //for generate random value below 100
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //fields and logic:
    //This is like the trigger of the store reducer
    const dispatch = useDispatch();
    //getting the state from the store
    const productsState = useSelector(selectProducts);
    let data = [];
    let interval = null;
    const seconds = 3;

    //invocations
    dataToArray();
    console.log("data = ", data);
    console.table(data);
    return (
        <div>
            <ProductsList data={data}/>
            <MostExpensiveRedux/>
        </div>
    )
}

/**
 * View for seeing the current most expensive product

 */
function MostExpensiveRedux() {
    const productsState = useSelector(selectProducts);
    let data = [];
    dataToArray();
    console.log("data = ", data);

    function dataToArray() {
        data = [];
        for (const [key, value] of Object.entries(productsState)) {
            console.log(`${key}: ${value}`);
            data.push({name: key, price: value});
        }
    }

    function max() {
        let expensiveItem = {item: "", price: 0};
        for (let i of data) {
            console.log("i = ", i);
            if (i.price > expensiveItem.price) {
                expensiveItem = i;
            }
        }
        return expensiveItem;
    }

    return (<div className="most-expensive">
            <h4>Expensive: {max().name} <br/>
                {max().price}</h4>

        </div>
    )

}