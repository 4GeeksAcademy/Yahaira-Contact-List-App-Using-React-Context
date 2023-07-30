import React from 'react'
import { Link } from "react-router-dom";
//import flux from "";



const AddContact = () => {
  return (
    <div className='container'>
      <div className="container">
                <div>
                    <h1 className="text-center mt-5">Add a new contact</h1>
                    <form>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="phone" className="form-control" placeholder="Enter phone" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="Enter address" />
                        </div>
                        <button type="button" className="btn btn-primary form-control">save</button>
                        <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                    </form>
                </div>
      
    </div>
  )
}

export default AddContact

/*form bootstrap 5.2 

<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Full Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Email</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Phone</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
</div>

//adress:
<div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>

  //boton
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Save</button>
  
</div>

*/