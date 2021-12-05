import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button } from 'react-bootstrap';

import Sprites from '../sprites/Sprites';
import splash from '../../images/splash.png';

const styles = {
    background: { 
        color: 'white', 
        backgroundImage: `url(${splash})`, 
        backgroundPosition: "center bottom",
        width: "100%", 
        height: "100%" 
    }
}

function Home() {
    const [action, setAction] = useState('idle')
    return (
        <section className={styles.background}>
            <Row className={"d-flex flex-row gap-10 justify-content-center"}>
                <h2>Embark upon your very own Catventure!</h2>
            </Row>
            <Row className={"d-flex flex-row gap-10 justify-content-center"}>
                <Sprites job={"Mage"} action={action} setAction={setAction} scale={.5} />
                <Sprites job={"Warrior"} action={action} setAction={setAction} scale={.5} />
                <Sprites job={"Rogue"} action={action} setAction={setAction} scale={.5} />
            </Row>
            <Row className={"d-flex flex-row gap-10 justify-content-center"}>
                <Button as={Link} to="/village">Go on Adventure</Button>
                <Button as={Link} to="/party">View Party Details</Button>
            </Row>
        </section>
    )
}

export default Home;