import React from 'react';
import Name from './components/Name'
import WildersList from './components/WildersList';


const App = () => {

return (

<>
<header className={'header'}>
<h1>PRESENTATION DE LA TEAM</h1>
</header>
<WildersList Name={Name}/>

</>


)

}

export default App;

