
import Board from './components/Board';

function App() {

  return (

    <div className="flex flex-col h-screen items-center bg-light text-dark-gray">
      
      <header  className="py-20 w-full flex irems-center justify-center">
          <img src="./symbols/logo_stacked.svg" alt="" width="84px"/>
      </header>

        <main className="p-2 bg-gray rounded-4xl">
          <Board/>
        </main>
      
    </div>
  )
}

export default App
