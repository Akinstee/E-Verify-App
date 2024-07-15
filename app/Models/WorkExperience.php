<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkExperience extends Model
{
    protected $fillable = [
        'worker_id', 'company', 'position', 'start_date', 'end_date',
        'country', 'currently_working', 'salary', 'job_description',
    ];

    public function worker()
    {
        return $this->belongsTo(Worker::class);
    }
}