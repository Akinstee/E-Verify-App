<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WorkerDetail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class WorkerDetailsController extends Controller
{
    // public function store(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'address' => 'required|string|max:255',
    //         'lga' => 'required|string|max:255',
    //         'state' => 'required|string|max:255',
    //         'country' => 'required|string|max:255',
    //         'companyUser' => 'required|string|max:255',
    //         'userPhone' => 'required|string|max:15',
    //         'userEmail' => 'required|email|max:255',
    //         'gender' => 'required|string|max:10',
    //         'userPosition' => 'required|string|max:255',
    //         'userAddress' => 'required|string|max:255',
    //         'school' => 'required|string|max:255',
    //         'schoolState' => 'required|string|max:255',
    //         'degree' => 'required|string|max:255',
    //         'course' => 'required|string|max:255',
    //         'startYear' => 'required|integer|min:1900|max:'.date('Y'),
    //         'endYear' => 'nullable|integer|min:1900|max:'.date('Y'),
    //         'stillSchooling' => 'boolean',
    //     ]);

    //     if ($validator->fails()) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Validation errors',
    //             'errors' => $validator->errors()
    //         ], 422);
    //     }

    //     $workerDetail = new WorkerDetail();
    //     $workerDetail->address = $request->address;
    //     $workerDetail->lga = $request->lga;
    //     $workerDetail->state = $request->state;
    //     $workerDetail->country = $request->country;
    //     $workerDetail->companyUser = $request->companyUser;
    //     $workerDetail->userPhone = $request->userPhone;
    //     $workerDetail->userEmail = $request->userEmail;
    //     $workerDetail->gender = $request->gender;
    //     $workerDetail->userPosition = $request->userPosition;
    //     $workerDetail->userAddress = $request->userAddress;
    //     $workerDetail->school = $request->school;
    //     $workerDetail->schoolState = $request->schoolState;
    //     $workerDetail->degree = $request->degree;
    //     $workerDetail->course = $request->course;
    //     $workerDetail->startYear = $request->startYear;
    //     $workerDetail->endYear = $request->endYear;
    //     $workerDetail->stillSchooling = $request->stillSchooling;
        
    //     $workerDetail->save();

    //     return response()->json([
    //         'success' => true,
    //         'message' => 'Worker details saved successfully!'
    //     ], 201);
    // }

public function store(Request $request)
{
    try {
        Log::info('Request Data:', $request->all());

        // Validate the request data
        $validatedData = $request->validate([
            'address' => 'required|string',
            'lga' => 'required|string',
            'state' => 'required|string',
            'country' => 'required|string',
            'company_user' => 'required|string',
            'user_phone' => 'required|string',
            'user_email' => 'required|email',
            'gender' => 'required|string',
            'user_position' => 'required|string',
            'user_address' => 'required|string',
            'school' => 'required|string',
            'school_state' => 'required|string',
            'degree' => 'required|string',
            'course' => 'required|string',
            'start_year' => 'required|integer',
            'end_year' => 'nullable|integer',
            'still_schooling' => 'required|boolean',
        ]);

        // Create a new WorkerDetail instance
        $workerDetail = WorkerDetail::create($validatedData);

        return response()->json([
            'message' => 'Worker details saved successfully',
            'workerDetail' => $workerDetail,
        ], 201);
    } catch (\Exception $e) {
        Log::error('Error storing worker details:', ['error' => $e->getMessage()]);

        return response()->json([
            'message' => 'An error occurred while saving worker details',
            'error' => $e->getMessage(),
        ], 500);
    }
}

}