export const enum TileType
  { Straight
  , Corner
  }

export function toImage (type: TileType) {
  switch (type)
  {
    case TileType.Straight:
      return new createjs.Bitmap("images/straight.png");
    case TileType.Corner:
      return new createjs.Bitmap("images/corner.png");
  }
}
