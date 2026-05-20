<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    protected $table = "orders";

    protected $fillable = [
        "state",
        "user_id"
    ];
}
