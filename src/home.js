import react from 'react';
import Itemlist from './itemlist';

export default function Myhome(){
    return(
        <section>
            <h1 align="center"> Welcomr Home</h1>
            {/* kkkkk */}
            <Itemlist
                  itemname = "mobile"
                  price = "40"
                  quantity = "6"
                  supplier = "nokia"
                />
                
                <Itemlist
                  itemname = "laptop"
                  price = "40000"
                  quantity = "3"
                  supplier = "dell"
                />
        </section>
    );
}