import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { OnlinePredictionSharp } from '@mui/icons-material';


export default function Dashboard() {
  const [soundQ, setSoundQ] = useState(2);

  const[online, setOnline] = useState(true)

  const [volume, setVolume] = useState(null)

  const handleChange = (event) => {
    setSoundQ(event.target.value);
  };

  function valuetext(value) {
    setVolume(value)
    return `${value}`;
  }


  return (
      <div>

      

    <div className='divCard'>
      <Card sx={{ width: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
            Online Mode
          </Typography>  
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Is this application connected to the internet?
          </Typography> 
        </CardContent>
        <CardActions>
          <Switch defaultChecked value={online} onClick={()=>{setOnline(!online)}} />
        </CardActions>
    </Card>

    <Card sx={{ width: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }}  color="text.primary" gutterBottom>
            Master Volume
          </Typography>   
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Overrides all other sound settings in this application
          </Typography>             
        </CardContent>
        <CardActions>
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={100}
            />
          </Box>
        </CardActions>
    </Card>

    <Card sx={{ width: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
            Sound Quality
          </Typography>    
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            Manually control the music quality in event of poor connection
          </Typography>            
        </CardContent>
        <CardActions>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={soundQ}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Low Quality</MenuItem>
                        <MenuItem value={2}>Normal Quality</MenuItem>
                        <MenuItem value={3}>High Quality</MenuItem>
                     </Select>
              </FormControl>    
          </Box>
        </CardActions>
    </Card>
    </div>

      <div style={{marginTop: "20px", marginLeft:"100px"}}>

        <Typography sx={{ fontSize: 34 }} color="text.primary" gutterBottom>
                System Notifications: 
        </Typography>    
        
        {soundQ === 1 ? <p>Low Quality</p> : null}
        {!online ? <p>Your application is offline. You won't be able to share or stream music to other devices.</p> : null}
        {volume >= 80 ? <p>Listening to music at a high volume could cause long-term hearing loss.</p> : null }
      </div>
    </div>
  )
}


