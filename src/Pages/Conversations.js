import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import portrait from './logo192.png';

//MUI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

//local component header
import Conversation from '../Components/Conversations/Conversation.js'
import Header from '../Components/Header.js'


const Conversations = (props) => {
    return (
        <div>
            <Header/>
            
            
            
            <Conversation text = "Hey its jack, are you still selling that NFT?" avatarImage= "../Static/default_no_person.jpg" user = "JackYogurt" />
            <Conversation text = "Sick post dude!" avatarImage= "../Static/default_no_person.jpg" user = "Paneer karumacumer" />
            <Conversation text = "whats up?" avatarImage= "../Static/default_no_person.jpg" user = "Sabesttian Polish" />
        </div>

    );
};

export default Conversations;