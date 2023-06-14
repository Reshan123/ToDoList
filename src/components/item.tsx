import React from "react";

interface Props{
    itemText: string;
}

function Item(Props:Props) {


    return(
        <>
            <li className="list-group-item">{Props.itemText}</li>
        </>
    )
}

export default Item;