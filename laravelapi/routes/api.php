<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// get the data that sent by api from front end (reactJs)



Route::post("/add-student" , [\App\Http\Controllers\API\StudentController::class , 'store']);
Route::get("/get-students" ,  [\App\Http\Controllers\API\StudentController::class , 'index']);
Route::get('/get-student/{id}' , [\App\http\Controllers\API\StudentController::class , 'getStudentData']);
Route::put('/edit-student/{id}' , [\App\http\Controllers\API\StudentController::class , 'update']);
Route::delete('/delete-student/{id}' , [\App\http\Controllers\API\StudentController::class , 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


