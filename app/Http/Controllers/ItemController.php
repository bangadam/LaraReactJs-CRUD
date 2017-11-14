<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;

class ItemController extends Controller
{
    public function index() {
        $item = Item::all();
        return response()->json($item);
    }

    public function postItem(Request $request) {
        $item = Item::create([
            'name' => $request['name'],
            'price' => $request['price'],
        ]);

        $item->save();
        return response()->json('Successfully added');
    }

    public function getEdit($id) {
        $item = Item::find($id);
        return response()->json($item);
    }

    public function postUpdate(Request $request, $id) {
        $item = Item::find($id);
        $item->update([
            'name' => $request['name'],
            'price' => $request['price'],
        ]);
        return response()->json($item);
    }

    public function getDelete($id) {
        $item = Item::find($id)->delete();
        return response()->json('Succesfully deleted');
    }
}
