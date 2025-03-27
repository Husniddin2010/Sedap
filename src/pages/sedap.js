import React from "react";
import Sedap from "@/components/Sedap";
import Menu from "@/components/Menu";
import "@/styles/sedap.css";
import Users from "@/components/Users";
import Link from "next/link";
import Image from "next/image";

function sedap() {
  return (
    <>
      <div className="page">
        <Sedap />
        <Link href="http://localhost:3001/user">
          <Menu img="/home.png" name="Dashboard" />
        </Link>
        <Menu img="/chiziqlar.png" name="Order List" />
        <Menu img="/papka.png" name="Order Detail" />
        <Menu img="/user.png" name="Customer" />
        <Menu img="/analiz.png" name="Analytics" />
        <Menu img="/qalam.png" name="Reviews" />
        <Menu img="/coffe.png" name="Foods" />
        <Menu img="/note.png" name="Food Detail" />
        <Menu img="/user.png" name="Customer Detail" />
        <Menu img="/calendar.png" name="Calendar" />
        <Menu img="/chat.png" name="Chat" />
        <Menu img="/wallet.png" name="Wallet" />

        <Image src="/banner.png" alt="" />
        <h4 className="res">Sedap Restaurant Admin Dashboard</h4>
        <p className="ikki">© 2020 All Rights Reserved</p>
        <p className="made">Made with ❤️ by Peterdraw</p>
      </div>
      <div className="buts">
        <input className="search" type="text" placeholder="Search here" />
        <Image className="logo" src="/qongiroq.png" alt="" />
        <Image className="logo" src="/com.png" alt="" />
        <Image className="logo" src="/box.png" alt="" />
        <Image className="logo" src="/setting.png" alt="" />
        <h4 className="hello">Hello, Samantha</h4>
      </div>
      <div className="back">
        <h3 className="customer">Customer ID</h3>
        <Image className="" src="./sort.png" alt="" />

        <h3 className="customer">Join Date</h3>
        <Image className="" src="/sort.png" alt="" />

        <h3 className="customername">Customer Name</h3>
        <Image className="" src="/sort.png" alt="" />

        <h3 className="customer">Location</h3>
        <Image className="" src="/sort.png" alt="" />

        <h3 className="customername">Total Spent</h3>
        <Image className="" src="/sort.png" alt="" />
        <h3 className="customer">Last Order</h3>
        <Image className="" src="/sort.png" alt="" />
      </div>
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
    </>
  );
}

export default sedap;
