
import React from "react";
import "./style.css"

function DashBadge() {
    return (


        <div className="container dash-badge">
                <img src ="assets/images/yourself-badge.png" className="badge-style-c"/>
                <p className="badge-pts">20/20 points</p>
                <p className="badge-unlock">Badge unlocked!</p>
            <div>
                <img src ="assets/images/others-badge.png" className="badge-style-o"/>

                <p className="badge-pts">20/40 points</p>
                <p className="badge-lock">Complete more acts to unlock!</p>
            </div>
            <div>

                <img src ="assets/images/world-badge.png" className="badge-style-o"/>

                <p className="badge-pts">10/50 points</p>
                <p className="badge-lock">Complete more acts to unlock!</p>
            </div>
        </div>
      




// <!-- End About Section --> 
    );
}

export default DashBadge;