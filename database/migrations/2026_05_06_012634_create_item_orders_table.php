<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('item_orders', function (Blueprint $table) {
            $table->id();
            $table->integer("amount");
            $table->float('unit_price', 8, 2);
            $table->timestamps();

            $table->foreignId('product_id')->unique()->constrained()->onDelete('cascade');
            $table->foreignId('order_id')->unique()->constrained()->onDelete('cascade');
        });
    }

    //Devuelve el producto asociado
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    //Devuelve el producto asociado
    public function product()
    {
        return $this->belongsTo(Item_order::class);
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('item_orders');
    }
};
