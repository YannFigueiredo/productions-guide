import { formatDateByYear } from "../formatters";

describe('formatDateByYear tests', () => {
    test('should return year', () => {
        const date = '2022-10-28';

        let year = formatDateByYear(date);

        expect(year).toEqual('2022');
    });
});