import {test, expect} from '@playwright/test';

test("math works", async () => {
     // Arrange
     const a = 1;
     const b = 2;
     // Act
     const sum = a + b;
     // Assert
     expect(sum).toBe(3);
})