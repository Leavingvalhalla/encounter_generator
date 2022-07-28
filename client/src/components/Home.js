import React from 'react';
import { useEffect, useState } from 'react';
import { Search } from 'semantic-ui-react';

function Home() {
  const [cr, setCr] = useState('');

  useEffect(() => {
    fetch(`/cr/${cr}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [cr]);

  return (
    <div>
      <h1>Encounter Generator</h1>
      <h3>Input your parameters here to find the right baddies for the job.</h3>
      <Search
        placeholder="Search..."
        onSearchChange={(e) => setCr(e.target.value)}
      />
      <p>CR is {cr}</p>
    </div>
  );
}

export default Home;
