<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id', 'license', 'issuer', 'business_registration_certificate_number', 'certificate_upload', 'year_issued',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}