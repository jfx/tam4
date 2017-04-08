/* tslint:disable:no-unused-variable */
import { Action } from 'app/personal/shared/action.model';
import { PositionArray } from './position-array';

describe('PositionArray', () => {

  let actions: Action[];

  beforeEach(() => {
    actions = [
      new Action('41', '', 'Title 1', 1, 2, 2, 'Desc 1'),
      new Action('42', '', 'Title 2', 3, 4, 1, 'Desc 2', '2016-12-31'),
      new Action('43', '', 'Title 3', 1, 2, 4),
      new Action('44', '', 'Title 4', 3, 4, 3, 'Desc 4', '2016-12-31'),
    ];
  });

  it('Array should be ordered by position', () => {
    const sortedActions = [
      new Action('43', '', 'Title 3', 1, 2, 4),
      new Action('44', '', 'Title 4', 3, 4, 3, 'Desc 4', '2016-12-31'),
      new Action('41', '', 'Title 1', 1, 2, 2, 'Desc 1'),
      new Action('42', '', 'Title 2', 3, 4, 1, 'Desc 2', '2016-12-31'),
    ];
    PositionArray.sort(actions);
    expect(actions).toEqual(sortedActions);
  });

  it('Next position should be 1 for empty array', () => {
    expect(PositionArray.getNextPosition([])).toEqual(1);
  });

  it('Next position should be max position + 1', () => {
    expect(PositionArray.getNextPosition(actions)).toEqual(5);
  });

  it('Next position should be max position + 1 next integer', () => {
    expect(PositionArray.getNextPosition([new Action('43', '', 'Title 3', 1, 2, 3.6)])).toEqual(5);
  });

  it('Next position should be max position + 1 for negative value', () => {
    expect(PositionArray.getNextPosition([new Action('43', '', 'Title 3', 1, 2, -3)])).toEqual(-2);
  });

  it('Next position should be max position + 1 next integer', () => {
    expect(PositionArray.getNextPosition([new Action('43', '', 'Title 3', 1, 2, -3.5)])).toEqual(-2);
  });

  it('First position should be 1 for empty array', () => {
    expect(PositionArray.getFirstPosition([])).toEqual(1);
  });

  it('First position should be min position - 1', () => {
    expect(PositionArray.getFirstPosition(actions)).toEqual(0);
  });

  it('First position should be min position - 1 previous integer', () => {
    expect(PositionArray.getFirstPosition([new Action('43', '', 'Title 3', 1, 2, 3.6)])).toEqual(2);
  });

  it('First position should be min position - 1 for negative value', () => {
    expect(PositionArray.getFirstPosition([new Action('43', '', 'Title 3', 1, 2, -3)])).toEqual(-4);
  });

  it('First position should be max position -1 previous integer', () => {
    expect(PositionArray.getFirstPosition([new Action('43', '', 'Title 3', 1, 2, -3.5)])).toEqual(-5);
  });

  it('Position between 2 integers', () => {
    const positions = [
      new Action('43', '', 'Title 3', 1, 2, 4),
      new Action('42', '', 'Title 2', 3, 4, 0),
      new Action('41', '', 'Title 1', 1, 2, 2),
    ];
    expect(PositionArray.getPositionAt(positions, 1)).toEqual(3);
  });

  it('Position between 2 equal integers', () => {
    const positions = [
      new Action('43', '', 'Title 3', 1, 2, 4),
      new Action('42', '', 'Title 2', 3, 4, 0),
      new Action('41', '', 'Title 1', 1, 2, 4),
    ];
    expect(PositionArray.getPositionAt(positions, 1)).toEqual(4);
  });

  it('Position between 2 decimals', () => {
    const positions = [
      new Action('43', '', 'Title 3', 1, 2, 3.5),
      new Action('42', '', 'Title 2', 3, 4, 0),
      new Action('41', '', 'Title 1', 1, 2, 3.7),
    ];
    expect(PositionArray.getPositionAt(positions, 1)).toEqual(3.6);
  });

  it('Position between 2 decimals', () => {
    const positions = [
      new Action('43', '', 'Title 3', 1, 2, 3.5),
      new Action('42', '', 'Title 2', 3, 4, 0),
      new Action('41', '', 'Title 1', 1, 2, 3.6),
    ];
    expect(PositionArray.getPositionAt(positions, 1)).toEqual(3.55);
  });

  it('Position between 2 decimals', () => {
    const positions = [
      new Action('43', '', 'Title 3', 1, 2, 3.50),
      new Action('42', '', 'Title 2', 3, 4, 0),
      new Action('41', '', 'Title 1', 1, 2, 3.51),
    ];
    expect(PositionArray.getPositionAt(positions, 1)).toEqual(3.505);
  });

  it('Position between 2 negative integers', () => {
    const positions = [
      new Action('43', '', 'Title 3', 1, 2, -4),
      new Action('42', '', 'Title 2', 3, 4, 0),
      new Action('41', '', 'Title 1', 1, 2, -2),
    ];
    expect(PositionArray.getPositionAt(positions, 1)).toEqual(-3);
  });

  it('Position between 2 equal negative integers', () => {
    const positions = [
      new Action('43', '', 'Title 3', 1, 2, -4),
      new Action('42', '', 'Title 2', 3, 4, 0),
      new Action('41', '', 'Title 1', 1, 2, -4),
    ];
    expect(PositionArray.getPositionAt(positions, 1)).toEqual(-4);
  });

  it('Position between 2 negative decimals', () => {
    const positions = [
      new Action('43', '', 'Title 3', 1, 2, -3.5),
      new Action('42', '', 'Title 2', 3, 4, 0),
      new Action('41', '', 'Title 1', 1, 2, -3.7),
    ];
    expect(PositionArray.getPositionAt(positions, 1)).toEqual(-3.6);
  });

  it('Position between 2 negative decimals', () => {
    const positions = [
      new Action('43', '', 'Title 3', 1, 2, -3.5),
      new Action('42', '', 'Title 2', 3, 4, 0),
      new Action('41', '', 'Title 1', 1, 2, -3.6),
    ];
    expect(PositionArray.getPositionAt(positions, 1)).toEqual(-3.55);
  });

  it('Position between 2 negative decimals', () => {
    const positions = [
      new Action('43', '', 'Title 3', 1, 2, -3.50),
      new Action('42', '', 'Title 2', 3, 4, 0),
      new Action('41', '', 'Title 1', 1, 2, -3.51),
    ];
    expect(PositionArray.getPositionAt(positions, 1)).toEqual(-3.505);
  });
});
