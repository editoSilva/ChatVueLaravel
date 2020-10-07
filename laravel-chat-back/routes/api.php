<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Events\SendMessage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/send-message', function (Request $request) {
    event(new SendMessage($request->all()));
    return 'ok';
});
