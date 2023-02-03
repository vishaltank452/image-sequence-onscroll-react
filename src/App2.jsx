import React from 'react';
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from 'react-gsap';

// css file 
import "./scrollMagic.css"

// images 
import cloud from './images/cloud.png';
import conffeti from './images/conffeti.png';
import girl from './images/girl.png';
import light from './images/light.png';

const App2 = () => {
    return (
        <>
            <Controller>
                <Scene duration={1000} pin={true} indicators={true}>
                    {
                        (progress) => (
                            <div style={{
                                backgroundColor: "#000000",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: "100",
                                height: "100vh",
                                overflow: "hidden",
                            }}>
                                <Timeline totalProgress={progress} paused>
                                    <Tween
                                        from={{ y: '-70vh' }}
                                        to={{ y: '-90vh' }}
                                        duration={1000}
                                    >
                                        <img src={conffeti} style={{ width: '100%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 1, left: 0, top: 0 }} alt="img" />
                                    </Tween>
                                    <Tween
                                        from={{ y: '11vh' }}
                                        to={{ y: '12vh' }}
                                        duration={100}
                                    >
                                        <img src={girl} style={{ width: '30%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 2 }} alt="img" />
                                    </Tween>
                                    <Tween
                                        from={{ y: '0vh', scale: 1 }}
                                        to={{ y: '1vh', scale: 1.3 }}
                                        duration={1000}
                                    >
                                        <img src={light} style={{ width: '100%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 1, left: 0, top: 0 }} alt="img" />
                                    </Tween>
                                    <Tween
                                        from={{ y: '85vh', opacity: 0.5 }}
                                        to={{ y: '70vh', opacity: 0.6 }}
                                        duration={1000}
                                    >
                                        <img src={cloud} style={{ width: '120%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 2 }} alt="img" />
                                    </Tween>
                                </Timeline>
                            </div>
                        )
                    }
                </Scene>
            </Controller>
        </>
    );
};

export default App2;