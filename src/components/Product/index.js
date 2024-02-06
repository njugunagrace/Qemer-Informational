import React from "react";
import screens from "../../assets/images/screens.png";
import dashboard from "../../assets/images/dashboard.png";
import './style.css';

const Products = () => {
    return (
        <section id="products" className="products">
           <h2 className="products-title">Solution</h2>
            <div className="products-container">
                <div className="mobile">
                  <div className="mobile-text">
                    <h1 >Mobile App</h1>
                    <p>
                     Mwanga app plays a crucial part in 
                     registration and monitoring delayed 
                     milestones. This app utilizes location  
                     based data to effectively register and 
                     track delayed milestones by
                     community health volunteers.
                   </p>
                  </div>
                  
                    <img  src={screens} alt="teaser screen"/>
                  
                </div>
                  <div className="dashboard">

                 
                    <img src={dashboard} alt="charts screen"/>

                  

                  <div className="dashboard-text">
                  <h1>Dashboard</h1>
                    <p>
                    Our web portal is designed to 
                    display analysed data concerning 
                    children and community health 
                    volunteers for NGOs to act upon.
                    </p>
                    </div>
                  </div>
            </div>
        </section>
    );
};
export default Products;