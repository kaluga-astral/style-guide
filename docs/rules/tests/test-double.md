# Test Double


## Моки и стабы имеют постфикс mock

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Использование для моков и стабов одно и то же обозначение позволяет упростить реализацию тестов.
Не приходится задумывать над различием при реализации тестов.

**✅ Valid**

```ts
describe('CreateBookScreenStore', () => {
  it('Успешное создание книги показывает уведомление об успешности', async () => {
    const notifyMock = mock<typeof notify>();
    const fakeBookFormValues = makeFakeBookFormValues({ name: 'Чистый код' });
    const sut = new CreateBookScreenStore(notifyMock);

    await sut.createBook(fakeBookFormValues);

    expect(notifyMock.success).toBeCalledWith('Чистый код успешно создана');
  });
});
```

В примере ниже cartSourcesMock является stub, но для упрощения необходимо использовать постфикс mock.

```ts
describe('CartRepository', () => {
  it('Список товаров и счетчик сбрасывается после ресета', () => {
    const cartSourcesMock = mock<CartNetworkSources>();

    const sut = new CartRepository(cartSourcesMock, createCacheService());
    const goodsCountQuery = sut.getGoodsCountQuery();
    const goodsQuery = sut.getGoodsQuery();

    sut.resetCartCache();
    expect(goodsCountQuery.data).toBe(0);
    expect(goodsQuery.data).toEqual([]);
  });
});
```

## Spy (шпионы) имеют постфикс `spy`

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Позволяет отличать spy от простых функций и других тестовых двойников.

**✅ Valid**

```tsx
it('OnChange вызывается без переданного isExpanded', async () => {
  const onChangeSpy = vi.fn();

  renderWithTheme(
    <Accordion
      summary="Тест"
      startAdorment={<InfoFillMd color="info" />}
      onChange={onChangeSpy}
    >
      <Typography>Контент</Typography>
    </Accordion>,
  );

  const title = screen.getByRole('button', { name: 'Тест' });

  await userEvents.click(title);
  expect(onChangeSpy).toHaveBeenCalled();
});
```

**❌ Invalid**

```tsx
it('OnChange вызывается без переданного isExpanded', async () => {
  const onChange = vi.fn();

  renderWithTheme(
    <Accordion
        summary="Тест"
        startAdorment={<InfoFillMd color="info" />}
        onChange={onChange}
    >
      <Typography>Контент</Typography>
    </Accordion>,
  );

  const title = screen.getByRole('button', { name: 'Тест' });

  await userEvents.click(title);
  expect(onChange).toHaveBeenCalled();
});
```
