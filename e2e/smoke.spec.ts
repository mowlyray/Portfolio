import { test, expect } from "@playwright/test";

test("home page loads with the correct title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Mowly/);
});

test("nav links navigate to the correct pages", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Contact" }).first().click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page).toHaveTitle(/Contact/);

  await page.getByRole("link", { name: "Projects" }).first().click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page).toHaveTitle(/Projects/);
});

test("contact form blocks submission when required fields are empty", async ({
  page,
}) => {
  await page.goto("/contact");

  const nameInput = page.locator('input[name="name"]');
  const submitButton = page.getByRole("button", { name: /send message/i });

  await submitButton.click();

  // The browser's native HTML5 validation should block submission —
  // the required "name" field stays invalid and the page stays on /contact.
  const isValid = await nameInput.evaluate(
    (el: HTMLInputElement) => el.validity.valid
  );

  expect(isValid).toBe(false);
  await expect(page).toHaveURL(/\/contact$/);
});

test("visiting an unknown route shows the custom 404 page", async ({
  page,
}) => {
  await page.goto("/this-route-does-not-exist");
  await expect(page.getByText("Page Not Found")).toBeVisible();
});
