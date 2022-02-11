import React from 'react'
import MainDisplay from "../components/aboutComponents/maindisplay"
import WhoWas from "../components/aboutComponents/whowas"
import KnowMore from "../components/aboutComponents/knowmore"


const about = () => {
    return (
        <div className="about-us-main" >
            <MainDisplay />
            <WhoWas />
            <KnowMore />

        </div >
    )
}

export default about