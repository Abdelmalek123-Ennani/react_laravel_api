import React , {useState , useEffect} from 'react';
import { Link , useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function AddStudent() {

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [btnText , setBtnText] = useState("update student");
  const {id} = useParams(); // get link parameter 
  

  // get student data (to fill in the form)
  const getStudentData = async (id) => {
        const allStudents = await axios.get(`http://127.0.0.1:8000/api/get-student/${id}`);
        const { name , phone , email , course } = allStudents.data.student;
        setName(name)
        setCourse(course)
        setEmail(email)
        setPhone(phone)
  }

  useEffect( () => {
    getStudentData(id);
  } , [])

  // update student data
  const updateStudent = async (e) => {
    e.preventDefault();
    
    if ( name != "" && phone != "" && email != "" && course != "" ) {
  
        // change button text while sending resuest (for animation )
        setBtnText("updating data");
       const res = await axios.put(`http://127.0.0.1:8000/api/edit-student/${id}` ,{
           name , course , email , phone
      });

    //   console.log(res.data);

      if ( res.data.status == 200 ) {
         setName('');
         setCourse('');
         setEmail('');
         setPhone('');

         swal({
          title: "Updated!",
          text: "Updated successfully!",
          icon: "success",
          button: "Ok!",
        });

         // update data on the DOM
         getStudentData(res.data.user_id);
         // give to submit button it's initial value
         setBtnText('update student');
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
                        Update a student data
                        <Link to={'/'} className='btn btn-primary btn-sm float-end'>Back</Link>
                    </h4>
                </div>
                <div className='card-body'>
                    <form onSubmit={(e) => updateStudent(e)} method="POST">
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
                          <input type="text" name="phone" onChange={e => setPhone(e.target.value)} value={phone} className='form-control' />
                        </div>

                        <div className='group-form mb-3'>
                          <input type="submit" className="btn btn-primary" value={btnText} />
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