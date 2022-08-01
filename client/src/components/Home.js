import React from 'react';
import { useState, useEffect } from 'react';
import { TextField, Autocomplete, Button } from '@mui/material/';

import {
  crOptions,
  typeOptions,
  environmentOptions,
  subtypeOptions,
} from '../data.js';

function Home() {
  const [crMin, setCrMin] = useState('');
  const [crMax, setCrMax] = useState('');
  const [environment, setEnvironment] = useState('');
  const [type, setType] = useState('');
  const [subtype, setSubtype] = useState('');
  const [creatures, setCreatures] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch('/creatures')
      .then((res) => res.json())
      .then((data) => setCreatures(data));
  }, []);

  function handleSubmit() {
    let query = creatures;
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
    console.log(crMin);
    setResult(query);
  }

  return (
    <div>
      <h1>Encounter Generator</h1>
      <h3>Input your parameters here to find the right baddies for the job.</h3>
      <Autocomplete
        id="crMin"
        options={crOptions}
        inputValue={crMin}
        onInputChange={(event, newValue) => setCrMin(newValue)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="CR min" />}
      />
      <Autocomplete
        id="crMax"
        options={crOptions}
        inputValue={crMax}
        onInputChange={(event, newValue) => setCrMax(newValue)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="CR max" />}
      />{' '}
      <Autocomplete
        id="environment"
        options={environmentOptions}
        inputValue={environment}
        onInputChange={(event, newValue) => setEnvironment(newValue)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Environment" />}
      />{' '}
      <Autocomplete
        id="type"
        options={typeOptions}
        sx={{ width: 300 }}
        inputValue={type}
        onInputChange={(event, newValue) => setType(newValue)}
        renderInput={(params) => <TextField {...params} label="Type" />}
      />{' '}
      <Autocomplete
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
      {result.map((creature) => (
        <p key={creature['name']}>{creature['name']}</p>
      ))}
    </div>
  );
}

export default Home;
