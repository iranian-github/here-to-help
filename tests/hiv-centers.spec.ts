import { test, expect } from '@playwright/test'

test.describe('HIV Test Centers Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/free-hiv-test-centers')
    // Dismiss the tour
    const tourPopover = page.locator('.driver-popover-next-btn')
    await tourPopover.click()
  })

  test('should display the centers page heading', async ({ page }) => {
    const heading = await page.getByRole('heading', { level: 2 })
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('لیست مراکز آزمایش رایگان ایدز')
  })

  test('should have at least one center listed', async ({ page }) => {
    const rows = await page.locator('table tbody tr')
    const count = await rows.count()
    expect(count).toBeGreaterThan(0)
  })

  test('should filter centers by city', async ({ page }) => {
    await page.getByLabel('نام شهرتون رو بنویسین').fill('اصفهان')
    const rows = page.locator('table tbody tr')
    await expect(rows).toHaveCount(1)
    await page.getByLabel('نام شهرتون رو بنویسین').fill('xyz')
    await expect(page.getByRole('status')).toBeVisible()
  })

  test('should open a city page from the table', async ({ page }) => {
    await page.getByRole('link', { name: 'اصفهان', exact: true }).click()
    await expect(page).toHaveURL(/free-hiv-test-centers\/.+/)
    await expect(page.getByRole('heading', { level: 2 })).toContainText('اصفهان')
    await expect(page.locator('table tbody tr')).toHaveCount(1)
  })
})
