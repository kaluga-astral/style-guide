# VM Store

Правила для **View-Model Store** из паттерна **MVVM**.

Для stores, не являющимися **View-Model Store** описаны [отдельные правила](./stores).

## VMStore должен находится внутри директории компонента в отдельной директории

**✨ Мотивация**

- Позволяет устанавливать визуально связь react-компонента и store для него
- При переносе компонента в другую директорию вместе с ним будет перенесен и store
- Позволяет переносить store со связанными сущностями в другие слои приложения без необходимости рефакторинга

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── Cart/
|    ├── VMStore/ 
|    |    └── VMStore.ts
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
|    |    ├── VMStore/
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

## VMStore и его директория должны называться `VMStore`

**✨ Мотивация**

Идентификация View-Model Store.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── Cart/
|    ├── VMStore/ 
|    |    └── VMStore.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```Cart/VMStore/VMStore.ts```
```ts
export class VMStore {};

export const createVMStore = () => new VMStore();
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
