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
