import React from 'react';
import {Button} from '@material-ui/core'

import Hello from 'components/Hello'


const App: React.FC = () => {
  function handleClick(event:React.MouseEvent): void {
    console.log('button clicked', typeof event);

  }

  return (
    <div className="App">
      <Hello name='Chris' enthusiasmLevel={1} />
      <Button onClick={handleClick} variant="contained" title='Click it'>
        Click it
      </Button>
    </div>
  );
}

export default App;
