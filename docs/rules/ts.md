# Typescript

## Необходимо отдавать предпочтение `type` перед `interface`

`interface` необходимо использовать только в случаях, когда его использование необходимо: для классов, расширение `interface` сторонних библиотек.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Однородность ts-кода.

**✅ Valid**

```tsx
type Props = {
  title: string;
  userName: string;
  onClick: () => void;
};

export const UserInfo = ({ title, userName, onClick }: Props) => { ... };
```

```ts
type UseLogicParams = {
  data: unknown[];
};

type UseLogicResult = {
    isShow: boolean;
};

const useLogic = (params: UseLogicParams): UseLogicResult => {};
```

```ts
export type UserDTO = {
  data: unknown[];
};
```

```ts
interface IUserService {
  name: string;
  logout: () => void;
}

class UserService implements IUserService {
  ...
}
```

**❌ Invalid**

```tsx
interface Props {
  title: string;
  userName: string;
  onClick: () => void;
};

export const UserInfo = ({ title, userName, onClick }: Props) => { ... };
```

```ts
interface UseLogicParams {
  data: unknown[];
};

interface UseLogicResult {
    isShow: boolean;
};

const useLogic = (params: UseLogicParams): UseLogicResult => {};
```

```ts
export interface UserDTO {
  data: unknown[];
};
```

## Названия параметров generic должны иметь префикс `T` и уточняющее слово

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

- Возможность визуально отличий параметра generic от самостоятельного типа
- Позволяет избежать пересечений имен
- Уточняющее слово позволяет понять назначение параметра

**✅ Valid**

```ts
const formatErrorToGlobal = <TError, TResultError>(error: TError): TResultError => {
  ...
}
```

**❌ Invalid**

```ts
// Из названий параметров generic невозможно понять за что отвечают параметры
const formatErrorToGlobal = <T, D>(error: T): D => {
  ...
}
```

## Названия enum и его свойств должно быть в PascalCase

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Однородность имен для enums.

**✅ Valid**

```ts
enum UserType {
  NoAuth,
  Auth
}
```

**❌ Invalid**

```ts
enum userType {
  noAuth,
  auth
}
```

## Необходимо отдавать предпочтение `Record` перед объектной нотацией

```ts
type DataRecord = Record<string, unknown>;

type DataObject = {
  [key: string]: unknown;
}
```

Объектную нотацию необходимо использовать только по необходимости. Например, для **Mapped Types**.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Использование более краткого описания объектов.

**✅ Valid**

```ts
type Data = Record<string, unknown>;
```

Mapped Types:
```ts
type OptionsFlags<TFields> = {
  [Property in keyof TFields]: boolean;
};
```

**❌ Invalid**

```ts
type Data = {
  [key: string]: unknown;
};
```

## Использование `any` запрещено

**🤖 Автоматизация**

Имплементировано в:
- [@astral/eslint-config-react-ts](https://npmjs.com/package/@astral/eslint-config-react-ts)
- [@astral/eslint-config-node-ts](https://npmjs.com/package/@astral/eslint-config-node-ts)

**✨ Мотивация**

`any` отключает типизацию. Если в коде используется `any`, значит код содержит ошибку.

### При использовании `any` необходимо оставлять комментарий: причину использования

**✨ Мотивация**

Обоснование отключения типизации позволит понять проблему и исправить ошибку в будущем.

**✅ Valid**

```ts
// Типы тем несовместимы, но по факту идентичны
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTheme = (): Theme => useEmotionTheme() as any;
```

**❌ Invalid**

Комментарий отсутствует:

```ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTheme = (): Theme => useEmotionTheme() as any;
```

## Запрещено использование `@ts-ignore`

`@ts-ignore` необходимо использовать только при крайней необходимости.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

`@ts-ignore` полностью отключает типизацию.

### Рекомендуется использовать `any` вместо `@ts-ignore`

**✨ Мотивация**

`any` отключает проверку только для конкретного типа, а `@ts-ignore` выключает проверку для всего блока кода.

**✅ Valid**

```tsx
// LegacyComponent написан на js, без any не обойтись
// eslint-disable-next-line @typescript-eslint/no-explicit-any
<LegacyComponent data={data as any} onClick={handleClick} />
```

**❌ Invalid**

`@ts-ignore` выключит проверку не только для `data`, но и для `onClick`:

```tsx
// @ts-ignore
<LegacyComponent data={data as any} onClick={handleClick} />
```

### При использовании `@ts-ignore` необходимо оставлять комментарий: причину использования

**✨ Мотивация**

Обоснование отключения типизации позволит понять проблему и исправить ошибку в будущем.

**✅ Valid**

```tsx
// LegacyComponent написан на js и при рендере выдает ошибку
// @ts-ignore
<LegacyComponent data={data as any} onClick={handleClick} />
```

**❌ Invalid**

```tsx
// @ts-ignore
<LegacyComponent data={data as any} onClick={handleClick} />
```
