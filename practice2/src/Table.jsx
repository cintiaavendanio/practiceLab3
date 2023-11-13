const Table = ({ netIncomes }) => {
  const sum = netIncomes.reduce((acum, cur) => {
    return acum + cur.income
  }, 0)
  console.log({ sum })
  const prom = sum / netIncomes.length

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map(({ brand, income }) => {
            return (
              <tr key={brand}>
                <td>{brand}</td>
                <td>{income}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p>Promedio: {prom}</p>
    </>
  )
}

export default Table
