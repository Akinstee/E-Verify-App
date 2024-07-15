<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

// class JobController extends Controller
// {
//     public function __construct()
//     {
//         $this->middleware('auth:company');
//     }

//     public function index()
//     {
//         $jobs = Job::where('company_id', Auth::id())->get();
//         return response()->json($jobs);
//     }

//     public function store(Request $request)
//     {
//         $validator = Validator::make($request->all(), [
//             'title' => 'required|string|max:255',
//             'description' => 'required|string',
//             'location' => 'required|string',
//             'type' => 'required|in:full-time,part-time,contract',
//             'salary' => 'required|numeric',
//         ]);

//         if ($validator->fails()) {
//             return response()->json($validator->errors(), 400);
//         }

//         $job = Job::create([
//             'company_id' => Auth::id(),
//             'title' => $request->title,
//             'description' => $request->description,
//             'location' => $request->location,
//             'type' => $request->type,
//             'salary' => $request->salary,
//         ]);

//         return response()->json(['message' => 'Job posted successfully', 'job' => $job], 201);
//     }

//     public function show($id)
//     {
//         $job = Job::where('company_id', Auth::id())->findOrFail($id);
//         return response()->json($job);
//     }

//     public function update(Request $request, $id)
//     {
//         $job = Job::where('company_id', Auth::id())->findOrFail($id);

//         $validator = Validator::make($request->all(), [
//             'title' => 'sometimes|required|string|max:255',
//             'description' => 'sometimes|required|string',
//             'location' => 'sometimes|required|string',
//             'type' => 'sometimes|required|in:full-time,part-time,contract',
//             'salary' => 'sometimes|required|numeric',
//         ]);

//         if ($validator->fails()) {
//             return response()->json($validator->errors(), 400);
//         }

//         $job->update($request->all());

//         return response()->json(['message' => 'Job updated successfully', 'job' => $job]);
//     }

//     public function destroy($id)
//     {
//         $job = Job::where('company_id', Auth::id())->findOrFail($id);
//         $job->delete();

//         return response()->json(['message' => 'Job deleted successfully']);
//     }
// }

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::all();
        return response()->json($jobs);
    }

// app/Http/Controllers/JobController.php (continued)

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'company_id' => 'required|exists:companies,id',
            'title' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'status' => 'required|in:Full-time,Part-time,Contract',
            'salary' => 'required|numeric',
            'description' => 'required|string',
            'posting_end_date' => 'required|date',
        ]);

        $job = Job::create($validatedData);
        return response()->json($job, 201);
    }

    public function show(Job $job)
    {
        return response()->json($job);
    }

    public function update(Request $request, Job $job)
    {
        $validatedData = $request->validate([
            'title' => 'string|max:255',
            'country' => 'string|max:255',
            'state' => 'string|max:255',
            'status' => 'in:Full-time,Part-time,Contract',
            'salary' => 'numeric',
            'description' => 'string',
            'posting_end_date' => 'date',
        ]);

        $job->update($validatedData);
        return response()->json($job);
    }

    public function destroy(Job $job)
    {
        $job->delete();
        return response()->json(null, 204);
    }
}