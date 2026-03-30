import { test, expect } from "@playwright/test";

test.describe("FAQ Accordion", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("FAQ accordion expands on click", async ({ page }) => {
    const firstQuestion = page.getByText("Is online therapy as effective as in-person?");
    await firstQuestion.scrollIntoViewIfNeeded();
    await firstQuestion.click();

    // Answer should be visible after clicking
    const answer = page.getByText(/research shows/i);
    await expect(answer).toBeVisible();
  });

  test("FAQ accordion collapses on second click", async ({ page }) => {
    const firstQuestion = page.getByText("Is online therapy as effective as in-person?");
    await firstQuestion.scrollIntoViewIfNeeded();

    // Expand
    await firstQuestion.click();
    const answer = page.getByText(/research shows/i);
    await expect(answer).toBeVisible();

    // Collapse
    await firstQuestion.click();
    await expect(answer).not.toBeVisible();
  });

  test("only one FAQ item open at a time", async ({ page }) => {
    const firstQuestion = page.getByText("Is online therapy as effective as in-person?");
    const secondQuestion = page.getByText("What are the technical requirements for a session?");

    await firstQuestion.scrollIntoViewIfNeeded();

    // Open first
    await firstQuestion.click();
    const firstAnswer = page.getByText(/research shows/i);
    await expect(firstAnswer).toBeVisible();

    // Open second — first should close
    await secondQuestion.click();
    await expect(firstAnswer).not.toBeVisible();

    const secondAnswer = page.getByText(/stable internet/i);
    await expect(secondAnswer).toBeVisible();
  });
});
