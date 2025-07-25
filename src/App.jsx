import Const from './components/const';
import Let from './components/Let';
import Templatelit from './components/Templatelit';
import Typeof from './components/Typeof';
import Var from './components/Var';
function App() {
  return (
    <>
      <Let/>
      <p>Now learning Var</p>
      <Var/>
      <p>Now learning Const</p>
      <Const/>
      <p>Now learning Typeof</p>
      <Typeof/><br />
      <Templatelit/>
    </>
  )
}

export default App
