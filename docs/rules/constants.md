# Constants

## Константы вне блочной области видимости должны быть в UPPER_CASE

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Идентификация глобальной константы.

**✅ Valid**

```tsx
// Константа вне блочной области видимости
const DEFAULT_NAME = 'Вася';

const Info = ({ list }: Props) => {
  // Константа внутри блочной области видимости
  const isShowList = Boolean(list.length);

  return (
    <section>
      {isShowList && <List list={list} />}
      <span>{DEFAULT_NAME}</span>
    </section>
  );
};
```

```ts
// Константа вне блочной области видимости
const DEFAULT_FACTOR = 2;

const calc = (a: number, b: number, factor: number = DEFAULT_FACTOR) => {
  // Константа внутри блочной области видимости
  const summ = a + b;

  return summ * factor;
};
```

Константа в отдельном файле:

```constants.ts```
```ts
export const API_URL = 'https://astral.ru';
```

**❌ Invalid**

```ts
// Константа вне блочной области видимости
const defaultFactor = 2;

const calc = (a: number, b: number, factor: number = defaultFactor) => {
  // Константа внутри блочной области видимости
  const summ = a + b;

  return summ * factor;
};
```

Константа в отдельном файле:

```constants.ts```
```ts
export const apiUrl = 'https://astral.ru';
```
