
import MainHeader from './MainHeader'
import MainContent from './MainContent'
import "./MainPageApp.css"
function MainPageApp({setState}) {

 
  return (
    <div className='row'>
  
<MainHeader  set={setState} />
<MainContent/>
    </div>
  )
}

export default MainPageApp