<?php

// app/Http/Controllers/WorkerVerificationController.php

namespace App\Http\Controllers;

use App\Models\WorkerVerification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class WorkerVerificationController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'worker_id' => 'required|exists:workers,id',
            'photo' => 'required|string',
            'identification_number' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'year_issued' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $verification = WorkerVerification::create($request->all());

        return response()->json(['message' => 'Verification added successfully', 'verification' => $verification], 201);
    }

    public function show($id)
    {
        $verification = WorkerVerification::findOrFail($id);
        return response()->json($verification);
    }

    public function update(Request $request, $id)
    {
        $verification = WorkerVerification::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'photo' => 'sometimes|required|string',
            'identification_number' => 'sometimes|required|string|max:255',
            'issuer' => 'sometimes|required|string|max:255',
            'year_issued' => 'sometimes|required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $verification->update($request->all());

        return response()->json(['message' => 'Verification updated successfully', 'verification' => $verification]);
    }

    public function destroy($id)
    {
        $verification = WorkerVerification::findOrFail($id);
        $verification->delete();

        return response()->json(['message' => 'Verification deleted successfully']);
    }
}