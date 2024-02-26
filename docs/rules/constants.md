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

## Экспорт констант разрешен только из файла `constants`

Если константа необходимо экспортировать, то должен быть создан файл `constants`.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Позволяет избежать циклических зависимостей.

**✅ Valid**

React-component:

```
├── Info/
|    ├── Header/ 
|    |    └── Header.tsx
|    |    └── index.ts
|    ├── Info.tsx
|    ├── constants.ts
|    └── index.ts
```

```Info/Info.tsx```
```tsx
import { Header } from './Header';
import { DEFAULT_NAME } from './constants';

export const Info = () => {
  return (
    <section>
      <Header />
      <span>{DEFAULT_NAME}</span>
    </section>
  );
};
```

```Info/Header/Header.tsx```
```tsx
import { DEFAULT_NAME } from '../constants';

export const Header = () => {
  return (
    <header>
      <span>{DEFAULT_NAME}</span>
    </header>
  );
};
```

---

Utils:

```
├── utils/
|    ├── summ/ 
|    ├── pow/
|    ├── constants.ts
|    └── index.ts
```

```utils/summ/summ.ts```
```ts
import { DEFAULT_FACTOR } from '../constants';

export const summ = (a: number, b: number, factor: number = DEFAULT_FACTOR) => {
  const summ = a + b;

  return summ * factor;
};
```

```utils/pow/pow.ts```
```ts
import { DEFAULT_FACTOR } from '../constants';

export const pow = (value: number, exponent: number = DEFAULT_FACTOR) =>
    Math.pow(value, exponent);
```

**❌ Invalid**

```
├── Info/
|    ├── Header/ 
|    |    └── Header.tsx
|    |    └── index.ts
|    ├── Info.tsx
|    └── index.ts
```

```Info/Info.tsx```
```tsx
import { Header } from './Header';

export const DEFAULT_NAME = 'Вася';

export const Info = () => {
  return (
    <section>
      <Header />
      <span>{DEFAULT_NAME}</span>
    </section>
  );
};
```

```Info/Header/Header.tsx```
```tsx
// Циклическая зависимость с Info.tsx
import { DEFAULT_NAME } from '../Info';

const Header = () => {
  return (
    <header>
      <span>{DEFAULT_NAME}</span>
    </header>
  );
};
```
