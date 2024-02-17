<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $game = null;
        if(session('game'))
        {
            $game = session('game');
        }
        else{
            $game = Http::get('https://sudoku-api.vercel.app/api/dosuku')->json();
            session(['game'=>$game]);
        }

        $game =  $game['newboard']['grids'][0];
        return view('sudoku',compact('game'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($sid)
    {
        if($sid==1){
            $game = Http::get('https://sudoku-api.vercel.app/api/dosuku')->json();
            session(['game'=>$game]);
        }
        return redirect()->Route('home');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
