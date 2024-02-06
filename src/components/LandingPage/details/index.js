import React from "react";
import { MdAppRegistration , MdSpatialTracking , MdLocationOn} from "react-icons/md";
import { AiFillDatabase} from "react-icons/ai";

export const detail = [
    {
      icon: <MdAppRegistration />, 
      title: "Registration",
      description:
        "Children identified to suffer from delayed milestones are registered and referred to the hospital for treatment.",
    },
    {
      icon: <MdSpatialTracking />, 
      title: "Tracking",
      description:
        "After treatment for two weeks, the children's progress to recovery is tracked to know if they are improving.",
    },
    {
      icon: <AiFillDatabase />,
      title: "Data",
      description:
        "Raw data is collected, analyzed, and displayed on a dashboard to give insights on the same, thus enabling NGOs to effectively allocate resources.",
    },
    {
      icon: <MdLocationOn/>, 
      title: "Geolocation",
      description:
        "Geographically tagging the affected areas and areas that are improving from receiving aid from the NGO.",
    },



  ];