// not done yet !!!!




import React from "react"

class HomepageContent extends React.Component {
    render() {
        return (
            <div className="HomepageContent">

                {/* <div className="videocontainer" data-jsx="2165040243" data-reactid="73"><div class="vsc-controller" data-vscid="4rvi0manm"></div><video src="//cms.chobanifoodservice.com/assets/Chobani_Loop_7.mp4" autoplay="" muted="" loop="" playsinline="" class="video" data-jsx="2165040243" data-reactid="74" data-vscid="4rvi0manm" width="1475" height="780"></video></div> */}





                <div className="row align-items-center" id="blockof3">
                    <div className="col-md-4 hello">
                        <p> <span className="redish">DELIVERY</span>
                            <div></div>
                            <span>SATUDRAY AND SUNDAY</span>
                        </p>

                    </div>
                    <div className="col-md-4 hello">
                        <p> <span className="redish">20% OFF</span></p>
                        <p><span>FOR ORDERS OVER 100$</span></p>

                    </div>
                    <div className="col-md-4">
                        <p> <span className="redish">DROP POINTS</span>
                            <div></div>
                            <span>IN MANY CITIES</span>
                        </p>
                    </div>
                </div>


                <div className="socialmedias">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-instagram"></i>
                </div>


                <div className="row align-items-center" id="blockof4">
                    <div className="col-md-4 hello">
                        <p> <span className="redish">WEEKLY MENU</span>
                            <div></div>
                            <span>EVERY THURSDAY</span>
                        </p>

                    </div>
                    <div className="col-md-4 hello">
                        <p> <span className="redish">FITNESS MENU</span></p>
                        <p><span>TAILORED FOR YOUR GOALS</span></p>

                    </div>
                    <div className="col-md-4">
                        <p> <span class="redish">PRE-COOKED</span>
                            <div></div>
                            <span>DON'T WASTE TIME</span>
                        </p>
                    </div>
                </div>

                <div class="servicesHeader">
                    <p>Services</p>
                </div>
                <div className="services">
                    <div className="box1">
                        <div className="box2">
                            <i className="fas fa-users fa-5x"></i>
                            <p>Whole family is happy now yolo</p>
                        </div>
                        <div><i className="fas fa-dumbbell fa-5x"></i>
                            <p>Big foods for big muscles lol</p>
                        </div>


                    </div>
                    <div className="box1">

                        <div>
                            <i className="fas fa-child fa-5x"></i>
                            <p>Even for kidsss !</p>

                        </div>
                        <div><i className="fas fa-drumstick-bite fa-5x"></i>
                            <p>HAVE SOME MEATS</p>
                        </div>


                    </div>
                </div>
                <div className="spaceforfooter"></div>
            </div>
        );
    }
}