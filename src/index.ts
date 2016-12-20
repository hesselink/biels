// Verzoek Meike: zelf kiezen welke kleur treintje wordt.
import { Grid } from "./Grid"
import { Tile } from "./Tile"
import { TileType } from "./TileType"
import { Rotation } from "./Rotation"

var stage = new createjs.Stage("demoCanvas");

let grid = new Grid();
grid.set(1, 0, new Tile(TileType.Corner));
grid.set(2, 0, new Tile(TileType.Straight, Rotation.Left90));
grid.set(3, 0, new Tile(TileType.Corner, Rotation.Right90));
grid.set(1, 1, new Tile(TileType.Straight));
grid.set(3, 1, new Tile(TileType.Straight));
grid.set(1, 2, new Tile(TileType.Straight));
grid.set(3, 2, new Tile(TileType.Straight));
grid.set(1, 3, new Tile(TileType.Corner, Rotation.Left90));
grid.set(2, 3, new Tile(TileType.Straight, Rotation.Left90));
grid.set(3, 3, new Tile(TileType.Corner, Rotation.Half));

grid.draw(stage);
stage.update();
