<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class CompanyController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:companies',
            'organization' => 'nullable|string|max:255',
            'company_size' => 'nullable|string|max:255',
            'password' => 'required|string|min:8|confirmed',
            'logo' => 'nullable|image|max:2048',  // Validation for logo
        ]);

        if ($request->hasFile('logo')) {
            $path = $request->file('logo')->store('logos', 'public');
        } else {
            $path = null;
        }

        $company = Company::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'organization' => $validated['organization'],
            'company_size' => $validated['company_size'],
            'password' => Hash::make($validated['password']),
            'logo' => $path,
        ]);

        return response()->json($company, 201);
    }
}