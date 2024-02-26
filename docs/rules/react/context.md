# React Context

## Context должен находиться в отдельной директории

**✨ Мотивация**

Группировка сущностей, связанных с контекстом

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserContext/
|    ├── UserContext.ts
|    └── index.ts
```

## Type контекста должен иметь постфикс `ContextProps`

**✨ Мотивация**

Решение проблемы коллизий имен типа и контекста.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
import { createContext } from 'react';

export type UserContextProps = {
  isAuth: boolean;
};

export const UserContext = createContext<UserContextProps>({
  isAuth: false,
});
```

**❌ Invalid**

```ts
import { createContext } from 'react';

export type UserContextType = {
  isAuth: boolean;
};

export const UserContext = createContext<UserContextType>({
  isAuth: false,
});
```

## Context.Provider должен находиться внутри директории контекста в отдельной директории

**✨ Мотивация**

- Позволяет устанавливать однозначную связь между Context и Provider
- Отдельная директория позволяет расширять Provider (добавление тестов, логики...)

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserContext/
|    ├── UserContextProvider/ 
|    |    └── UserContextProvider.tsx
|    |    └── UserContextProvider.test.tsx
|    |    └── index.ts
|    ├── UserContext.ts
|    └── index.ts
```

## Имя Context.Provider должно содержать префикс - имя контекста

**✨ Мотивация**

Установка однозначной связи контекста и провайдера.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserContext/
|    ├── UserContextProvider/ 
|    ├── UserContext.ts
|    └── index.ts
```

**❌ Invalid**

```
├── UserContext/
|    ├── UserProvider/
|    ├── UserContext.ts
|    └── index.ts
```

## Context и Provider экспортируются из единого `index`

**✨ Мотивация**

Единая точка доступа к сущностям контекста.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserContext/
|    ├── UserContextProvider/ 
|    ├── UserContext.ts
|    └── index.ts
```

```UserContext/index.ts```
```ts
export * from './UserContext';
export * from './UserContextProvider';
```
