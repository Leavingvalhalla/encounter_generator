import React from 'react';
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Autocomplete,
  Button,
  Typography,
} from '@mui/material/';
import CreatureCard from './CreatureCard.js';

import {
  crOptions,
  typeOptions,
  environmentOptions,
  subtypeOptions,
} from '../data.js';
import allCreatures from '../allCreatures.js';

function Home() {
  const [crMin, setCrMin] = useState('');
  const [crMax, setCrMax] = useState('');
  const [environment, setEnvironment] = useState('');
  const [type, setType] = useState('');
  const [subtype, setSubtype] = useState('');
  const [creatures, setCreatures] = useState([]);
  const [result, setResult] = useState([]);

  // useEffect(() => {
  //   fetch('/creatures')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCreatures(data);
  //       console.log(data[0]);
  //     });
  // }, []);

  useEffect(() => {
    setCreatures(allCreatures);
  }, [creatures]);

  function handleSubmit() {
    let query = creatures;
    console.log(typeof query);
    if (environment !== '') {
      query = query.filter(
        (creature) => creature['environment'] === environment
      );
    }
    if (subtype !== '') {
      query = query.filter(
        (creature) =>
          creature['subtype1'] === subtype ||
          creature['subtype2'] === subtype ||
          creature['subtype3'] === subtype
      );
    }
    if (type !== '') {
      query = query.filter((creature) => creature['maintype'] === type);
    }
    if (crMin !== '' && crMax === '') {
      query = query.filter((creature) => creature['cr'] === crMin);
    } else if (crMin !== '' && crMax !== '') {
      query = query.filter(
        (creature) => creature['cr'] >= crMin && creature['cr'] <= crMax
      );
    }
    setResult(query);
    // console.log(query);
  }

  return (
    <div>
      <Typography variant="h1">Encounter Generator</Typography>
      <Typography variant="h3">
        Input your parameters here to find the right baddies for the job.
      </Typography>
      <Typography variant="h5">
        You can leave CR max blank for an exact CR search.
      </Typography>
      {/* TODO: Refactor input fields to separate component */}
      <Autocomplete
        className="autocomplete"
        id="crMin"
        options={crOptions}
        inputValue={crMin}
        onInputChange={(event, newValue) => setCrMin(newValue)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="CR min" />}
      />
      <Autocomplete
        className="autocomplete"
        id="crMax"
        options={crOptions}
        inputValue={crMax}
        onInputChange={(event, newValue) => setCrMax(newValue)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="CR max" />}
      />{' '}
      <Autocomplete
        className="autocomplete"
        id="environment"
        options={environmentOptions}
        inputValue={environment}
        onInputChange={(event, newValue) => setEnvironment(newValue)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Environment" />}
      />{' '}
      <Autocomplete
        className="autocomplete"
        id="type"
        options={typeOptions}
        sx={{ width: 300 }}
        inputValue={type}
        onInputChange={(event, newValue) => setType(newValue)}
        renderInput={(params) => <TextField {...params} label="Type" />}
      />{' '}
      <Autocomplete
        className="autocomplete"
        id="subtype"
        options={subtypeOptions}
        inputValue={subtype}
        onInputChange={(event, newValue) => setSubtype(newValue)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Subtype" />}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Search
      </Button>
      <br />
      {result.map((creature, index) => (
        <CreatureCard creature={creature} key={index} />
      ))}
    </div>
  );
}

export default Home;
