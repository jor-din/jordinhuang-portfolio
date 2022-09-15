import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div className="social-media">
      <Tooltip title="Github">
        <IconButton href='https://github.com/jor-din'>
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton href='https://www.linkedin.com/in/jordinlh/'>
          <LinkedInIcon />
        </IconButton>
      </Tooltip>

    </div>
  );
};

export default SocialMedia;
