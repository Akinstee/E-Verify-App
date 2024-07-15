<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

// class Worker extends Model
// {
//     use HasFactory;

//     protected $fillable = [
//         'name', 'surname', 'email', 'phone_number', 'age', 'race', 'gender', 'disability', 'address1', 'address2',
//     ];

//     public function verifications()
//     {
//         return $this->hasMany(WorkerVerification::class);
//     }

//     public function user()
//     {
//         return $this->belongsTo(User::class);
//     }

//     public function workExperiences()
//     {
//         return $this->hasMany(WorkExperience::class);
//     }

//     public function education()
//     {
//         return $this->hasMany(Education::class);
//     }

//     public function certifications()
//     {
//         return $this->hasMany(Certification::class);
//     }

//     public function guarantors()
//     {
//         return $this->hasMany(Guarantor::class);
//     }

//     public function applications()
//     {
//         return $this->hasMany(Application::class);
//     }

//     public function addresses()
//     {
//         return $this->hasMany(Address::class);
//     }

// }

class Worker extends Authenticatable
{
    use HasFactory, Notifiable;


    protected $table = 'workers';

    protected $fillable = [
        'name',
        'email',
        'career',
        'password',
        'logo',
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // public function verifications()
    // {
    //     return $this->hasMany(WorkerVerification::class);
    // }

    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }

    // public function workExperiences()
    // {
    //     return $this->hasMany(WorkExperience::class);
    // }

    // public function education()
    // {
    //     return $this->hasMany(Education::class);
    // }

    // public function certifications()
    // {
    //     return $this->hasMany(Certification::class);
    // }

    // public function guarantors()
    // {
    //     return $this->hasMany(Guarantor::class);
    // }

    // public function applications()
    // {
    //     return $this->hasMany(Application::class);
    // }

    // public function addresses()
    // {
    //     return $this->hasMany(Address::class);
    // }

}