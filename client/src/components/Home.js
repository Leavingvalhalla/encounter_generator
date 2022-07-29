import React from 'react';
import { useEffect, useState } from 'react';
import Cr from './Cr';
import Type from './Type';
import Subtype from './Subtype';
import Environment from './Environment';

function Home() {
  const [cr, setCr] = useState('');
  const [environment, setEnvironment] = useState('');
  const [type, setType] = useState('');
  const [subtype, setSubtype] = useState('');

  function handleCrChange(e) {
    setCr(e.target.value);
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

  return (
    <div>
      <h1>Encounter Generator</h1>
      <h3>Input your parameters here to find the right baddies for the job.</h3>
      <Cr onCrChange={handleCrChange} />
      <Environment onEnvironmentChange={handleEnvironmentChange} />
      <Type onTypeChange={handleTypeChange} />
      <Subtype onSubtypeChange={handleSubtypeChange} />
    </div>
  );
}

export default Home;
