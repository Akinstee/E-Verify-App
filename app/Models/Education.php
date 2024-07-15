<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $fillable = [
        'worker_id', 'school', 'state', 'degree', 'nation', 'course',
        'start_year', 'finish_year', 'currently_studying',
    ];

    public function worker()
    {
        return $this->belongsTo(Worker::class);
    }
}