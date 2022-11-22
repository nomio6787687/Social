import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import { useEffect, useState } from "react";
import { sendRequest, urlLookup } from "../../settings/settings";
import { Button, notification } from "antd";

export default function Home() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    const bodyChiglel = {
      action: "chiglel",
    };
    sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  }, []);
  const openNotification = (title, desc) => {
    notification.open({
      message: title,
      description: desc,
      onClick: () => {
        console.log(desc + " Clicked!");
      },
    });
  };
  const DisplayData =
    datas &&
    datas.data.map((gazar) => {
      return (
        <div key={gazar.chiglelnum}>
          <Button
            type="primary"
            onClick={() =>
              openNotification(gazar.chigleldaraalal, gazar.chiglelname)
            }
          >
            {gazar.chiglelname}
          </Button>
          <br />
          <br />
        </div>
      );
    });
  return (
    <>
      {DisplayData}

      <p>{datas && JSON.stringify(datas)}</p>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
