import Ship from './Ship';

describe('Ship initialization', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it('has length 4 when initialized with 4', () => {
    const ship = new Ship(4);
    expect(ship.length).toBe(4);
  });
  it('has length 10 when initialized with 10', () => {
    const ship = new Ship(10);
    expect(ship.length).toBe(10);
  });
  it('has hit 0 when initialized', () => {
    const ship = new Ship(4);
    expect(ship.hits).toBe(0);
  });
  it('is not sunk when initialized', () => {
    const ship = new Ship(4);
    expect(ship.isSunk()).toBe(false);
  });
});

describe('Ship hit', () => {
  it('can be hit', () => {
    const ship = new Ship(4);
    ship.hit();
    expect(ship.hits).toBe(1);
  });
  it('can be hit multiple times', () => {
    const ship = new Ship(4);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
  });
});

describe('Ship sunk', () => {
  it('is sunk when hits equal length', () => {
    const ship = new Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
  it('is not sunk when hits are less than length', () => {
    const ship = new Ship(4);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
});
