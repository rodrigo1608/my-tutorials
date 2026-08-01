
import Board from './components/Board';

function App() {

  return (

    <div className="flex flex-col  h-screen items-center bg-slate-200 text-slate-400">

      <h1 className="text-4xl font-bold text-tracking-tight mt-20">
        Tic Tac Toe React Tutorial
      </h1>

      <p>Player's turn:</p>
      <Board/>
      
    </div>
  )
}

export default App
