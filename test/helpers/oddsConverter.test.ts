import {OddsConverter} from '../../src/helpers/oddsConverter'

test('from probability greater than 50 decimal should be less than 2', async () => {

  let d = new OddsConverter();
  let odd = await d.fromProbability(51);
  
  expect(odd.getDecimal).toBeLessThan(2);
});

test('from american should return correct probability', async () => {

    let d = new OddsConverter();
    let odd = await d.fromAmerican(-110);
    
    expect(odd.getImpliedProbability).toBeGreaterThan(50);
  });


