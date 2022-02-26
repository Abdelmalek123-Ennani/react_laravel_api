<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;


class StudentController extends Controller
{


    public function index() {
        $students = Student::all();
        return response()->json([
            "students" =>  $students,
            "status" => 200 
        ]);
    }

    // add a new student
    public function store(Request $requset) {


        $student = new Student;
        $student->name = $requset->input('name');
        $student->phone = $requset->input('phone');
        $student->course = $requset->input('course');
        $student->email = $requset->input('email');

        $student->save();

        return response()->json([
            "status" => 200,
            "message" => "Student added successfully"
        ]);
    }

    //get data of a single student
    public function getStudentData($id) {
        $student = Student::find($id);
        return response()->json([
            'status' => 200,
            'student' => $student
        ]);
    }

    // update student data
    public function update(Request $requset , $id) {
        $student = Student::find($id);

        $student->name = $requset->input('name');
        $student->phone = $requset->input('phone');
        $student->course = $requset->input('course');
        $student->email = $requset->input('email');

        $student->update();


       return response()->json([
           "status" => 200,
           "message" => "updates successfully",
           "user_id" => $id
       ]); 
    }

    // delete a student
    public function destroy($id) {
        $student = Student::find($id);
        $student->delete();

        return response()->json([
            "status" => 200,
            "message" => "deleted successfully"
        ]);
    }
}
