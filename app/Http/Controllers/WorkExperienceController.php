<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WorkExperience;

class WorkExperienceController extends Controller
{
    public function index()
    {
        $workExperiences = WorkExperience::all();
        return response()->json($workExperiences);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'worker_id' => 'required|exists:workers,id',
            'company' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
            'country' => 'required|string|max:255',
            'currently_working' => 'boolean',
            'salary' => 'nullable|numeric',
            'job_description' => 'required|string',
        ]);

        $workExperience = WorkExperience::create($validatedData);
        return response()->json($workExperience, 201);
    }

    public function show(WorkExperience $workExperience)
    {
        return response()->json($workExperience);
    }

    public function update(Request $request, WorkExperience $workExperience)
    {
        $validatedData = $request->validate([
            'company' => 'string|max:255',
            'position' => 'string|max:255',
            'start_date' => 'date',
            'end_date' => 'nullable|date',
            'country' => 'string|max:255',
            'currently_working' => 'boolean',
            'salary' => 'nullable|numeric',
            'job_description' => 'string',
        ]);

        $workExperience->update($validatedData);
        return response()->json($workExperience);
    }

    public function destroy(WorkExperience $workExperience)
    {
        $workExperience->delete();
        return response()->json(null, 204);
    }
}