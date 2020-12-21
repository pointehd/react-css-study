import './App.scss';
import Button from './components/Button';
import Box from './components/Box';
import CheckBox from './components/CheckBox';
import React, {useState} from 'react';
import App2 from './style/App';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  }
  return (
    <>
      <div>
        <App2 color="blue"/>
      </div>
      <div className="App">
        
        <div>
          <CheckBox onChange={onChange} checked={check}>
            다음 약관에 모두 동의
          </CheckBox>
          <p>
            <b>check: </b>
            {check ? 'true' : 'false'}
          </p>
        </div>
        <div>
          <Box/>
        </div>
        <div className="buttons">
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="gray">
            BUTTON
          </Button>
          <Button color="gray">BUTTON</Button>
          <Button size="small" color="gray">
            BUTTON
          </Button>
        </div>
        <div className="buttons">
          <Button size="large" color="pink">
            BUTTON
          </Button>
          <Button color="pink">BUTTON</Button>
          <Button size="small" color="pink">
            BUTTON
          </Button>
        </div>
        <div className="buttons">
          <Button size="large" outLine>
            BUTTON
          </Button>
          <Button color="pink" outLine>BUTTON</Button>
          <Button size="small" color="gray" outLine> 
            BUTTON
          </Button>
        </div>
        <div className="buttons">
          <Button size="large" outLine fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="pink" fullWidth>BUTTON</Button>
          <Button size="large" fullWidth color="gray"> 
            BUTTON
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
