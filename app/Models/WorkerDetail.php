<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkerDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'address', 'lga', 'state', 'country', 'company_user', 'user_phone',
        'user_email', 'gender', 'user_position', 'user_address', 'school',
        'school_state', 'degree', 'course', 'start_year', 'end_year', 'still_schooling'
    ];

    protected $casts = [
        'still_schooling' => 'boolean',
    ];
}