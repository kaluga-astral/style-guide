# Нейминг параметров, свойств

## Boolean свойства и параметры должны иметь префикс, указывающий на принадлежность к Boolean

**✨ Мотивация**

Идентификация boolean свойств и параметров по названию.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

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
