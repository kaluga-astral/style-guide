---
sidebar_position: 1
---

# Вложенные компоненты

## Все вложенные компоненты определяются в корне главного компонента

**✅Valid**

```tsx
export function GreenText({ children }: PropsWithChildren) {
  return (
    <span className={styles['green-text']}>{children}</span>
  );
}
```

**❌Invalid**

## Поддерживается только один уровень вложенности компонентов
