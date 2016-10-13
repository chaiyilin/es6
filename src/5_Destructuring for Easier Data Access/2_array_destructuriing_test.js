//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('array destructuring', () => {
    it('basic', () => {
        let colors = [ "red", "green", "blue" ];
        // Those values are chosen because of their position in the array; the actual variable names could be anything
        let [ firstColor, secondColor ] = colors;

        expect(firstColor === 'red').toEqual(true);
    });

    it('omit items', () => {
        let colors = [ "red", "green", "blue" ];
        let [ , , thirdColor ] = colors;

        expect(thirdColor === 'blue').toEqual(true);
    });

    it('Destructuring Assignment', () => {
        let colors = [ "red", "green", "blue" ],
            firstColor = "black",
            secondColor = "purple";
        //no need to wrap the expression in parentheses
        [ firstColor, secondColor ] = colors;
        expect(firstColor === 'red').toEqual(true);
    });

    it('swapping variables', () => {
        let a = 1,
            b = 2;
        [ a, b ] = [ b, a ];
        expect(a === 2).toEqual(true);
    });

    it('Rest Items', () => {
        let colors = [ "red", "green", "blue" ];
        let [ firstColor, ...restColors ] = colors;
        expect(restColors.length === 2).toEqual(true);
    });

    it('clone', () => {
        var colors = [ "red", "green", "blue" ];
        //es5
        var clonedColors = colors.concat();
        //es6
        let [ ...clonedColors1 ] = colors;
        expect(clonedColors.length === 3).toEqual(true);
        expect(clonedColors1.length === 3).toEqual(true);
    });
});

