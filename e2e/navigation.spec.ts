import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("navigate between all 5 pages", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("/");

    // Navigate to Services
    await page.click('a[href="/services"]');
    await expect(page).toHaveURL("/services");

    // Navigate to About
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL("/about");

    // Navigate to Resources
    await page.click('a[href="/resources"]');
    await expect(page).toHaveURL("/resources");

    // Navigate to Booking
    await page.click('a[href="/booking"]');
    await expect(page).toHaveURL("/booking");
  });

  test("logo links to homepage", async ({ page }) => {
    await page.goto("/about");
    await page.click('a:has-text("ManoSthir"):not([href="/services"]):not([href="/about"]):not([href="/resources"]):not([href="/booking"])');
    await expect(page).toHaveURL("/");
  });

  test('"Book a Session" button links to /booking', async ({ page }) => {
    await page.goto("/");
    const ctaButton = page.getByRole("link", { name: /book a session/i });
    await expect(ctaButton).toBeVisible();
    await ctaButton.click();
    await expect(page).toHaveURL("/booking");
  });

  test("mobile menu opens and closes", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");

    await page.goto("/");

    // Open hamburger menu
    const menuButton = page.getByRole("button", { name: /menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // Menu should be visible with nav links
    await expect(page.getByRole("link", { name: /services/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /about/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /resources/i })).toBeVisible();

    // Close menu
    const closeButton = page.getByRole("button", { name: /close/i });
    await closeButton.click();

    // Nav links should be hidden on mobile when menu is closed
    await expect(page.getByRole("navigation").getByRole("link", { name: /services/i })).not.toBeVisible();
  });
});
