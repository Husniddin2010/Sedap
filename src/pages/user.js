import React from 'react'
import "@/styles/sedap.css";
import Menu from '@/components/Menu';
import Link from 'next/link';


function user() {
  return (
    <>
        <div className='page'>
        <h1 className='sedap'>Sedap.</h1>
        <p className='modern'>Modern Admin Dashboard</p>
    <Menu img="./home.png" name="Dashboard"/>
    <Link href="http://localhost:3001/sedap"> <Menu img="./chiziqlar.png" name="Order List"/></Link>
    <Menu  img="./papka.png" name="Order Detail"/>
    <Menu  img="./user.png" name="Customer"/>
    <Menu  img="./analiz.png" name="Analytics"/>
    <Menu  img="./qalam.png" name="Reviews"/>
    <Menu  img="./coffe.png" name="Foods"/>
    <Menu  img="./note.png" name="Food Detail"/>
    <Menu  img="./user.png" name="Customer Detail"/>
    <Menu  img="./calendar.png" name="Calendar"/>
    <Menu  img="./chat.png" name="Chat"/>
    <Menu  img="./wallet.png" name="Wallet"/>
    
    <img src="./banner.png" alt="" />
    <h4 className='res'>Sedap Restaurant Admin Dashboard</h4>
    <p className='ikki'>© 2020 All Rights Reserved</p>
    <p className='made'>Made with ❤️ by Peterdraw</p>
    </div>
    <div className='buts'>
    <input className='search' type="text" placeholder='Search here' />
    <img className='logo' src="./qongiroq.png" alt="" />
    <img className='logo' src="./com.png" alt="" />
    <img className='logo' src="./box.png" alt="" />
    <img className='logo' src="./setting.png" alt="" />
    <h4 className='hello'>Hello, Samantha</h4>
    
</div>
<div>
 <h1 className='mar'>
       27/3/2025 
   Norimqulov.Husniddin</h1>
 
</div>
    </>
  )
}

export default user