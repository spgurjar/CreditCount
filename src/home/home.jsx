import styles from "./home.module.css";
import React, { useState, useEffect } from 'react';
import bgImg from "../assets/game_background.png";
import credImg from "../assets/credit-image.png";
import clickImg from "../assets/tapping-icon.png";
import invite from "../assets/navbar-invite-icon.png";
import play from "../assets/navbar-play-icon.png";
import profile from "../assets/navbar-profile-icon.png";
import task from "../assets/navbar-task-icon.png";
import { GiNetworkBars } from "react-icons/gi";
import { IoIosWifi } from "react-icons/io";
import { FaBatteryFull } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";

const Home = () => {
    const [credits, setCredits] = useState(25827);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });  

    const handleCredits = () => {
        setCredits(credits + 1);
    };
    return(
        <div className={styles.body}>
            {/* <button onClick={handleCredits}>count</button>
            <div>{credits.toLocaleString()}</div> */}
            <div className={styles.topBody}>
                <div className={styles.bgImg}>
                    <img src={bgImg} className={styles.img} />

                    <div className={styles.statusBox}>
                        <div className={styles.time}>
                            <div>{formattedTime} </div>
                        </div>
                        <div className={styles.otherstatus}>
                            <div><GiNetworkBars className={styles.stIcon}/></div>
                            <div><IoIosWifi className={styles.stIcon}/></div>
                            <div><FaBatteryFull className={styles.stIcon}/></div>
                        </div>
                    </div>

                    <div className={styles.welcome}>WELCOME,<span>99th</span></div>
                    
                    <div className={styles.creditBox}>
                        <div className={styles.top}>
                            <div><img src={credImg}/></div>
                            <div className={styles.countbox}>
                                <div className={styles.ctext}>MY TOTAL CREDITS</div>
                                <div className={styles.count}>{credits.toLocaleString()}</div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className={styles.container}>
                                <div className={styles.ctext}>PRE_SALE LIVE PRICE</div>
                                <div className={styles.price}>$0.0000045</div>
                        </div>
                        {/* <div className={styles.bottom}>
                            <div className={styles.container}>
                                <div className={styles.ctext}>PRE_SALE LIVE PRICE</div>
                                <div className={styles.price}>$0.0000045</div>
                            </div>
                        </div> */}
                        <div className={styles.imgBox}>
                            <img onClick={handleCredits} src={clickImg}  className={styles.clickImg}/>
                        </div>
                    </div>
                    <duv className={styles.rankBox}>
                        <div></div>
                        <div className={styles.box}>
                            <div><FaTrophy className={styles.trophy} /></div>
                            <div>Rank</div>
                        </div>
                    </duv>
                    <duv className={styles.boostBox}>
                        <div >546/3000</div>
                        <div className={styles.box2}>
                            <div><IoIosRocket className={styles.rocket} /></div>
                            <div>BOOST 2X</div>
                        </div>
                    </duv>

                    <div className={styles.navbar}>
                        <div className={styles.container2}>
                        <div className={styles.navto}>
                            <div><img src={play}/></div>
                            <div className={styles.nav}>PLAY</div>
                        </div>
                        <div className={styles.navto}>
                            <div><img src={task}/></div>
                            <div className={styles.nav}>TASK</div>
                        </div>
                        <div className={styles.navto}>
                            <div><img src={profile}/></div>
                            <div className={styles.nav}>PROFILE</div>
                        </div>
                        <div className={styles.navto}>
                            <div><img src={invite}/></div>
                            <div className={styles.nav}>INVITE</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;