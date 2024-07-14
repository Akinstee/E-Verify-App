<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class CompanyController extends Controller
{
    public function signUp(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:companies',
            'organization' => 'required|string|max:255',
            'company_size' => 'required|string|max:255',
            'password' => 'required|string|min:8|confirmed',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Store company data
        $company = new Company();
        $company->name = $request->name;
        $company->email = $request->email;
        $company->organization = $request->organization;
        $company->company_size = $request->company_size;
        $company->password = Hash::make($request->password);

        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('logos', 'public');
            $company->logo = $logoPath;
        }

        $company->save();

        return response()->json(['message' => 'Company registered successfully'], 201);
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

        $company = Company::where('email', $request->email)->first();

        if (!$company || !Hash::check($request->password, $company->password)) {
            return response()->json(['message' => 'Invalid email or password'], 401);
        }

        return response()->json([
            'message' => 'Company signed in successfully',
            'company' => $company,
        ], 200);
    }

}