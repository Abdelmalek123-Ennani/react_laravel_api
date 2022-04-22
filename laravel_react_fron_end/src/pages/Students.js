import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert';

function Students() {

  const [students , setStudent] = useState([]);
  const [loading , setLoading] = useState(true);
  const [btnContet , setBtnContent] = useState('Delete');

  // get all students
  const getStudents = async () => {
    const allStudents = await axios.get('http://127.0.0.1:8000/api/get-students');
  
    if ( allStudents.data.students ) {
      setLoading(false);
      setStudent(allStudents.data.students);
    }
  }


  // delete a student
  const deleteStudent = async (id_student) => {
      setBtnContent('deleteing');
      const res = await axios.delete(`http://127.0.0.1:8000/api/delete-student/${id_student}`);
      if ( res.data.status == 200 ) {
        getStudents();
        // show an alert
        swal({
          title: "Deleted!",
          text: "Deleted successfully!",
          icon: "success",
          button: "Ok!",
        });
        setBtnContent('Delete');
      }  
  }

  useState(() => {
    getStudents();
  } , [])

  return (
    <div className='container'>
        <div className='row'>
           <div className='col-md-12'>
              <div className='card'>
                <div className='card-header'>
                    <h4>
                        Students Data
                        <Link to={'add-student'} className='btn btn-primary btn-sm float-end'>Add Student</Link>
                    </h4>
                </div>
                <div className='card-body'>
                   <table className='table table-striped'>
                      <thead>
                         <tr>
                           <th>#</th>
                           <th>Name</th>
                           <th>Phone</th>
                           <th>email</th>
                           <th>edit</th>
                           <th>delete</th>
                          </tr>
                      </thead>
                      <tbody>
                        {
                          loading == true ? (
                            <tr>{<td colspan="6" className='text-center py-2'>loading</td>}</tr>
                          ) :  students.map(std => (
                            <tr key={std.id}>
                                <td>#</td>
                                <td>{std.name}</td>
                                <td>{std.phone}</td>
                                <td>{std.email}</td>
                                <td>
                                  <button className='btn btn-success'>
                                    <Link  
                                           to={`edit-student/${std.id}`} 
                                           className='btn btn-success btn-sm'
                                    >Edit</Link>
                                  </button>
                                </td>
                                <td>
                                <button onClick={() => deleteStudent(std.id)} className="btn btn-danger btn-sm">{btnContet}</button>
                                </td>
                          </tr>
                          ))
                        }
                      </tbody>
                    </table>
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Students