<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;

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


//Route::post('/company/signup', [CompanyController::class, 'signup']);

// route::get('company/signup', function(){
//     return 'first correct code';
// });
//Route::post('/signup', [CompanyController::class, 'signup']);

// Route::get('register', function(){
//     return 'code war';
// });

//Route::post('company/signup', [CompanyController::class, 'register']);

Route::post('company/signup', [CompanyController::class, 'signUp']);

// Route::post('/company/signup', function (Request $request) {
//     \Log::info('Received signup request', $request->all());
//     return response()->json(['message' => 'Route hit successfully']);
// });

// Route::post('/company/signup', function() {
//     return response()->json(['message' => 'Route hit successfully']);
// });

//Route::post('/company/signup', [CompanyController::class, 'store']);