import React from 'react';
import { Facebook } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Pinterest } from '@mui/icons-material';
import { Google } from '@mui/icons-material';
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">

            <input type="text" placeholder='Enter your email...'/>
            <button>Subscribe</button>
            </div>
        <div className="icons">
            <Facebook/>
            <Instagram/>
            <Twitter/>
            <Pinterest/>
            <Google/>
        </div>
    </div>
    </div>
  )
}

export default Contact