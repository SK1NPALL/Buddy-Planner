import React from 'react'


function MenuBar() {

    return (
        <div className="menu-container">

            <div className="menu-left">

                <div className="menu-buddyplan">


                    <img src="src/component/buddyplan-logo.png" alt="buddyplanner-logo" height={50} />
                    <p style={{ fontWeight: "bold", color: "#7DA2BC" }}>Buddy<br /><span style={{ color: "#88706F" }}>Planner</span> </p>

                </div>
            </div>
            <div className="menu-right">

                <div className="home">

                    <img src="src/component/logo/home-logo.png" alt="home-logo" height={24} />
                    <a href="#">HOME</a>

                </div>

                <div className="my-planner">

                    <img src="src/component/logo/myPlanner-logo.png" alt="myPlanner-logo" height={24} />
                    <a href="#">MY PLANNER</a>

                </div>

                <div className="goal">

                    <img src="src/component/logo/goal-logo.png" alt="goal-logo" height={24} />
                    <a href="#">GOALS</a>

                </div>

                <div className="history">

                    <img src="src/component/logo/history-logo.png" alt="history-logo" height={24} />
                    <a href="#">HISTORY</a>

                </div>


                <div className="contact">

                    <img src="src/component/logo/contact-logo.png" alt="contact-logo" height={24} />
                    <a href="#">CONTACT</a>

                </div>

            </div>

        </div >
    )
}

export default MenuBar