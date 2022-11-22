import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import { useEffect, useState } from "react";
import { sendRequest, urlLookup } from "../../settings/settings";

export default function Home() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    const bodyChiglel = {
      action: "aimagsum",
    };
    sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  }, []);

  const DisplayData = 
  datas &&
  datas.data.map((gazar) => {
    return (
      <div key={gazar.chiglelname}>
        <h5>
          <button onClick={()=>console.log(gazar.chiglelname)}>456</button>
        </h5>
      </div>
    )
  })
  return (
    <>
    <p>{DisplayData}</p>
      <p>{datas && JSON.stringify(datas)}</p>
      <Topbar sumname={datas && datas.data[9].chiglelname} />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
