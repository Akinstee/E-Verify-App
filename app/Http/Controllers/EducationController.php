<?php

namespace App\Http\Controllers;

use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    public function index()
    {
        $education = Education::all();
        return response()->json($education);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'worker_id' => 'required|exists:workers,id',
            'school' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'nation' => 'required|string|max:255',
            'course' => 'required|string|max:255',
            'start_year' => 'required|integer',
            'finish_year' => 'nullable|integer',
            'currently_studying' => 'boolean',
        ]);

        $education = Education::create($validatedData);
        return response()->json($education, 201);
    }

    public function show(Education $education)
    {
        return response()->json($education);
    }

    public function update(Request $request, Education $education)
    {
        $validatedData = $request->validate([
            'school' => 'string|max:255',
            'state' => 'string|max:255',
            'degree' => 'string|max:255',
            'nation' => 'string|max:255',
            'course' => 'string|max:255',
            'start_year' => 'integer',
            'finish_year' => 'nullable|integer',
            'currently_studying' => 'boolean',
        ]);

        $education->update($validatedData);
        return response()->json($education);
    }

    public function destroy(Education $education)
    {
        $education->delete();
        return response()->json(null, 204);
    }
}