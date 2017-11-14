<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/items', 'ItemController@postItem');
Route::get('/items', 'ItemController@index');
Route::get('/items/{id}/edit', 'ItemController@getEdit');
Route::post('/items/{id}/update', 'ItemController@postUpdate');
Route::get('/items/{id}/delete', 'ItemController@getDelete');
