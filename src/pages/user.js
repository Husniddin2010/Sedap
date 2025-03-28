import React from 'react'
import "@/styles/sedap.css";
import Menu from '@/components/Menu';
import Link from 'next/link';
import Image from 'next/image';

function user() {
  return (
    <>
        <div className='page'>
        <h1 className='sedap'>Sedap.</h1>
        <p className='modern'>Modern Admin Dashboard</p>
    <Menu Image="./home.png" name="Dashboard"/>
    <Link href="http://localhost:3001/sedap"> <Menu img="./chiziqlar.png" name="Order List"/></Link>
    <Menu  Image="./papka.png" name="Order Detail"/>
    <Menu  Image="./user.png" name="Customer"/>
    <Menu  Image="./analiz.png" name="Analytics"/>
    <Menu  Image="./qalam.png" name="Reviews"/>
    <Menu  Image="./coffe.png" name="Foods"/>
    <Menu  Image="./note.png" name="Food Detail"/>
    <Menu  Image="./user.png" name="Customer Detail"/>
    <Menu  Image="./calendar.png" name="Calendar"/>
    <Menu  Image="./chat.png" name="Chat"/>
    <Menu  Image="./wallet.png" name="Wallet"/>
    
    <Image src="./banner.png" alt="" />
    <h4 className='res'>Sedap Restaurant Admin Dashboard</h4>
    <p className='ikki'>© 2020 All Rights Reserved</p>
    <p className='made'>Made with ❤️ by Peterdraw</p>
    </div>
    <div className='buts'>
    <input className='search' type="text" placeholder='Search here' />
    <Image className='logo' src="./qongiroq.png" alt="" />
    <Image className='logo' src="./com.png" alt="" />
    <Image className='logo' src="./box.png" alt="" />
    <Image className='logo' src="./setting.png" alt="" />
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