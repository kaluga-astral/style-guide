# UIStore

Правила для stores, содержащих логику компонента.

## UIStore должен находится внутри директории компонента в отдельной директории

**✨ Мотивация**

- Позволяет устанавливать визуальную связь react-компонента и store для него
- При переносе компонента в другую директорию вместе с ним будет перенесен и store
- Позволяет переносить store со связанными сущностями в другие слои приложения без необходимости рефакторинга

**🤖 Автоматизация**

- [Codemode](https://github.com/kaluga-astral/style-guide/tree/main/codemodes/UIStore/README.md) позволит автоматизировать рефакторинг при переходе на `UIStore`
- Не имплементировано в eslint-config

**✅ Valid**

```
├── Cart/
|    ├── UIStore/ 
|    |    |── UIStore.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

**❌ Invalid**

```
├── CartStore/
|    ├── CartStore.ts
|    └── index.ts
├── Cart/
|    ├── Cart.tsx
|    └── index.ts
```

```
├── Cart/
|    ├── stores
|    |    ├── UIStore/
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```
├── Cart/
|    ├── store.ts
|    ├── Cart.tsx
|    └── index.ts
```

## UIStore и его директория должны называться `UIStore`

**✨ Мотивация**

Позволяет избежать длинных имен для stores, содержащих UI логику.

**🤖 Автоматизация**

- [Codemode](https://github.com/kaluga-astral/style-guide/tree/main/codemodes/UIStore/README.md) позволит автоматизировать рефакторинг при переходе на `UIStore`
- Не имплементировано в eslint-config

**✅ Valid**

```
├── Cart/
|    ├── UIStore/ 
|    |    |── UIStore.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```Cart/UIStore/UIStore.ts```
```ts
export class UIStore {};

export const createUIStore = () => new UIStore();
```

**❌ Invalid**

```
├── Cart/
|    ├── store/ 
|    |    └── store.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```Cart/store/store.ts```
```ts
export class Store {};
```

---

```
├── Cart/
|    ├── CartStore/ 
|    |    └── CartStore.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```Cart/CartStore/CartStore.ts```
```ts
export class CartStore {};
```

## Stores, являющиеся частью имплементации UIStore должны находится в директории UIStore

**✨ Мотивация**

Установка однозначной связи UIStore и stores, являющихся частью имплементации UIStore.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```
├── Cart/
|    ├── UIStore/ 
|    |    |── stores/
|    |    |    |── SwitchStore/
|    |    |    └── index.ts
|    |    |── UIStore.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```Cart/UIStore/UIStore.ts```
```ts
import { SwitchStore } from './stores';

export class Store {
    constructor(private readonly switchStore: SwitchStore) {}
};
```

**❌ Invalid**

Stores являются частью имплементации `UIStore`, но при этом находятся в корне компонента:

```
├── Cart/
|    |── stores/
|    |    |── SwitchStore/
|    |    └── index.ts
|    ├── UIStore/ 
|    |    |── UIStore.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```Cart/UIStore/UIStore.ts```
```ts
import { SwitchStore } from '../stores';

export class Store {
    constructor(private readonly switchStore: SwitchStore) {}
};
```
