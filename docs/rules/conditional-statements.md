# Условные операторы

## Запрещено использовать вложенные тернарные операторы

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Вложенные тернарные операторы значительно усложняют восприятие кода.

**❌ Invalid**

```ts
const getColor = (variant: Variant, darkMode: boolean) =>
  darkMode
    ? variant === 'primary'
      ? darkTheme.primary
      : darkTheme.secondary
    : variant === 'primary'
    ? lightTheme.primary
    : lightTheme.secondary;
```

```tsx
const Info = ({ list, type }: Props) => {
  return (
    <div>
      {list.length ? (
        type === 'auth' ? (
          <AuthInfo />
        ) : (
          <NoAuthInfo />
        )
      ) : (
        <NoData />
      )}
    </div>
  );
};
```

**✅ Valid**

```ts
const getColor = (variant: Variant, darkMode: boolean) => {
  if (darkMode) {
    return variant === 'primary' ? darkTheme.primary : darkTheme.secondary;
  }

  return variant === 'primary' ? lightTheme.primary : lightTheme.secondary;
};
```

```tsx
const Info = ({ list, type }: Props) => {
  return (
    <div>
      {list.length && <NoData />}
      {!list.length && type === 'auth' ? <AuthInfo /> : <NoAuthInfo />}
    </div>
  );
};
```
