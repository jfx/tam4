/**
 * Copyright (c) 2017 Francois-Xavier Soubirou.
 *
 * This file is part of tam4.
 *
 * tam4 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * tam4 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with tam4. If not, see <http://www.gnu.org/licenses/>.
 */
import { Decimal } from './decimal';

export class PositionArray {

  public static sort(array: Array<any>): void {
    array.sort((a, b): number => {
      if (a.position < b.position) { return 1; }
      if (a.position > b.position) { return -1; }
      return 0;
    });
  }

  public static getNextPosition(array: Array<any>): number {
    if (array.length === 0) {
      return 1;
    } else {
      let maxPosition = array[0].position;
      for (let i = 1; i < array.length; i++) {
        if (array[i].position > maxPosition) {
          maxPosition = array[i].position;
        }
      }
      return Math.ceil(maxPosition + 1);
    }
  }

  public static getFirstPosition(array: Array<any>): number {
    if (array.length === 0) {
      return 1;
    } else {
      let minPosition = array[0].position;
      for (let i = 1; i < array.length; i++) {
        if (array[i].position < minPosition) {
          minPosition = array[i].position;
        }
      }
      return Math.floor(minPosition - 1);
    }
  }

  public static getPositionAt(array: Array<any>, index: number): number {
    const p1 = array[index - 1].position;
    const p2 = array[index + 1].position;

    const pMin = Math.min(p1, p2);
    const pMax = Math.max(p1, p2);
    if (pMin === pMax) {
      return pMin;
    }
    let decimal = Math.min(Decimal.countDecimals(p1), Decimal.countDecimals(p2));
    const pNew = (pMax - pMin) / 2 + pMin;
    let p = Decimal.round(pNew, decimal);

    while (!((pMin < p) && (p < pMax))) {
      decimal++;
      p = Decimal.round(pNew, decimal);
    }
    return p;
  }
}
