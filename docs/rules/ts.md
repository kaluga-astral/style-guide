# Typescript

## Необходимо отдавать предпочтение `type` взамен `interface`

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
