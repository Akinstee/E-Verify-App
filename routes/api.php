<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;
use App\Http\Controllers\WorkerController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\WorkerVerificationController;
use App\Http\Controllers\WorkerDetailsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('company/signup', [CompanyController::class, 'signUp']);
Route::post('company/signin', [CompanyController::class, 'signIn']);


Route::post('worker/signup', [WorkerController::class, 'signUp']);
Route::post('/worker/signin', [WorkerController::class, 'signIn']);
// Route::get('/worker/{id}', [WorkerController::class, 'show']);
// Route::put('/worker/{id}', [WorkerController::class, 'update']);
// Route::delete('/worker/{id}', [WorkerController::class, 'destroy']);


Route::post('/worker-details', [WorkerDetailsController::class, 'store']);



Route::get('jobs', [JobController::class, 'index']);
Route::post('jobs', [JobController::class, 'store']);
Route::get('jobs/{id}', [JobController::class, 'show']);
Route::put('jobs/{id}', [JobController::class, 'update']);
Route::delete('jobs/{id}', [JobController::class, 'destroy']);

// Route::post('workers', [WorkerController::class, 'store']);
// Route::get('workers/{id}', [WorkerController::class, 'show']);
// Route::put('workers/{id}', [WorkerController::class, 'update']);
// Route::delete('workers/{id}', [WorkerController::class, 'destroy']);

Route::post('worker-verifications', [WorkerVerificationController::class, 'store']);
Route::get('worker-verifications/{id}', [WorkerVerificationController::class, 'show']);
Route::put('worker-verifications/{id}', [WorkerVerificationController::class, 'update']);
Route::delete('worker-verifications/{id}', [WorkerVerificationController::class, 'destroy']);