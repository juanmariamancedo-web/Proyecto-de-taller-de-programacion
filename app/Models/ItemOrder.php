<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemOrder extends Model
{
    protected $table = "item_orders";

    protected $fillable = [
        "amount",
        "unit_price",
        "product_id",
        "order_id"
    ];

    public function itemOrders(){
        return $this->hasMany(ItemOrder::class);
    }
}
