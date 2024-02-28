# Переменные, параметры, свойства

## Boolean переменные должны иметь префикс, указывающий на принадлежность к Boolean

Правило распространяется на переменные, параметры, свойства.

**✨ Мотивация**

Идентификация boolean переменных, свойств и параметров по названию.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
const isShow = Boolean(user.id);
const wasRemoved = !Boolean(user);
const hasID = Boolean(user.id);
```

```ts
const calcSum = (product: Product, hasDiscount: boolean) => {}
```

```ts
type Props = {
  isOpen: boolean;
  isShow: boolean;
  wasRemoved: boolean;
  hasState: boolean;
};
```

```ts
class Product {
  hasDiscount: boolean = false;

  get isEmpty() {}
}
```

**❌ Invalid**

```ts
const calcSum = (product: Product, discountIsPresent: boolean) => {}
```

```ts
type Props = {
  open: boolean;
  show: boolean;
  removed: boolean;
  stateIsPresent: boolean;
};
```

```ts
class Product {
  discountIsPresent: boolean = false;

  get empty() {}
}
```
