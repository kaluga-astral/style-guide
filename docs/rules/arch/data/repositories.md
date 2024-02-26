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

## Ключи кэша должны быть свойствами класса

**✨ Мотивация**

Единообразие расположение ключей кэша.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```ts
export class UserRepository {
  private readonly contactInfoCacheKey = 'contactInfoCacheKey';

  constructor(
    private readonly userNetworkSources: UserNetworkSources,
    private readonly cache: CacheService,
  ) {}

  public getContactInfoQuery = () =>
    this.cache.createQuery<UserRepositoryDTO.UserContactDTO>(
      [this.contactInfoCacheKey],
      this.userNetworkSources.getContactInfo,
    );
}
```

**❌ Invalid**

```ts
const CONTACTS_INFO_CACHE_KEY = 'contactInfoCacheKey';

export class UserRepository {
  constructor(
    private readonly userNetworkSources: UserNetworkSources,
    private readonly cache: CacheService,
  ) {}

  public getContactInfoQuery = () =>
    this.cache.createQuery<UserRepositoryDTO.UserContactDTO>(
      [CONTACTS_INFO_CACHE_KEY],
      this.userNetworkSources.getContactInfo,
    );
}
```
