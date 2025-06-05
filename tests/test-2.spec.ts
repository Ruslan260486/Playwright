import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { log } from 'console';

// Определяем асинхронную функцию для регистрации случайного пользователя
async function registrationRandomUser(page) {
  // Генерируем случайное имя пользователя один раз с помощью Faker
  const username = faker.internet.username();

  // Переходим на страницу регистрации
  await page.goto('https://realworld.qa.guru/#/register');

  // Заполняем поле "Your Name" ранее сгенерированным именем
  await page.getByRole('textbox', { name: 'Your Name' }).fill(username);

  // Заполняем поле "Email" случайным email
  await page.getByRole('textbox', { name: 'Email' }).fill(faker.internet.email());

  // Заполняем поле "Password" случайным паролем
  await page.getByRole('textbox', { name: 'Password' }).fill(faker.internet.password());

  // Нажимаем кнопку "Sign up", чтобы отправить форму
  await page.getByRole('button', { name: 'Sign up' }).click();

  // Возвращаем имя пользователя, которое использовали при регистрации
  return username;
}

// Тест: проверяем, что пользователь успешно зарегистрировался
test('Регистрация пользователя', async ({ page }) => {
  // Вызываем функцию регистрации и сохраняем возвращённое имя
  const username = await registrationRandomUser(page);

  // Проверяем, что в навигационной панели отображается это имя
  await expect(page.getByRole('navigation')).toContainText(username);
  console.log('Тест завершён, имя нового пользователя ' + username);
  await page
    .getByText(username)
    .screenshot({ path: 'screenshot Имя нового зарегестрированного пользователя.png' });
});
