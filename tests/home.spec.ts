import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Dismiss the tour
    const tourPopover = page.locator('.driver-popover-next-btn')
    await tourPopover.click()
  })

  test('should display the header', async ({ page }) => {
    const header = await page.getByRole('banner')
    await expect(header).toBeVisible()
  })

  test('should display category sections', async ({ page }) => {
    const main = await page.getByRole('main')
    await expect(main).toBeVisible()

    // Check if we have at least one category section
    const sections = await page.locator('main > section')
    const count = await sections.count()
    expect(count).toBeGreaterThan(0)
  })

  test('should have navigation links', async ({ page }) => {
    const links = await page.getByRole('link')
    const count = await links.count()
    expect(count).toBeGreaterThan(0)
  })

  test('should navigate to correct category pages when clicking category cards', async ({ page }) => {
    // Get all category cards
    const categoryCards = page.locator('.category-card')
    const count = await categoryCards.count()

    // Test each category card
    for (let i = 0; i < count; i++) {
      const card = categoryCards.nth(i)
      const cardTitle = await card.locator('h2, h3').textContent()

      await card.click()
      // Verify URL contains category name or ID
      await expect(page).toHaveURL(/.*category.*|.*resources.*/, { timeout: 5000 })
      // Verify category title is displayed on the new page
      if (cardTitle) {
        await expect(page.getByText(cardTitle, { exact: false })).toBeVisible()
      }

      // Go back to home page for next test
      await page.goto('/')
    }
  })

  test('should display valid phone numbers in resource cards', async ({ page }) => {
    // Get all resource cards
    const resourceCards = page.locator('.resource-card')
    const count = await resourceCards.count()

    for (let i = 0; i < count; i++) {
      const card = resourceCards.nth(i)
      const phoneNumbers = card.locator('.phone-number')
      const phonesCount = await phoneNumbers.count()

      if (phonesCount > 0) {
        for (let j = 0; j < phonesCount; j++) {
          const phone = await phoneNumbers.nth(j).textContent()
          // Check if phone number matches expected format (allowing various formats)
          expect(phone).toBeTruthy()
          if (phone) {
            // Remove all non-digits and check length
            const digits = phone.replace(/\D/g, '')
            expect(digits.length).toBeGreaterThanOrEqual(10)
          }
        }
      }
    }
  })

  test('should have working website links in resource cards', async ({ page }) => {
    // Get all resource cards
    const resourceCards = page.locator('.resource-card')
    const count = await resourceCards.count()

    for (let i = 0; i < count; i++) {
      const card = resourceCards.nth(i)
      const websiteLinks = card.locator('a[href^="http"]')
      const linksCount = await websiteLinks.count()

      if (linksCount > 0) {
        for (let j = 0; j < linksCount; j++) {
          const link = websiteLinks.nth(j)
          const href = await link.getAttribute('href')

          // Verify link has valid URL format
          expect(href).toBeTruthy()
          if (href) {
            expect(href).toMatch(/^https?:\/\/.+/)
          }

          // Optional: Could add actual link clicking and navigation testing here
          // but that would make tests much slower and potentially unreliable
          // if external sites are down
        }
      }
    }
  })
})
