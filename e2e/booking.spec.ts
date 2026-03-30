import { test, expect } from "@playwright/test";

test.describe("Booking Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/booking");
  });

  test("select session type", async ({ page }) => {
    // Click on Couple Counseling
    const coupleOption = page.getByText("Couple Counseling");
    await coupleOption.click();

    // Should show selected state (visual indicator)
    const selectedCard = coupleOption.locator("..");
    await expect(selectedCard).toHaveClass(/selected|active|border-primary/);
  });

  test("select date from calendar", async ({ page }) => {
    const calendar = page.getByTestId("booking-calendar");
    await expect(calendar).toBeVisible();

    // Click on a day number in the calendar
    const dayButton = calendar.getByRole("button", { name: /15/ }).first();
    await dayButton.click();

    // Day should show selected state
    await expect(dayButton).toHaveClass(/selected|active|bg-primary/);
  });

  test("select time slot", async ({ page }) => {
    const timeSlot = page.getByText("12:00 PM");
    await timeSlot.click();

    // Should show selected state
    await expect(timeSlot).toHaveClass(/selected|active|bg-primary/);
  });

  test("see total summary update", async ({ page }) => {
    // Select Individual Therapy
    await page.getByText("Individual Therapy").click();

    // Total summary should show the price
    const summary = page.getByText(/TOTAL SUMMARY/i);
    await expect(summary).toBeVisible();
    await expect(page.getByText(/\u20B92,500/)).toBeVisible();
  });

  test("click confirm booking", async ({ page }) => {
    // Select session type
    await page.getByText("Individual Therapy").click();

    // Click confirm
    const confirmButton = page.getByRole("button", { name: /confirm booking/i });
    await expect(confirmButton).toBeVisible();
    await confirmButton.click();
  });
});
