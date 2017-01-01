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
 * eco4 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with eco4. If not, see <http://www.gnu.org/licenses/>.
 */
export class Action {

  constructor(
    public $key: string,
    public title: string,
    public todo: number,
    public done: number,  // default value 0
    public position: number,
    public description?: string,
    public date?: string) { }

  clone() {
    return new Action(
      this.$key,
      this.title,
      this.todo,
      this.done,
      this.position,
      this.description,
      this.date);
  }
}
