# UI Store

Правила для stores, содержащих логику компонента.

Для stores, не являющимися UIStore описаны [отдельные правила](./stores).

## UIStore должен находится внутри директории компонента в отдельной директории

**✨ Мотивация**

- Позволяет устанавливать визуально связь react-компонента и store для него
- При переносе компонента в другую директорию вместе с ним будет перенесен и store
- Позволяет переносить store со связанными сущностями в другие слои приложения без необходимости рефакторинга

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── Cart/
|    ├── UIStore/ 
|    |    └── UIStore.ts
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

Идентификация View-Model Store.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── Cart/
|    ├── UIStore/ 
|    |    └── UIStore.ts
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
