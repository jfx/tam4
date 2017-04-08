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
export class Decimal {

    public static round(value: number, precision: number): number {
        const multiplier = Math.pow(10, precision);
        return Math.round(value * multiplier) / multiplier;
    }

    public static countDecimals(value: number): number {
        if ((value % 1) !== 0) {
            return value.toString().split('.')[1].length;
        }
        return 0;
    }
}
