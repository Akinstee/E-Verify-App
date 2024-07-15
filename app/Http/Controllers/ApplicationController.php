<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function index()
    {
        $applications = Application::all();
        return response()->json($applications);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'job_id' => 'required|exists:jobs,id',
            'worker_id' => 'required|exists:workers,id',
            'status' => 'required|in:Applied,Under Review,Interviewed,Offered,Rejected',
        ]);

        $application = Application::create($validatedData);
        return response()->json($application, 201);
    }

    public function show(Application $application)
    {
        return response()->json($application);
    }

    public function update(Request $request, Application $application)
    {
        $validatedData = $request->validate([
            'status' => 'in:Applied,Under Review,Interviewed,Offered,Rejected',
        ]);

        $application->update($validatedData);
        return response()->json($application);
    }

    public function destroy(Application $application)
    {
        $application->delete();
        return response()->json(null, 204);
    }
}