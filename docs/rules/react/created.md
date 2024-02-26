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

## Имена компонентов и их директорий должны соответствовать PascalCase

**✨ Мотивация**

Стандартизация имен компонентов.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserInfo/
|    ├── UserInfo.tsx
|    └── index.ts
├── ButtonGroup/
|    ├── ButtonGroup.tsx
|    └── index.ts
```

**❌ Invalid**

```
├── userInfo/
|    ├── userInfo.tsx
|    └── index.ts
├── button-group/
|    ├── button-group.tsx
|    └── index.ts
```

## Для `React.Fragment` предпочтительна краткая нотация

Исключение, когда должна использоваться расширенная нотация - необходим `key` prop.

**✨ Мотивация**

Уменьшение количества кода в компоненте.

**🤖 Автоматизация**

Имплементировано в [@astral/eslint-config-react-ts](https://www.npmjs.com/package/@astral/eslint-config-react-ts).

**✅ Valid**

```tsx
const Info = () => {
  return (
    <>
      <Typography>Имя</Typography>
      <Typography>Фамилия</Typography>
    </>
  );
};
```

```tsx
export const List = ({ list }: Props) => {
  return list.map(({ name, surname }) => {
    <Fragment key={name}>
      <Typography>Имя</Typography>
      <Typography>Фамилия</Typography>
    </Fragment>;
  });
};
```

**❌ Invalid**

```tsx
export const Info = () => {
  return (
    <Fragment>
      <Typography>Имя</Typography>
      <Typography>Фамилия</Typography>
    </Fragment>
  );
};
```

