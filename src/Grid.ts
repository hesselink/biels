import { Tile } from "./Tile";
import Stage = createjs.Stage;

export class Grid {
  private tiles: Array<Array<Tile>> = [];
  static readonly gridSize: number = 32;

  constructor () {
  }

  set (gridX: number, gridY: number, tile: Tile) {
    if (!this.tiles[gridX]) this.tiles[gridX] = [];
    this.tiles[gridX][gridY] = tile;
  }

  draw (stage: Stage) {
    this.tiles.forEach((row, rowIx) => this.drawRow(stage, row, rowIx));
  }

  private drawRow (stage: Stage, row: Array<Tile>, rowIx: number) {
    row.forEach((cell, cellIx) => this.drawCell(stage, cell, rowIx, cellIx));
  }

  private drawCell (stage: Stage, cell: Tile, rowIx: number, cellIx: number) {
    cell.draw(stage, rowIx, cellIx);
  }
}
