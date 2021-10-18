import "./topbar.css";
import { Search, Person, Chat, Notifications }from "@material-ui/icons";

import { Link } from "react-router-dom";
console.log("hello")

export default function () {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to ="/" style= {{textDecoration:"none"}}>
                <span className="logo">
                    <img src="/assets/peaoneTranparent.PNG" alt="" className="p1" />
                    <img src="/assets/peatwoTransparent.PNG" alt="" className="p2" />
                </span>
                </Link>
            </div>
            <div className="topbarCenter">happea recipea
                {/* <img src="/assets/hrLogo.png" alt="" /> */}
                </div>
            {/* <div className="topbarCenter">
                <img src="/assets/hrLogo.png" alt="" />
            </div> */}
            <div className="topbarRight">
               
                </div>
                <img src="/assets/person/2.jpeg" alt="" className="topbarImg"/>
            </div>
    );
}
