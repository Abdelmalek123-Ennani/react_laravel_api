import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert';

function AddStudent() {

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error_list , setErrorList] = useState([]);
  

  const saveStudent = async (e) => {
    e.preventDefault();
    
    if ( name != "" && phone != "" && email != "" && course != "" ) {
  
      const res = await axios.post('http://127.0.0.1:8000/api/add-student' ,{
        name , course , email , phone
      });

      if ( res.data.status == 200 ) {
        setName('');
        setCourse('');
        setEmail('');
        setPhone('');
        swal("Success!", "Added successfully", "success");
      } else {
          setErrorList(res.data.validate_err);
          console.log(error_list)
        
      }
    }
    
  }

  return (
    <div className='container'>
        <div className='row'>
           <div className='col-md-12'>
              <div className='card'>
                <div className='card-header'>
                    <h4>
                        Students Data
                        <Link to={'/'} className='btn btn-primary btn-sm float-end'>Back</Link>
                    </h4>
                </div>
                <div className='card-body'>
                    <form onSubmit={(e) => saveStudent(e)} method="POST">
                        <div className='group-form mb-3'>
                          <label>Student Name</label>
                          <input type="text" name="name" onChange={e => setName(e.target.value)} value={name} className='form-control' />
                        </div>
                        <div className='group-form mb-3'>
                          <label>Student Course</label>
                          <input type="text" name="course" onChange={e => setCourse(e.target.value)} value={course} className='form-control' />
                        </div>
                        <div className='group-form mb-3'>
                          <label>Student Email</label>
                          <input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} className='form-control' />
                        </div>
                        <div className='group-form mb-3'>
                          <label>Student Phone</label>
                          <input type="number" name="phone" onChange={e => setPhone(e.target.value)} value={phone} className='form-control' />
                        </div>

                        <div className='group-form mb-3'>
                          <input type="submit" className="btn btn-primary" value="save Student" />
                        </div>
                    </form>
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default AddStudent