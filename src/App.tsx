import { Navbar } from './components/Navbar'
import { Packages } from './components/Packages'
import { Search } from './components/Search'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Search />
      <Packages />
    </div>
  )
}

export default App
