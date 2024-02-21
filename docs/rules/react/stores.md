# Stores

Правила для **stores**, находящихся внутри директории react-компонента.

Для **UIStore** описаны [отдельные правила](./UIstore).

## Stores должны находится в отдельной директории внутри компонента

Все stores, реализованные в контексте компонента и не являющиеся VMStore, должны находится в директории `stores`.
Каждый store должен находиться в своей директории, вместе со связанными сущностями (constants, utils...).

**✨ Мотивация**

Группировка stores внутри компонента.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── Cart/
|    ├── stores/ 
|    |    |── PaymentStore/
|    |    |    |── utils/
|    |    |    |── PaymentStore.ts
|    |    |    |── PaymentStore.test.ts
|    |    |    |── constants.ts
|    |    |    |── types.ts
|    |    |    └── index.ts
|    |    └── index.ts
|    ├── VMStore/ 
|    |    └── VMStore.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

**❌ Invalid**

```
├── Cart/
|    ├── PaymentStore/ 
|    |    └── PaymentStore.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```
├── Cart/
|    ├── store/ 
|    |    └── store.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```
├── Cart/
|    ├── PaymentStore.ts
|    ├── Cart.tsx
|    └── index.ts
```


