import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './NightMode.scss';
import {useState} from 'react'

function SwitchLabels({handleChange}) {

    const [nightMode, setNightMode] = useState();

    const handleDisplayChange = () => {
        setNightMode(nightMode)
    }
//   return (
//     <FormGroup>
//       <FormControlLabel 
//       control=
//       {<Switch 
//         defaultChecked
//         onChange={handleDisplayChange} />} />
//     </FormGroup>
//   );
}

export default SwitchLabels