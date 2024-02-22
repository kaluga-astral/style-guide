# Import/Export ES Modules

## Необходимо отдавать предпочтение именованным экспортам

Дефолтный экспорт используется только в том случае, если это необходимо по техническим причинам (например, **react lazy**).

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Дефолтные экспорты заставляют производить дополнительные затраты на нейминг при каждом импорте.

**✅ Valid**

```ts
export const Header = () => {...};

export class CartStore {
  ...
};

export const API_URLS = { ... } 
```

```ts
import { Header } from './Header';
import { CartStore } from './store';
import { API_URLS } from './constants';
```

**❌ Invalid**

```ts
export default = () => {...};
```

```ts
class CartStore {
  ...
};

export default CartStore;
```

```ts
export default {
  main: '/main'
} 
```

```ts
import Header from './Header';
import CartStore from './store';
import API_URLS from './constants';
```


## `Export` указывается сразу для экспортируемой сущности

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Уменьшение количества дополнительного кода, не несущего смысловой нагрузки.

**✅ Valid**

```ts
export const API_URL = {};

export class CartStore {};

export const UserCard = () => {};
```

**❌ Invalid**

```ts
const API_URL = {};

class CartStore {};

const UserCard = () => {};

export {
  API_URL,
  CartStore,
  UserCard
};
```

## Импорт из директорий осуществляется посредством файла `index`

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Импорт посредством `index` файлов позволяет достичь хорошего уровня инкапсуляции модулей и контролировать публичный интерфейс.
Все, что экспортируется из `index` файла, является публичными сущностями, с которыми можно взаимодействовать из вне.
Все, что не экспортируется из `index` файла, является приватными сущностями, с ними взаимодействовать из вне нельзя.

**✅ Valid**

```
├── features/
|    ├── UserCard/ 
|    ├── Profile/
|    └── index.ts
```

```features/index.ts```
```ts
export { UserCard, type UserCardProps } from './UserCard';
export { Profile } from './Profile';
```

```ts
import { UserCard } from './features';

...
```

---

```
├── UserService/
|    ├── utils/ 
|    ├── constants.ts
|    ├── enums.ts
|    ├── types.ts
|    ├── UserService.ts
|    ├── UserService.test.ts
|    └── index.ts
```

```UserService/index.ts```
```ts
export { UserService } from './UserService';
export { type UserInfo } from './types';
```

```ts
import { type UserInfo } from './UserService';

...
```

**❌ Invalid**

Отсутствует `index.ts`
```
├── UserService/
|    ├── utils/ 
|    ├── constants.ts
|    ├── enums.ts
|    ├── types.ts
|    ├── UserService.ts
|    └── UserService.test.ts
```

---

Импорт "лезет" во внутреннюю структуру модуля 
```ts
import { UserCard } from './featues/UserCard/UserCard';
import { type UserInfo } from './UserService/types';

...
```

## Импорты вида `../` запрещены

Импорты, не указывающие на конкретный es module, запрещены.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Импорты вида `../` создают циклические зависимости.

**✅ Valid**

```
├── CartService/
├── UserService/
└── index.ts
```

```index.ts```
```ts
export * from './CartService';
export * from './UserService';
```

```CartService/CartService.ts```

```ts
import { UserService } from '../UserService';

class CartService {
  constructor(private readonly userService: UserService) {}
}
```

**❌ Invalid**

```
├── CartService/
├── UserService/
└── index.ts
```

```index.ts```
```ts
export * from './CartService';
export * from './UserService';
```

```CartService/CartService.ts```
```ts
// Из-за того, что импорт идет через index.ts файл может образоваться циклическая зависимость
import { UserService } from '../';

class CartService {
  constructor(private readonly userService: UserService) {}
}
```
