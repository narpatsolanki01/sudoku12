<?php

use Illuminate\Support\Facades\Route;
Route::get('/wel', function () {
    return view('welcome');
});
// Route::get('/sudoku',function(){
//     return view('sudoku');
// });

Auth::routes();

Route::get('/', [App\Http\Controllers\GameController::class, 'index'])->name('home');
Route::get('/{id}',[App\Http\Controllers\GameController::class,'create'])->name('create');
