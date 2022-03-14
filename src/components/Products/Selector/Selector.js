import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Selector.css";


export default function Selector() {
  const [age, setAge] = React.useState('');
  const [price,setPrice]=React.useState('');
  const [brand,setBrand]=React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handlePrice = (event) =>{
      setPrice(event.target.value);
  }

  const handleBrand = (event) =>{
      setBrand(event.target.value);
  }

  return (
    <div className="Select-container">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <h2>Categories</h2>
        <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Begineer'}>Begineer</MenuItem>
          <MenuItem value={'Intermediate'}>Intermediate</MenuItem>
          <MenuItem value={'Advanced'}>Advanced</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      
     
      <FormControl sx={{ m: 1, minWidth: 120 }}>
          <h2>Price</h2>
        <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={price}
          label="Age"
          onChange={handlePrice}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Begineer'}>300-500 EUR</MenuItem>
          <MenuItem value={'Intermediate'}>600-800 EUR</MenuItem>
          <MenuItem value={'Advanced'}>850 EUR and above</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <h2>Brand</h2>
        <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={brand}
          label="Age"
          onChange={handleBrand}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Begineer'}>Nikon</MenuItem>
          <MenuItem value={'Intermediate'}>Cannon</MenuItem>
          <MenuItem value={'Advanced'}>Lieca</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>

   
    </div>
    
  );
}
