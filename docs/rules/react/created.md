# Создание компонентов

## Каждый компонент должен находится в отдельной директории

**✨ Мотивация**

Отдельная директория для каждого компонента позволяет:
- Видеть однозначную связь компонента со связанными сущностями:
  - Utils
  - Stores
  - Hooks
  - Constants
  - Styles
  - Types
  - Вложенные компоненты
  - ...
- Видеть однозначную связь компонента с его тестами
- Декомпозировать и расширять сущности, входящие в состав компонента, без необходимости рефакторинга (создание отдельной директории для компонента)
- Переносить компоненты со связанными сущностями в другие слои приложения без необходимости рефакторинга компонента

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserInfo/
|    ├── Header/
|    |    |── hooks/
|    |    |── utils/
|    |    |── Header.tsx
|    |    └── index.ts
|    ├── UserInfo.tsx
|    ├── UserInfo.test.tsx
|    ├── constants.ts
|    ├── types.ts
|    └── index.ts
├── Button/
|    ├── Button.tsx
|    └── index.ts
```

## Все utils компонента выносятся в директорию `utils`

Полные правила для utils смотрите [здесь](../utils).

**✨ Мотивация**

Позволяет разграничить программные сущности компонента.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserInfo/
|    ├── utils/
|    |    |── formatPriceToView/
|    |    |    |── formatPriceToView.ts
|    |    |    └── index.ts
|    |    └── index.ts
|    ├── UserInfo.tsx
|    └── index.ts
```

**❌ Invalid**

```
├── UserInfo/
|    ├── formatPriceToView.ts
|    ├── UserInfo.tsx
|    └── index.ts
```

```
├── UserInfo/
|    ├── utils.ts
|    ├── UserInfo.tsx
|    └── index.ts
```

```
├── UserInfo/
|    ├── utils/
|    |    |── utils.ts
|    |    └── index.ts
|    ├── UserInfo.tsx
|    └── index.ts
```

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
