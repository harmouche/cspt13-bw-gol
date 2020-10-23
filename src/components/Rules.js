import React from 'react';
import '../App.css';


class Rules extends React.Component {
    render() {
        return(
                <div className={'rules'}>
                    <h3 >Rules</h3>
                    <ul>
                    <p>The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:</p>
                    <p>1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.</p>
                    <p>2. Any live cell with two or three live neighbours lives on to the next generation.</p>
                    <p>3. Any live cell with more than three live neighbours dies, as if by overpopulation.</p>
                    <p>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>
                    <p>4. The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.</p>
                    <p></p>
                    <p></p>
                    </ul>
                </div>
        );  
    }
}

export default Rules;