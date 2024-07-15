<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id', 'name', 'phone_number', 'email', 'gender', 'position', 'address',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}