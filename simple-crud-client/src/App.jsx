
import { Link } from "react-router-dom";
import "./App.css";

function App() {

  const handleAddUser = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}
    console.log(user)
    fetch("http://localhost:5000/users", {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)    
    })

    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert("User Added Successfully")
        form.reset()
      }
    })
  }

    return (
        <>
            <div>
                <h1>Simple Crud</h1>

                <Link className="btn btn-primary" to='/users'>User List</Link>

                <form onSubmit={handleAddUser}>
                  <input type="text" name="name" />
                  <br />
                  <input type="email" name="email" id="" />
                  <br />
                  <input type="submit" value="Add User" />
                </form>
            </div>
        </>
    );
}

export default App;
