
import './App.css'

function App() {
  

  return (
    <>
    <div className="container"><h3>Crud operattion with react.js and node</h3>
    <div className="input-search">
      <input type="search" />
      <button className='btn green'>Add record</button>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Edit</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ram kumar</td>
          <table>25</table>
          <td>cuddalore</td>
          <td>
            <button className='btn green'>Edit</button>

          </td>
          <td>
            <button className='btn red'>Delete</button>
          </td>
        </tr>
      </tbody>

    </table>
    </div>
    </>
  )
}

export default App
