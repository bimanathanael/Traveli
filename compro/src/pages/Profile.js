import React, { useState, useEffect } from "react";
import { Hero } from "../components/profile/Hero";
import { AboutUs } from "../components/profile/AboutUs";
import { VisionMission } from "../components/profile/VisionMission";
import { Team } from "../components/profile/Team";

export const Profile = ({ url, mainUrl }) => {
  const [dataProfile, setDataProfile] = useState();
  const [profileList, setProfileList] = useState("");

  useEffect(() => {
    fetch(url + `/Profile`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setDataProfile(message);
      })
      .catch((err) => {});
  }, [url]);
  
  useEffect(() => {
    fetch(mainUrl + `/Profile`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then(({ message }) => {
        setProfileList(message);
      })
      .catch((err) => {});
  }, [mainUrl]);

  const filteringData = (section) => {
    let sortedList = {};
    for (let [key, value] of Object.entries(dataProfile)) {
      if (key === section) {
        sortedList = value;
      }
    }
    return sortedList;
  };
  return (
    <>
      {dataProfile && profileList && (
        <div>
          <Hero dataHero={filteringData("Hero")} />
          <AboutUs
            dataAboutUsTop={filteringData("AboutUsTop")}
            dataAboutUsBottom={filteringData("AboutUsBottom")}
            dataAboutUsCaption={filteringData("AboutUsCaption")}
          />
          <VisionMission dataVisi={dataProfile.Visi} dataMisi={dataProfile.Misi} />
          <Team profileList={profileList}/>
        </div>
      )}
    </>
  );
};
