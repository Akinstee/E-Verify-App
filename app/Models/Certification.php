<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    protected $fillable = [
        'worker_id', 'certificate', 'issuer', 'year_issued',
    ];

    public function worker()
    {
        return $this->belongsTo(Worker::class);
    }
}