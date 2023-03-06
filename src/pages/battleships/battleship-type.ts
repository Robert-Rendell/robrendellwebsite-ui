/**
 * No.	Class of ship	 Size
 * 1	  Carrier	       5
 * 2	  Battleship	   4
 * 3	  Cruiser	       3
 * 4	  Submarine	     3
 * 5	  Destroyer	     2
 */
export const Battleship = {
  Carrier: 5,
  Battleship: 4,
  Cruiser: 3,
  Submarine: 3,
  Destroyer: 2,
  "": -1,
};

export type BattleshipType = keyof typeof Battleship;
