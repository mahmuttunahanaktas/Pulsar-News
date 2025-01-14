import React from 'react';
import { Fade } from '@mui/material';
import { RiAdminLine } from "react-icons/ri";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AdminAccountSettings() {
  return (
    <Fade in={true} timeout={500}>
      <div className='w-full h-full flex flex-col items-center'>
        {/* Header */}
        <div className='flex justify-center items-center gap-2' style={{ marginTop: '5%' }}>
          <RiAdminLine className='text-6xl border-1 border-black rounded-full p-1' />
          <h1 className='m-0 p-0'>Welcome Mahmut Tunahan Aktaş</h1>
        </div>

        {/* Accordion Section */}
        <div className='w-3/4 mt-10'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Account Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Here you can view and update your account details, such as your name, email, and password.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Security Settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Manage your security settings, including two-factor authentication and login alerts.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Notifications</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Configure your notification preferences, such as email or SMS alerts.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Fade>
  );
} export default AdminAccountSettings;
