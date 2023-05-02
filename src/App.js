import React from 'react'
import Profil from './Profil'
const App = () => {
  function handleName (name){
    console.log('hiiiii');
    alert(name)
  }
  return (

    <div>
      <Profil name={'omar'} bio={'age 28 ans bac+5'} professions={'sales'} handleName={handleName}>
      <img onClick={() => handleName("omar")} src="https://www.euractiv.fr/wp-content/uploads/sites/3/2020/11/shutterstock_702626722-800x450.jpg" height={80} alt="" />
      </Profil>
      
        </div>
  )
}

export default App