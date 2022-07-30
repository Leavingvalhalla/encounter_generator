import React from 'react';
import { useState, useEffect } from 'react';
import Cr from './Cr';
import Type from './Type';
import Subtype from './Subtype';
import Environment from './Environment';

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

  function handleCrMinChange(e) {
    setCrMin(e.target.value);
  }

  function handleCrMaxChange(e) {
    setCrMin(e.target.value);
  }

  function handleEnvironmentChange(e) {
    setEnvironment(e.target.value);
  }

  function handleTypeChange(e) {
    setType(e.target.value);
  }

  function handleSubtypeChange(e) {
    setSubtype(e.target.value);
  }

  function handleSubmit() {
    let query = creatures;
    if (environment !== '') {
      query = query.filter(
        (creature) => creature['environment'] == environment
      );
    }
    if (subtype !== '') {
      query = query.filter(
        (creature) =>
          creature['subtype1'] == subtype ||
          creature['subtype2'] == subtype ||
          creature['subtype3'] == subtype
      );
    }
    if (type !== '') {
      query = query.filter((creature) => creature['maintype'] == type);
    }
    if (crMin !== '' && crMax === '') {
      query = query.filter((creature) => creature['cr'] == crMin);
    } else if (crMin !== '' && crMax !== '') {
      query = query.filter(
        (creature) => creature['cr'] >= crMin && creature['cr'] <= crMax
      );
    }

    setResult(query);
  }

  return (
    <div>
      <h1>Encounter Generator</h1>
      <h3>Input your parameters here to find the right baddies for the job.</h3>
      <Cr onCrMinChange={handleCrMinChange} onCrMaxChange={handleCrMaxChange} />
      <Environment onEnvironmentChange={handleEnvironmentChange} />
      <Type onTypeChange={handleTypeChange} />
      <Subtype onSubtypeChange={handleSubtypeChange} />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
      {result.map((creature) => (
        <p key={creature['name']}>{creature['name']}</p>
      ))}
    </div>
  );
}

export default Home;
