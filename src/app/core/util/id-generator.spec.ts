/* tslint:disable:no-unused-variable */
import { IdGenerator } from './id-generator';

describe('Id Generator', () => {

    it('Generate id should be a string with a length of 20', () => {
        expect(IdGenerator.generate().length).toBe(20);
    });

    it('First generate id should be lower than second generate id', () => {
        const id1 = IdGenerator.generate();
        const id2 = IdGenerator.generate();

        expect(id1 < id2).toBe(true);
    });
});
