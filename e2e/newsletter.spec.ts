import { test, expect } from "@playwright/test";

test.describe("Newsletter", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/resources");
  });

  test("enter email in newsletter form", async ({ page }) => {
    const emailInput = page.getByPlaceholderText(/email/i);
    await emailInput.scrollIntoViewIfNeeded();
    await expect(emailInput).toBeVisible();

    await emailInput.fill("test@example.com");
    await expect(emailInput).toHaveValue("test@example.com");
  });

  test("click subscribe", async ({ page }) => {
    const emailInput = page.getByPlaceholderText(/email/i);
    await emailInput.scrollIntoViewIfNeeded();
    await emailInput.fill("test@example.com");

    const subscribeButton = page.getByRole("button", { name: /subscribe/i });
    await subscribeButton.click();

    // Should show a success message or confirmation
    await expect(page.getByText(/thank you|subscribed|success/i)).toBeVisible();
  });

  test("show validation error for invalid email", async ({ page }) => {
    const emailInput = page.getByPlaceholderText(/email/i);
    await emailInput.scrollIntoViewIfNeeded();
    await emailInput.fill("invalid-email");

    const subscribeButton = page.getByRole("button", { name: /subscribe/i });
    await subscribeButton.click();

    // Should show validation error
    await expect(page.getByText(/valid email|invalid/i)).toBeVisible();
  });
});
