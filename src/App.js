import { useState } from 'react';
import './App.css';

function App() {
  const array2D = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
  const [storeClick, setStoreClick] = useState([])

  const onBoxClick = (i,index,value) => {
    const box = document.getElementById(value);
    if (box) {
      box?.classList.add('box-green');
      box.setAttribute('id', value+1);
    }
    const newArray = [...storeClick];
    newArray.push(box);
    setStoreClick([...newArray]);

    if (i === array2D.length -1 && index === array2D[array2D.length-1].length - 1) {
      const greenBoxes = document.getElementsByClassName('box-green');
      for(const i in greenBoxes) {
        if (greenBoxes.item(i)) {
          greenBoxes.item(i).classList.add('box-orange');
          greenBoxes.item(i).setAttribute('id',value);
        }
      }
    }
  }

  return (
    <div className='container my-4 align-items-center'>
          {array2D.map((array, i) => 
            <div className='row' key={i}>
              {array.map((value,index) => <div className='box' id={value} key={index} style={{ width: '30px', height: '30px' }} onClick={() => onBoxClick(i,index,value)}></div>)}
            </div>
          )}
    </div>
  );
}

export default App;
