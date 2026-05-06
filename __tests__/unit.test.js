// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

const functions = {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
};

// TODO - Part 2

describe('isPhoneNumber', () => {
  test('returns true for dashed phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('returns true for parenthesized area code with space', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('returns false when missing dashes', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
  });

  test('returns false for incomplete number', () => {
    expect(functions.isPhoneNumber('123-456-789')).toBe(false);
  });
});

describe('isEmail', () => {
  test('returns true for simple email', () => {
    expect(functions.isEmail('test@example.com')).toBe(true);
  });

  test('returns true for email with underscore in local and domain', () => {
    expect(functions.isEmail('user_1@my_domain.co')).toBe(true);
  });

  test('returns false for extension too short', () => {
    expect(functions.isEmail('a@b.c')).toBe(false);
  });

  test('returns false when domain contains hyphen', () => {
    expect(functions.isEmail('test@ex-ample.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('returns true for minimum length starting with letter', () => {
    expect(functions.isStrongPassword('a123')).toBe(true);
  });

  test('returns true for letters, numbers, underscore within length', () => {
    expect(functions.isStrongPassword('Z_pass12')).toBe(true);
  });

  test('returns false when first character is not a letter', () => {
    expect(functions.isStrongPassword('1abc')).toBe(false);
  });

  test('returns false when longer than 15 characters', () => {
    expect(functions.isStrongPassword('a123456789012345')).toBe(false);
  });
});

describe('isDate', () => {
  test('returns true for single digit month/day with 4-digit year', () => {
    expect(functions.isDate('1/1/2020')).toBe(true);
  });

  test('returns true for two digit month/day with 4-digit year', () => {
    expect(functions.isDate('12/31/1999')).toBe(true);
  });

  test('returns false when using dashes instead of slashes', () => {
    expect(functions.isDate('01-01-2020')).toBe(false);
  });

  test('returns false when year is not 4 digits', () => {
    expect(functions.isDate('1/1/20')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('returns true for 3-digit hex with leading #', () => {
    expect(functions.isHexColor('#fff')).toBe(true);
  });

  test('returns true for 6-digit hex without leading #', () => {
    expect(functions.isHexColor('A1b2C3')).toBe(true);
  });

  test('returns false for too-short hex code', () => {
    expect(functions.isHexColor('#ff')).toBe(false);
  });

  test('returns false for non-hex characters', () => {
    expect(functions.isHexColor('#ggg')).toBe(false);
  });
});
