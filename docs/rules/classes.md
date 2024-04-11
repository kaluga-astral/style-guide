# JS Classes

## Каждый класс должен иметь свою директорию

**✨ Мотивация**

Отдельная директория для каждого class позволяет:
- Установить однозначную связь class с его тестами, constants, enums, utils...
- Декомпозировать и расширять class, без необходимости рефакторинга (добавление тестов, констант, дочерних классов...)
- Переносить классы со связанными сущностями в другие слои приложения без необходимости рефакторинга

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── services/
|    |── FileService/
|    |    |── AsyncFileService/
|    |    |── utils/
|    |    |── FileService.ts
|    |    |── FileService.test.ts
|    |    |── constants.ts
|    |    |── enums.ts
|    |    └── index.ts
|    |── ErrorService/
|    └── index.ts
```

**❌ Invalid**

```
├── services/
|    |── FileService.ts
|    |── ErrorService.ts
|    └── index.ts
```

## Директория, содержащая class должна начинаться с заглавной буквы

**✨ Мотивация**

Позволяет идентифицировать js class.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── services/
|    |── FileService/
|    |    |── FileService.ts
|    |    └── index.ts
|    |── ErrorService/
|    |    |── ErrorService.ts
|    |    └── index.ts
|    └── index.ts
```

**❌ Invalid**

```
├── services/
|    |── fileService/
|    |    |── FileService.ts
|    |    └── index.ts
|    |── errorService/
|    |    |── ErrorService.ts
|    |    └── index.ts
|    └── index.ts
```

```
├── services/
|    |── fileService/
|    |    |── fileService.ts
|    |    └── index.ts
|    |── errorService/
|    |    |── errorService.ts
|    |    └── index.ts
|    └── index.ts
```

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
