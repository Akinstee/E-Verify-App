<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function index()
    {
        $addresses = Address::all();
        return response()->json($addresses);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'addressable_type' => 'required|string',
            'address_id' => 'required|integer',
            'address_line_1' => 'required|string|max:255',
            'address_line_2' => 'nullable|string|max:255',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'postal_code' => 'nullable|string|max:255',
        ]);

        $address = Address::create($validatedData);
        return response()->json($address, 201);
    }

    public function show(Address $address)
    {
        return response()->json($address);
    }

    public function update(Request $request, Address $address)
    {
        $validatedData = $request->validate([
            'address_line_1' => 'string|max:255',
            'address_line_2' => 'nullable|string|max:255',
            'city' => 'string|max:255',
            'state' => 'string|max:255',
            'country' => 'string|max:255',
            'postal_code' => 'nullable|string|max:255',
        ]);

        $address->update($validatedData);
        return response()->json($address);
    }

    public function destroy(Address $address)
    {
        $address->delete();
        return response()->json(null, 204);
    }
}