import React, { useEffect, useRef } from 'react';
import './pages.css';

const Home = () => {
    const wordRef = useRef(null);
    let isMounted = true;

    useEffect(() => {
        let words = ['Crafting Excellence in Custom Cardholders', 'All demands Met!'],
            part,
            i = 0,
            offset = 0,
            len = words.length,
            forwards = true,
            skip_count = 0,
            skip_delay = 15,
            speed = 70;

        const wordFlick = () => {
            if (!isMounted) return;

            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count === skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset === 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }

            part = words[i].substr(0, offset);

            if (skip_count === 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }

            part = part || '\u200B';
            wordRef.current.innerText = part;
        };

        const intervalId = setInterval(wordFlick, speed);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="container-fluid d-flex align-items-center justify-content-center vh-100 text-center">
                <div>
                    <h1 className="animate-character">Welcome to Mallet</h1>
                    <div className="word" ref={wordRef}></div>
                </div>
            </div>
        </>
    );
};

export default Home;
