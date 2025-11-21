import { test, expect } from '@playwright/test';

test.describe('Todo Application UI Tests', () => {

  test('should load the page, display the title, and show initial cards', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/TodoApp/);

    const todoAppLink = page.getByRole('link', { name: 'Todo Application' });
    await expect(todoAppLink).toBeVisible();

    const addButton = page.getByRole('button', { name: /Add new todo/i });
    await expect(addButton).toBeVisible();

    const allTodoItems = page.locator('app-todo-item');
    
    const firstCard = allTodoItems.filter({ hasText: '#1' }).first();
    await expect(firstCard).toBeVisible();
    
    await expect(allTodoItems).toHaveCount(25);
  });


  test('should filter for todos containing the word "de" and yield 2 results', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('app-todo-item')).toHaveCount(25);

    const filterInput = page.locator('input.filter-input');
    await expect(filterInput).toBeVisible();

    await filterInput.fill('de');
    
    const filteredTodoItems = page.locator('app-todo-item');
    
    await expect(filteredTodoItems).toHaveCount(2);
  });
});