<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guarantor extends Model
{
    protected $fillable = [
        'worker_id', 'name', 'occupation', 'phone_number', 'email',
    ];

    public function worker()
    {
        return $this->belongsTo(Worker::class);
    }
}