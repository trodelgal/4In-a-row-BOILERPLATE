import React, {useState,useEffect} from 'react';
import Modal from '@material-ui/core/Modal';
import Square from './Square';
function Board() {
    const [board, setBoard] = useState([[]]); 
    const [winner, setWinner] = useState();
    const [currentPlayer,setCurrentPlayer] = useState('player1');
    // const [value,setValue] = useState('player1');
 
    function emptyBoard(){
        const gameBoard = [];
        for(let i = 0; i < 7; i++){
            gameBoard[i] = [];
            for(let j = 0; j < 6; j++){
                gameBoard[i][j] = [];
            }
        };
        setBoard(gameBoard);
        setWinner(false);
    }
    useEffect(() => {
        emptyBoard();
    }, [])

    function handleClick(i){
        console.log(i);
        const newBoard = board.slice();
        console.log(newBoard[i]);
        newBoard[i]
        // let column = e.target.id.slice(6)
        // const gameBoard = board
        // console.log(gameBoard[column]);
        // for(let i=0; i<6;i++){
        //     console.log(gameBoard[column][i],i);
        //     if(){
        //         gameBoard[column][i]=currentPlayer 
        //         break;
        //     }
        // }
        currentPlayer === 'player1'? setCurrentPlayer('player2'):setCurrentPlayer('player1');
        // gameBoard[column][index][0]=value;
        // setBoard(gameBoard)
        // blueIsNext? setValue('player2'): setValue('player1');
        // setBlueIsNext(lastValue=> !lastValue)
    }
  return (
      <>
    <div className="Board">
        {
            board.map((column, i) => {
                return( 
                <>
                {i===0&& <div className="divider" />} {/* the red column separating each column */}
                <div className="Column" id={`column${i}`} onClick={()=>handleClick(i)}>
                {column[0]}
                {
                    
                    column.map((value,i)=>{
                        return(
                           <div className='square' id={`square${i}`}>
                           </div>
                        )
                    })
                }
                </div>
                <div className="divider" /> {/* the red column separating each column */}
                </>
                )
            })
        }
    </div>

            <Modal open={winner? true : false} onClose={()=> {emptyBoard();}}>
                <div className ='winModal'>
                    <h2>Game Finished !</h2>
                    <h2>{winner ==='tie'? 'A Tie !':`Winner is: player ${winner}`}</h2>
                </div>
            </Modal>
        </>

  );
}


export default Board;
