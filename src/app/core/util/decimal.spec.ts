/* tslint:disable:no-unused-variable */
import { Decimal } from './decimal';

describe('Decimal', () => {

  it('4 should be rounded with precision 2 to 4', () => {
    expect(Decimal.round(4, 2)).toBe(4);
  });

  it('4.123456 should be rounded with precision 0 to 4', () => {
    expect(Decimal.round(4.123456, 0)).toBe(4);
  });

  it('4.123456 should be rounded with precision 1 to 4.1', () => {
    expect(Decimal.round(4.123456, 1)).toBe(4.1);
  });

  it('4.123456 should be rounded with precision 2 to 4.12', () => {
    expect(Decimal.round(4.123456, 2)).toBe(4.12);
  });

  it('4.129 should be rounded with precision 2 to 4.13', () => {
    expect(Decimal.round(4.129, 2)).toBe(4.13);
  });

  it('4.125 should be rounded with precision 2 to 4.13', () => {
    expect(Decimal.round(4.125, 2)).toBe(4.13);
  });

  it('4.1249 should be rounded with precision 2 to 4.12', () => {
    expect(Decimal.round(4.1249, 2)).toBe(4.12);
  });

  it('-4.123456 should be rounded with precision 2 to -4.12', () => {
    expect(Decimal.round(-4.123456, 2)).toBe(-4.12);
  });

  it('-4.129 should be rounded with precision 2 to -4.129', () => {
    expect(Decimal.round(-4.129, 2)).toBe(-4.13);
  });

  it('4 should have no decimal', () => {
    expect(Decimal.countDecimals(4)).toBe(0);
  });

  it('4.0 should have no decimal', () => {
    expect(Decimal.countDecimals(4.0)).toBe(0);
  });

  it('4.2 should have 1 decimal', () => {
    expect(Decimal.countDecimals(4.2)).toBe(1);
  });

  it('4.01 should have 2 decimals', () => {
    expect(Decimal.countDecimals(4.01)).toBe(2);
  });

  it('4.010 should have 2 decimals', () => {
    expect(Decimal.countDecimals(4.010)).toBe(2);
  });

  it('-4 should have no decimal', () => {
    expect(Decimal.countDecimals(-4)).toBe(0);
  });

  it('-4.0 should have no decimal', () => {
    expect(Decimal.countDecimals(-4.0)).toBe(0);
  });

  it('-4.2 should have 1 decimal', () => {
    expect(Decimal.countDecimals(-4.2)).toBe(1);
  });

  it('-4.01 should have 2 decimals', () => {
    expect(Decimal.countDecimals(-4.01)).toBe(2);
  });
});
