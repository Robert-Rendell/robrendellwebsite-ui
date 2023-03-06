import React from "react";
import { Battleship, BattleshipType } from "../battleship-type";

type Props = {
  selectedShipState: [BattleshipType, React.Dispatch<React.SetStateAction<BattleshipType>>];
};
export function BattleshipsConfigurationToolsComponent(props: Props) {
  const [selectedShip, setSelectedShip] = props.selectedShipState;
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              {(Object.keys(Battleship) as BattleshipType[]).map((ship, i) => {
                return (
                  <>
                    <td
                      key={`${ship}${i}`}
                      className={
                        selectedShip === ship
                          ? "battleship-selected"
                          : "battleship-selector"
                      }
                      onClick={() => setSelectedShip(ship)}
                    >
                      {ship}
                    </td>
                  </>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
