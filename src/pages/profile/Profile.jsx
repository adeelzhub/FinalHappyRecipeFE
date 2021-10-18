import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
        <Topbar/>
        <div className="profile">

           <div className="profileRight">
               <div className="profileRightTop">
                   <div className="profileCover">

                  
                   <img src={`${PF}post/3.jpeg`} alt="" className="profileCoverImg" />
                   <img src={`${PF}person/2.jpeg`} alt="" className="profileUserImg" />
               </div>
               <div className="profileInfo">
                   <h4 className="profileInfoName">Janell Shrum</h4>
                   <span className="profileInfoDesc">Hello everyone</span>
               </div>
               </div>
               <div className="profileRightBottom">
                 <Feed username = "adeel"/>
               </div>
           </div>
        </div>
    
    </>
  );
}
