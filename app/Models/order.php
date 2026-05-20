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

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function itemOrders()
    {
        return $this->hasMany(Item_Order::class);
    }
}
