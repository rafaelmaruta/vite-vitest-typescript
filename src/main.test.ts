import { testFunction } from "./main";
import { describe, expect, it } from 'vitest';

describe('testFunction', () => {
  it('should return correctly', () => {
    expect(testFunction()).toBe('Hello World');
  })
})