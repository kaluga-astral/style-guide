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
