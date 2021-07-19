import React from "react";
import {Link} from "react-router-dom";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const links = [
    {
        to: '/pomodoro-tracker/',
        label: <HomeOutlinedIcon/>
    },
    {
        to: '/settings', 
        label: <SettingsOutlinedIcon/>
    }
]

export const Navigation = () => {
    
    return (
    <nav> 
            {links.map(link => (
                <div key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                </div>
            ))}
    </nav>
)}
