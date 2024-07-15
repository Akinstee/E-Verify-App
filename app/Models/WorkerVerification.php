<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkerVerification extends Model
{
    use HasFactory;
    protected $fillable = [
        'worker_id', 'photo', 'identification_number', 'issuer', 'year_issued',
    ];

    public function worker()
    {
        return $this->belongsTo(Worker::class);
    }
}