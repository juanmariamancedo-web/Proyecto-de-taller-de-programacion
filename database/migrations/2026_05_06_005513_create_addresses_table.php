<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('state');          // provincia
            $table->string('city');           // ciudad
            $table->string('postal_code');    // mejor string
            $table->string('street');         // calle
            $table->integer('number');        // numero
            $table->string('floor')->nullable();        // piso
            $table->string('apartment')->nullable();    // departamento

            // Un usuario podria poseer n domicilios
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            $table->timestamps();
        });
    }

    //Devuelve el usuario asociado
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function down(): void
    {
        Schema::dropIfExists('addresses');
    }
};