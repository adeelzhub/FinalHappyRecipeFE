import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css";

export default function Home({user, refresh, setRefresh}) {
  return (
    <>
      <Topbar  className="topbar"/>
      <div className="backg">
        <div className="homeContainer">
          <Feed 
           refresh={refresh}
           setRefresh={setRefresh}
           user={user}/>
        </div>
      </div>
    </>
  );
}
