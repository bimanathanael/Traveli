import React, { useState, useEffect } from "react";
import { Hero } from "../components/profile/Hero";
import { AboutUs } from "../components/profile/AboutUs";
import { VisionMission } from "../components/profile/VisionMission";
import { Team } from "../components/profile/Team";

export const Profile = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`https://pacific-hamlet-79377.herokuapp.com/id/Profile`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setData(message);
      })
      .catch((err) => {});
  }, []);

  const filteringData = (section) => {
    let sortedList = {};
    for (let [key, value] of Object.entries(data)) {
      if (key === section) {
        sortedList = value;
      }
    }
    return sortedList;
  };
  return (
    <>
      {data.length !== 0 && (
        <div>
          <Hero dataHero={filteringData("Hero")} />
          <AboutUs
            dataAboutUsTop={filteringData("AboutUsTop")}
            dataAboutUsBottom={filteringData("AboutUsBottom")}
            dataAboutUsCaption={filteringData("AboutUsCaption")}
          />
          <VisionMission dataVisiMisi={filteringData("VisiMisi")} />
          <Team />
        </div>
      )}
    </>
  );
};
