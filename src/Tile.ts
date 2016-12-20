import { Grid } from "./Grid"
import { TileType } from "./TileType"
import { Rotation } from "./Rotation"
import * as TT from "./TileType"
import Stage = createjs.Stage;

export class Tile {
  type: TileType;
  rotation: Rotation;

  constructor (type: TileType, rotation: Rotation = Rotation.None) {
    this.type = type;
    this.rotation = rotation;
  }

  draw (stage: Stage, rowIx: number, cellIx: number) {
    let image = TT.toImage(this.type);
    image.x = rowIx * Grid.gridSize + 16;
    image.y = cellIx * Grid.gridSize + 16;
    image.regX = 16;
    image.regY = 16;
    image.rotation = this.rotation;
    stage.addChild(image);
  }
}
