@include('header')
    <section>
        <div id="showgame">
        <!-- Up Nav -->
            <div class="d-flex justify-content-around mb-3 m-auto text-center  mt-4" style="width: 100%;">
                <div>
                    <p>Score</p>
                    <h6 id="scored">0</h6>
                </div>
                <div>
                    <p>Mistakes</p>
                    <h6 class="text-danger"><span id="error" class="text-dark">0</span>/3</h6>
                </div>
                
                <div>
                    <p>Time</p>
                    <h6 id="timeset" class="p-0">
                         <span id="mintes">00</span>
                        : <span id="second">00</span>
                    </h6>
                </div>
            </div>
            <!-- Sudoku Table -->
            <table id="gamebox" class="">
            </table>
            <!-- Down Nav -->
            <div class="mt-5 text-center d-flex justify-content-around w-100 m-auto">
                <div id="lastErase">
                    <i class="icons  fa-solid fa-eraser" style="font-size: 30px;"></i>
                    <p>Erase</p>
                </div>
                <div>
                    <i class="icons fa-solid fa-pen-to-square" style="font-size: 30px;"></i>
                    <p>Notes</p>
                </div>
                <div id="hints_1">
                    <i class="icons fa-regular fa-lightbulb" style="font-size: 35px;"></i>
                    <p>Hint</p>
                </div>
            </div>
            <!-- Digit Nav -->
            <div id="button_digit" class="w-100 px-2   mt-3">
            </div>
        </div>
    </section>
    <!-- Error Handling  -->
    <section class=" m-auto " id="lost_game">
       <div class="d-flex h-100 justify-content-center m-auto align-items-center  w-100 px-3">
            <div id="lost_popup">
                <div class="card p-3 m-auto rounded d-flex justify-content-around align-items-center">
                <div class="card-body text-center">
                    <h4 class="mb-4">Game Over</h4>
                    <p class="mb-4">You have Made 3 Mistakes and Lost this game</p>
                    <div class=" d-flex justify-content-between">
                                <a href="{{route('create',[$id=1])}}">
                                    <button type="text" class=" btn btn-primary">New Game</button>
                                </a>
                         <button type="button" class="btn btn-primary" id="newgame_btn">Retry</button>
                        
                    </div>
                </div>
            </div>
            </div>
       </div>
    </section>
    <script>
        var data={{ json_encode($game['value'])}};
        var solution1 = {{ json_encode($game['solution']) }};
    </script>
         @include('footer')




