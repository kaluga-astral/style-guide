# JS Classes

## Инициализация параметров конструктора осуществляется с помощью `private readonly`

**✨ Мотивация**

Сокращенная нотация позволяет уменьшить количество кода.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
class CartService {
  constructor(private readonly paymentService: PaymentService) {}

  public pay = () => {
    this.paymentService.pay();
  };
}
```

**❌ Invalid**

```ts
class CartService {
  private readonly paymentService: PaymentService;

  constructor(paymentService: PaymentService) {
    // Лишнее действие для записи
    this.paymentService = paymentService;
  }

  public pay = () => {
    this.paymentService.pay();
  };
}
```

## Именование методов и свойств

Правила именование методов соответствуют [единым правилам именования функций и переменных](./naming/functions).

## Публичные методы и свойства должны быть помечены явным образом как `public`

**✨ Мотивация**

Однозначная идентификация public методов и свойств.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```ts
class CartService {
  public id: string;

  public pay = () => {};
}
```

**❌ Invalid**

```ts
class CartService {
  id: string;
  
  pay = () => {};
}
```
