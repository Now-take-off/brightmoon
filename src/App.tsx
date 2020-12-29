import React from 'react';
import Button,{ButtonSize,ButtonType} from './components/Button/button'

import './styles/index.scss'
function App() {
  return (
    <>
        <Button > hello </Button>
        <Button size={ButtonSize.Large}> hello </Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Danger} > hello </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_dlank"> hello </Button>
  
    </>
  );
}

export default App;
