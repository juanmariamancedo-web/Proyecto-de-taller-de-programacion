<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item_order extends Model
{
    protected $table = "item_orders";

    protected $fillable = [
        "amount",
        "unit_price",
        "product_id"
    ];

    public function itemOrders(){
        return $this->hasMany(ItemOrder::class);
    }
}
