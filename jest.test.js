const dateUtils = require('./index');

describe('dateUtils', () => {
  describe('getCurrentDate', () => {
    test('returns a valid Date object', () => {
      const currentDate = dateUtils.getCurrentDate();
      expect(currentDate).toBeInstanceOf(Date);
    });
  });

  describe('isValidDate', () => {
    test('returns true for a valid Date object', () => {
      const currentDate = dateUtils.getCurrentDate();
      expect(dateUtils.isValidDate(currentDate)).toBe(true);
    });

    test('returns false for an invalid Date object', () => {
      const invalidDate = new Date('invalid-date');
      expect(dateUtils.isValidDate(invalidDate)).toBe(false);
    });
  });

  describe('parseDate', () => {
    test('parses the date string correctly', () => {
      const dateStr = '2023-07-26';
      const parsedDate = dateUtils.parseDate(dateStr);
      expect(parsedDate).toEqual(new Date(2023, 6, 26)); // Note: months are 0-based
    });
  });

  describe('formatDate', () => {
    it('should format the date correctly', () => {
      const customDate = new Date("2023-09-15");
      const formattedDate = dateUtils.formatDate(customDate).format("MMMM DD, YYYY");
      expect(formattedDate).toEqual("September 15, 2023");
    });

    test('formats the date correctly (YYYY-MM-DD)', () => {
      const date = new Date('2023-07-26');
      const formattedDate = dateUtils.formatDate(date).format('MMM Do, YYYY');
      expect(formattedDate).toBe('Jul 26th, 2023');
    });
    it('should format the provided date string correctly', () => {
      const formattedDate = dateUtils.formatDate("2023-12-25").format("MMM D, YYYY");
      expect(formattedDate).toEqual("Dec 25, 2023");
    });
  });

  describe('addDays', () => {
    test('adds days to the date correctly', () => {
      const date = new Date('2023-07-26');
      const newDate = dateUtils.addDays(date, 5);
      expect(newDate).toEqual(new Date('2023-07-31'));
    });
  });

  describe('subtractDays', () => {
    test('subtracts days from the date correctly', () => {
      const date = new Date('2023-07-26');
      const newDate = dateUtils.subtractDays(date, 3);
      expect(newDate).toEqual(new Date('2023-07-23'));
    });
  });

  describe('getStartOfDay', () => {
    test('gets the start of the day for the given date', () => {
      const date = new Date('2023-07-26T10:30:00');
      const startOfDay = dateUtils.getStartOfDay(date);
      expect(startOfDay).toEqual(new Date('2023-07-26T00:00:00'));
    });
  });

  describe('getEndOfDay', () => {
    test('gets the end of the day for the given date', () => {
      const date = new Date('2023-07-26T10:30:00');
      const endOfDay = dateUtils.getEndOfDay(date);
      expect(endOfDay).toEqual(new Date('2023-07-26T23:59:59.999'));
    });
  });

  describe('diffInDays', () => {
    test('calculates the difference in days correctly', () => {
      const startDate = new Date('2023-07-26');
      const endDate = new Date('2023-08-02');
      const diff = dateUtils.diffInDays(startDate, endDate);
      expect(diff).toBe(7);
    });
  });

  describe('isBeforeDate', () => {
    test('returns true when the first date is before the second', () => {
      const date1 = new Date('2023-07-26');
      const date2 = new Date('2023-07-27');
      expect(dateUtils.isBeforeDate(date1, date2)).toBe(true);
    });

    test('returns false when the first date is after the second', () => {
      const date1 = new Date('2023-07-28');
      const date2 = new Date('2023-07-27');
      expect(dateUtils.isBeforeDate(date1, date2)).toBe(false);
    });
  });


  describe('isAfterDate', () => {
    test('returns true when the first date is after the second', () => {
      const date1 = new Date('2023-07-28');
      const date2 = new Date('2023-07-27');
      expect(dateUtils.isAfterDate(date1, date2)).toBe(true);
    });

    test('returns false when the first date is before the second', () => {
      const date1 = new Date('2023-07-26');
      const date2 = new Date('2023-07-27');
      expect(dateUtils.isAfterDate(date1, date2)).toBe(false);
    });
  });

  describe('isSameDate', () => {
    test('returns true when the two dates are the same', () => {
      const date1 = new Date('2023-07-26');
      const date2 = new Date('2023-07-26');
      expect(dateUtils.isSameDate(date1, date2)).toBe(true);
    });

    test('returns false when the two dates are different', () => {
      const date1 = new Date('2023-07-26');
      const date2 = new Date('2023-07-27');
      expect(dateUtils.isSameDate(date1, date2)).toBe(false);
    });
  });
});
