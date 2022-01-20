import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import "../css/seatreview.css";



export default function YSeatPage() {
  const [alphabet, setalphabet] = React.useState('');
  const [seatNum, setSeatNum] = React.useState('');

  const handleChange = (event) => {
    setalphabet(event.target.value);
  };
  const handleChange2 = (event) => {
    setSeatNum(event.target.value);
  };

  const theaterId = 1;
  console.log(alphabet);
  console.log(seatNum);

  return (
  <div className="view"> 
  <div>
    <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 1,
          fontWeight: 'bold',
        }}
      >
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="img/YImage.jpg"
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 3,
            minWidth: { md: 350 },
          }}
        >
          <Box component="span" sx={{ color: '#6667AB', fontSize: 25, mt: 1 }}>
            CGV 용산역아이파크몰 IMAX
          </Box>
          <Box component="span" sx={{ fontSize: 22 }}>
            총 624석
          </Box>
          <Box
            sx={{
              mt: 1.5,
              p: 0.5,
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
              borderRadius: '5px',
              color: 'primary.main',
              fontWeight: 'medium',
              display: 'flex',
              fontSize: 12,
              alignItems: 'center',
              '& svg': {
                fontSize: 21,
                mr: 0.5,
              },
            }}
          >
          </Box>
        </Box>
    </Box>
  </div>

  <div className='imgBack'>
    <img src={'img/YongSanSeat.png'} alt="용산역 좌석" width={1200}/>
  </div>
  <div>
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <item>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">좌석 알파벳</InputLabel>
              <Select
                  labelId="SeatAlphabet-label"
                  id="SeatAlphabet-select"
                  value={alphabet}
                  label="SeatAlphabet"
                  onChange={handleChange}
              >
                <MenuItem value={'A'}>A</MenuItem>
                <MenuItem value={'B'}>B</MenuItem>
                <MenuItem value={'C'}>C</MenuItem>
                <MenuItem value={'D'}>D</MenuItem>
                <MenuItem value={'E'}>E</MenuItem>
                <MenuItem value={'F'}>F</MenuItem>
                <MenuItem value={'G'}>G</MenuItem>
                <MenuItem value={'H'}>H</MenuItem>
                <MenuItem value={'I'}>I</MenuItem>
                <MenuItem value={'J'}>J</MenuItem>
                <MenuItem value={'K'}>K</MenuItem>
                <MenuItem value={'L'}>L</MenuItem>
                <MenuItem value={'M'}>M</MenuItem>
                <MenuItem value={'N'}>N</MenuItem>
                <MenuItem value={'O'}>O</MenuItem>
                <MenuItem value={'P'}>P</MenuItem>
              </Select>
            </FormControl>
          </Box>
          </div>
        </item>
      </Grid>
      <Grid item xs={4}>
        <item>
          <div>
          <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">좌석 번호</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="SeatNum-select"
                  value={seatNum}
                  label="SeatNum"
                  onChange={handleChange2}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={26}>26</MenuItem>
                  <MenuItem value={27}>27</MenuItem>
                  <MenuItem value={28}>28</MenuItem>
                  <MenuItem value={29}>29</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={31}>31</MenuItem>
                  <MenuItem value={32}>32</MenuItem>
                  <MenuItem value={33}>33</MenuItem>
                  <MenuItem value={34}>34</MenuItem>
                  <MenuItem value={35}>35</MenuItem>
                  <MenuItem value={36}>36</MenuItem>
                  <MenuItem value={37}>37</MenuItem>
                  <MenuItem value={38}>38</MenuItem>
                  <MenuItem value={39}>39</MenuItem>
                  <MenuItem value={40}>40</MenuItem>
                  <MenuItem value={41}>41</MenuItem>
                  <MenuItem value={42}>42</MenuItem>
                  <MenuItem value={43}>43</MenuItem>
                  <MenuItem value={44}>44</MenuItem>
                  <MenuItem value={45}>45</MenuItem>
                </Select>
              </FormControl>
            </Box>    
          </div>
        </item>
      </Grid>
      <Grid item xs={0}>
        <item>
          <div>
            <Link to={`/WriteReview/${theaterId}/${alphabet}/${seatNum}`}>
              <Button size="large" color="secondary" variant="contained">후기 쓰기</Button>
            </Link>
          </div>
        </item>
      </Grid>
      <Grid item xs={0}>
        <item>
          <div>
            <Link to={`/ReviewList/${theaterId}/${alphabet}/${seatNum}`}>
              <Button size="large" color="secondary" variant="contained">후기 보기</Button>
            </Link>
          </div>
        </item>
      </Grid>
    </Grid>
    </div>
    </div>
    
  );
}