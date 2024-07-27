<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkerDetailsTable extends Migration
{
    public function up()
    {
        Schema::create('worker_details', function (Blueprint $table) {
            $table->id();
            $table->string('address');
            $table->string('lga');
            $table->string('state');
            $table->string('country');
            $table->string('company_user');
            $table->string('user_phone');
            $table->string('user_email');
            $table->string('gender');
            $table->string('user_position');
            $table->string('user_address');
            $table->string('school');
            $table->string('school_state');
            $table->string('degree');
            $table->string('course');
            $table->string('start_year');
            $table->string('end_year');
            $table->boolean('still_schooling');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('worker_details');
    }
}