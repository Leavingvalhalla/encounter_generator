function Cr({ onCrMinChange, onCrMaxChange }) {
  //   fetch('cr').then((res) =>
  //     res.json().then((data) => {
  //       let string = '';
  //       for (let i = 0; i < data.length; i++) {
  //         string += `${i}: '${data[i]['subtype1']}', `;
  //         // console.log(data[i]);
  //       }
  //       console.log(string);
  //     })
  //   );

  let crOptions = [
    { id: 0, name: '8' },
    { id: 1, name: '12' },
    { id: 2, name: '10' },
    { id: 3, name: '7' },
    { id: 4, name: '13' },
    { id: 5, name: '28' },
    { id: 6, name: '15' },
    { id: 7, name: '5' },
    { id: 8, name: '39' },
    { id: 9, name: '0.50' },
    { id: 10, name: '0.13' },
    { id: 11, name: '19' },
    { id: 12, name: '23' },
    { id: 13, name: '20' },
    { id: 14, name: '25' },
    { id: 15, name: '14' },
    { id: 16, name: '0.33' },
    { id: 17, name: '6' },
    { id: 18, name: '18' },
    { id: 19, name: '2' },
    { id: 20, name: '29' },
    { id: 21, name: '37' },
    { id: 22, name: '1' },
    { id: 23, name: '4' },
    { id: 24, name: '9' },
    { id: 25, name: '0.25' },
    { id: 26, name: '21' },
    { id: 27, name: '24' },
    { id: 28, name: '0.17' },
    { id: 29, name: '17' },
    { id: 30, name: '30' },
    { id: 31, name: '35' },
    { id: 32, name: '22' },
    { id: 33, name: '3' },
    { id: 34, name: '13.00' },
    { id: 35, name: '27' },
    { id: 36, name: '11' },
    { id: 37, name: '16' },
    { id: 38, name: '26' },
  ];

  return (
    <div>
      <p>If you want an exact CR, you can leave maximum blank.</p>
      <label htmlFor="CR minimum">CR min</label>
      <input type="text" onChange={(e) => onCrMinChange(e)} />
      <label htmlFor="CR maximum">CR max</label>
      <input type="text" onChange={(e) => onCrMaxChange(e)} />
    </div>
  );
}

export default Cr;
