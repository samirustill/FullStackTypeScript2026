import { expect, test } from "vitest";

function areYouOldEnoughToDrive(age: number) {
if (age < 18) return false;

test("Check whether person is old enough to drive", () => {
const oldEnough = areYouOldEnoughToDrive(33);
expect(oldEnough).toBe(true);
});
}