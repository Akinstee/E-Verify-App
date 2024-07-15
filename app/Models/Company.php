<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

// class Company extends Model
// {
//     use HasFactory;
// }

class Company extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    
     protected $table = 'companies';
     
     protected $fillable = [
        'name',
        'email',
        'organization',
        'company_size',
        'password',
        'logo',
        'license', 
        'issuer', 
        'business_registration_number', 
        'year_issued',
        
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

    public function users()
    {
        return $this->hasMany(AdminUser::class);
    }

    public function licenses()
    {
        return $this->hasMany(License::class);
    }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}