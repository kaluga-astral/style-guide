# Hooks

## Все hooks компонента выносятся в директорию `hooks`

Все hooks компонента выносятся в директорию `hooks`, при этом **каждый hook находится в своей директории**.

**✨ Мотивация**

Отдельная директория для каждого hook позволяет:
- Видеть однозначную связь hook со связанными сущностями:
  - Utils
  - Constants
  - Types
  - ...
- Видеть однозначную связь hook с его тестами
- Декомпозировать и расширять сущности, входящие в состав компонента, без необходимости рефакторинга (создание отдельной директории для hook)
- Переносить hook со связанными сущностями в другие слои приложения без необходимости рефакторинга

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserInfo/
|    ├── hooks/
|    |    |── useUserData/
|    |    |    |── utils/
|    |    |    |── useUserData.ts
|    |    |    |── useUserData.test.ts
|    |    |    |── constants.ts
|    |    |    |── types.ts
|    |    |    └── index.ts
|    |    └── index.ts
|    ├── UserInfo.tsx
|    └── index.ts
```


**❌ Invalid**

```
├── UserInfo/
|    ├── useUserData.ts
|    ├── UserInfo.tsx
|    └── index.ts
```

```
├── UserInfo/
|    ├── hooks.ts
|    ├── UserInfo.tsx
|    └── index.ts
```

```
├── UserInfo/
|    ├── hooks/
|    |    |── hooks.ts
|    |    └── index.ts
|    ├── UserInfo.tsx
|    └── index.ts
```

## Тип входных параметров хука должен иметь постфикс `Params`

**✨ Мотивация**

Однозначная идентификация входных параметров хука.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
type UseLogicParams = {
  data: unknown[];
};

const useLogic = (params: UseLogicParams) => {};
```

```ts
// Допустимо просто "Params", если тип не экспортируется или нет коллизий имен внутри es модуля
type Params = {
  data: unknown[];
};

const useLogic = (params: Params) => {};
```

## Тип возвращаемого значения хука должен иметь постфикс `Result`

**✨ Мотивация**

Однозначная идентификация возвращаемого значения хука.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
type UseLogicResult = {
  isShow: boolean;
};

const useLogic = (params: UseLogicParams): UseLogicResult => { ... };
```

```ts
// Допустимо просто "Result", если тип не экспортируется или нет коллизий имен внутри es модуля
type Result = {
    isShow: boolean;
};

const useLogic = (params: Params): Result => { ... };
```
