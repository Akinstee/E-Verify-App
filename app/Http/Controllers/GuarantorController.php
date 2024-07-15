<?php

namespace App\Http\Controllers;

use App\Models\Guarantor;
use Illuminate\Http\Request;

class GuarantorController extends Controller
{
    public function index()
    {
        $guarantors = Guarantor::all();
        return response()->json($guarantors);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'worker_id' => 'required|exists:workers,id',
            'name' => 'required|string|max:255',
            'occupation' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        $guarantor = Guarantor::create($validatedData);
        return response()->json($guarantor, 201);
    }

    public function show(Guarantor $guarantor)
    {
        return response()->json($guarantor);
    }

    public function update(Request $request, Guarantor $guarantor)
    {
        $validatedData = $request->validate([
            'name' => 'string|max:255',
            'occupation' => 'string|max:255',
            'phone_number' => 'string|max:255',
            'email' => 'email|max:255',
        ]);

        $guarantor->update($validatedData);
        return response()->json($guarantor);
    }

    public function destroy(Guarantor $guarantor)
    {
        $guarantor->delete();
        return response()->json(null, 204);
    }
}