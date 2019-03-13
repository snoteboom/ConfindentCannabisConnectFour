import React, { Component } from 'react';
import '../styles/App.css';
import Board from "../Elements/Board"
import RestartButton from "../Elements/RestartButton"
import EndMessage from "../Elements/EndMessage"
class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            board: [],
            currentPlayer: 1,
            winner: null,
            endMessage: null,
            error: false
        }
    }

    componentDidMount(){
        this.startNewGame()
    }

    slotSelected = (columnIndex) =>{
        if(!this.state.endMessage){
            var board = [...this.state.board]
            for (let row = 5; row >= 0; row--) {
                if (!board[row][columnIndex]) {
                    board[row][columnIndex] = this.state.currentPlayer;
                    break;
                }
            }
            this.setState({
                board,
                currentPlayer: this.state.currentPlayer === 1? 2: 1
            },()=>{
                this.checkForWin()
            })
        }else{
            this.setState({
                endMessage: "Please Restart Game to play again",
                error: true
            })
        }
    }

    startNewGame = () =>{
        let board = [];
        for (let r = 0; r < 6; r++) {
            let row = [];
            for (let c = 0; c < 7; c++) { row.push(null) }
            board.push(row);
        }
        this.setState({
            board,
            currentPlayer: 1,
            winner: null,
            endMessage: null,
            error: false
        })
    }

    checkRows(board) {
        //check if rows have matches
        for (let row = 3;row< 6; row++) {
            for (let c = 0; c < 7; c++) {
                if (board[row][c]) {
                    if (board[row][c] === board[row - 1][c] &&
                        board[row][c] === board[row - 2][c] &&
                        board[row][c] === board[row - 3][c]) {
                        return board[row][c];
                    }
                }
            }
        }
    }

    checkColumns(board) {
        //check if columns have match
        for (let row = 0; row < 6; row++) {
            for (let c = 0; c < 4; c++) {
                if (board[row][c]) {
                    if (board[row][c] === board[row][c + 1] &&
                        board[row][c] === board[row][c + 2] &&
                        board[row][c] === board[row][c + 3]) {
                        return board[row][c];
                    }
                }
            }
        }
    }

    checkDiagonals(board) {
        var results = [null, null]
        //Checks Diagonal Left first, then right
        for (let row = 3; row < 6; row++) {
            for (let c = 3; c < 7; c++) {
                if (board[row][c]) {
                    if (board[row][c] === board[row - 1][c - 1] &&
                        board[row][c] === board[row - 2][c - 2] &&
                        board[row][c] === board[row - 3][c - 3]) {
                        results[0] = board[row][c];
                    }
                }
            }
            for (let c = 0; c < 4; c++) {
                if (board[row][c]) {
                    if (board[row][c] === board[row - 1][c + 1] &&
                        board[row][c] === board[row - 2][c + 2] &&
                        board[row][c] === board[row - 3][c + 3]) {
                        results[1] = board[row][c];
                    }
                }
            }
        }
        return results
    }

    checkForWin() {
        var board = [...this.state.board]
        var results =  [...this.checkDiagonals(board), this.checkRows(board), this.checkColumns(board)]
        var msg = null
        if(results.includes(1) || results.includes(2)) {
            var winner = results.includes(1) ? 1 : 2
            msg = `Congratulations ${winner === 1? "Black" : "Red"}, You won!`
            this.setState({
                winner: winner,
                endMessage: msg
            })
        }
    }

  render() {

    return (
      <div className="App">
          <h1 className="Title-Text">Welcome to Connect Four</h1>
          <EndMessage error={this.state.error} msg={this.state.endMessage || `${this.state.currentPlayer === 1? "Black": "Red"}'s turn`}/>
          <RestartButton restartGame={this.startNewGame}/>
          <Board board={this.state.board} slotSelected={this.slotSelected} />
      </div>
    );
  }
}

export default App;
