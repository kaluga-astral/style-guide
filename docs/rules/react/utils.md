# Utils

## Все utils компонента выносятся в директорию `utils`

Полные правила для utils смотрите [здесь](../utils).

**✨ Мотивация**

Позволяет разграничить программные сущности компонента.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserInfo/
|    ├── utils/
|    |    |── formatPriceToView/
|    |    |    |── formatPriceToView.ts
|    |    |    └── index.ts
|    |    └── index.ts
|    ├── UserInfo.tsx
|    └── index.ts
```

**❌ Invalid**

```
├── UserInfo/
|    ├── formatPriceToView.ts
|    ├── UserInfo.tsx
|    └── index.ts
```

```
├── UserInfo/
|    ├── utils.ts
|    ├── UserInfo.tsx
|    └── index.ts
```

```
├── UserInfo/
|    ├── utils/
|    |    |── utils.ts
|    |    └── index.ts
|    ├── UserInfo.tsx
|    └── index.ts
```
