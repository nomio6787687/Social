import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import { useEffect, useState } from "react";
import { sendRequest, urlLookup } from "../../settings/settings";
import { Button, notification } from "antd";
import{ resp } from "../../getdata/dummy";
export default function Home() {
  return (
    <>
    {/* {JSON.stringify(ilgeesen.data)} */}
      <Topbar ilgeesen={resp} />
      
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
