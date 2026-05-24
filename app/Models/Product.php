<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "products";

     protected $fillable = [
        "name",
        "price",
        "stock",
        "low_stock",
        "image", 
        "is_active"
    ];
}
