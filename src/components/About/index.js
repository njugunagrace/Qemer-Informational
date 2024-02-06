import "./style.css";
import children from "../../assets/images/children.jpg";

const About = () => {
return(
<>
<section className="title" >
<h2 >What We Do</h2>
<div className="about">
<div>
<img className="image" src={children} alt="children"/>
</div>
<div className="mission">
<p>
Qemer's mission is to decrease rickets cases in Kayole, Kenya. It achieves this by employing geospatial mapping to identify and
address delayed milestones in children, ensuring early detection and treatment. It was founded by five female software developers
from East Africa in July 2023. They achieve this through ”Mwanga”a mobile application for registration and a web portal that helps
in planning and visualizing the registered cases.
</p>
</div>
</div>
</section>
</>
)
}
export default About;