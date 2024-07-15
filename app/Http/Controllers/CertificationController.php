<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Certification;

class CertificationController extends Controller
{
    public function index()
    {
        $certifications = Certification::all();
        return response()->json($certifications);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'worker_id' => 'required|exists:workers,id',
            'certificate' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'year_issued' => 'required|integer',
        ]);

        $certification = Certification::create($validatedData);
        return response()->json($certification, 201);
    }

    public function show(Certification $certification)
    {
        return response()->json($certification);
    }

    public function update(Request $request, Certification $certification)
    {
        $validatedData = $request->validate([
            'certificate' => 'string|max:255',
            'issuer' => 'string|max:255',
            'year_issued' => 'integer',
        ]);

        $certification->update($validatedData);
        return response()->json($certification);
    }

    public function destroy(Certification $certification)
    {
        $certification->delete();
        return response()->json(null, 204);
    }
}