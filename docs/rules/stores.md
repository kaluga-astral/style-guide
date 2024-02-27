# Stores

## Каждый store должен находиться отдельной директории и иметь постфикс `Store`

**✨ Мотивация**

Отдельная директория для каждого store позволяет беспрепятственно расширять store и устанавливать однозначные связи с его внутренними зависимостями.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── domain/
|    ├── stores/
|    |    |── PaymentStore/
|    |    |    |── utils/
|    |    |    |── PaymentStore.ts
|    |    |    |── useUserData.test.ts
|    |    |    |── constants.ts
|    |    |    |── types.ts
|    |    |    └── index.ts
|    |    └── index.ts
|    └── index.ts
```

```domain/stores/PaymentStore/PaymentStore.ts```
```ts
export class PaymentStore {}
```

**❌ Invalid**

```
├── domain/
|    ├── stores/
|    |    |── PaymentStore.ts
|    |    └── index.ts
|    └── index.ts
```

## Mobx Stores

Mobx Stores подчиняются [единым правилам js classes](./classes).

