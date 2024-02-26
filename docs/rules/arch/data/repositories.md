# Repositories

## Каждый Repository должен находиться в своей директории и иметь постфикс `Repository`

**✨ Мотивация**

Позволяет держать в одной директории все части имплементации Repository.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```
├── repositories/
|    ├── UserRepository/ 
|    |    |── utils/
|    |    |── types.ts
|    |    |── constants.ts
|    |    |── UserRepository.ts
|    |    |── UserRepository.test.ts
|    |    └── index.ts
|    └── index.ts
```

```repositories/UserRepository/UserRepository.ts```
```ts
export class UserRepository {}
```

**❌ Invalid**

```
├── repositories/
|    ├── UserRepository.ts
|    └── index.ts
```

```repositories/UserRepository.ts```
```ts
export class UserRep {}
```
