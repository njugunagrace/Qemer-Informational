import React from 'react';
import grace from '../../assets/images/grace2.png';
import lucky from '../../assets/images/Lucky.png';
import pauline from '../../assets/images/goko.jpeg';
import rediet from '../../assets/images/Hadera.jpeg';
import angela from '../../assets/images/Angela.jpeg';

import './style.css';

const team = [
  {
    image: grace,
    name: "Grace Njuguna",
    role: "Software Developer",
  },
  {
    image: rediet,
    name: "Rediet Hadera",
    role: "Software Developer",
  },
  {
    image: pauline,
    name: "Pauline Goko",
    role: "Software Developer",
  },
  {
    image: angela,
    name: "Angela Adisa",
    role: "Software Developer",
  },
  {
    image: lucky,
    name: "Lucky Wangari",
    role: "Software Developer",
  },
];

const Team = () => {
  return (
    <section id="contacts">
      <h3>Team</h3>
      <div className="team">
        {team.map((item, index) => (
          <div className="team-images" key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
