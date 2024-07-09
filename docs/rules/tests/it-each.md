# `it.each`

## Проверяемое входное значение должно оборачивать в двойные кавычки

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Позволяет при выполнении тестов идентифицировать подставляемые в тест значения.

**✅ Valid**

```ts
it.each(['', '9', '92', '921', '92176'])(
  'Value "%s" невалидно, если длина поля не равна 4 символам',
  (value) => {
    const error = passportSeries()(value);

    expect(error?.cause.code).toBe(PASSPORT_SERIES_ERROR_INFO.code);
  },
);
```