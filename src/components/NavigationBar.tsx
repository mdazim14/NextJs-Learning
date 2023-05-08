import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavigationBar = () => {

    return (
        <div style={{
            // border:"1px solid ", 
            display: "flex", 
            justifyContent: "space-between", 
            justifyItems: "center",
            fontSize:"20px",
            fontWeight: "bold",
            backgroundColor: "black"
            }}>
            <div style={{
                marginLeft: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                
                <Image src='/images/nav.jpg' style={{borderRadius: "100%"}} height={50} width={50} alt="nav image" />
            </div>

            <div style={{
                // border: "1px solid ",
                display:  "flex",
                justifyContent: "center",
                justifyItems: "center",
                margin: "20px 200px ",

            }} > 
             <Link style={{
                textDecoration: "none",
                marginLeft:"50px",
                color: "white",
            }} href="">Blunts</Link>
             <Link style={{
                textDecoration: "none",
                marginLeft:"50px",
                color: "white",
            }} href="">Rolling Paper</Link>
             <Link style={{
                textDecoration: "none",
                marginLeft:"50px",
                color: "white",
            }} href="">Flavoured </Link>
             <Link style={{
                textDecoration: "none",
                marginLeft:"50px",
                color: "white",
            }} href="">Bongs & Pipes</Link>
             <Link style={{
                textDecoration: "none",
                marginLeft:"50px",
                color: "white",
            }} href="">Vape</Link>
            </div>
        </div>
    );
};

export default NavigationBar;