<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Worker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class WorkerController extends Controller
{
    public function signUp(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:companies',
            'career' => 'required|string|max:255',
            'password' => 'required|string|min:8|confirmed',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Store worker data
        $worker = new Worker();
        $worker->name = $request->name;
        $worker->email = $request->email;
        $worker->career = $request->career;
        $worker->password = Hash::make($request->password);

        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('logos', 'public');
            $worker->logo = $logoPath;
        }

        $worker->save();

        return response()->json(['message' => 'Worker registered successfully'], 201);
    }

    public function signIn(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $worker = Worker::where('email', $request->email)->first();

        if (!$worker || !Hash::check($request->password, $worker->password)) {
            return response()->json(['message' => 'Invalid email or password'], 401);
        }

        return response()->json([
            'message' => 'Worker signed in successfully',
            'worker' => $worker,
        ], 200);
    }

}