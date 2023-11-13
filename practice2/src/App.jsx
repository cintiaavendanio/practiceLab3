import './App.css'
import Table from './Table'

function App() {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ]

  return <Table netIncomes={netIncomes} />
}

export default App
