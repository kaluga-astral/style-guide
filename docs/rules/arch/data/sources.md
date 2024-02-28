# Sources

## Каждый Sources должен находиться в своей директории

**✨ Мотивация**

Позволяет держать в одной директории все части имплементации Source.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```
├── sources/
|    ├── userNetworkSources/ 
|    |    |── dto.ts
|    |    |── enums.ts
|    |    |── faker.ts
|    |    |── userNetworkSources.ts
|    |    └── index.ts
|    └── index.ts
```

**❌ Invalid**

```
├── sources/
|    ├── userNetworkSources.ts
|    └── index.ts
```

## Каждый Sources должен иметь постфикс, указывающий на источник данных

Формула постфикса: `ИСТОЧНИК_ДАННЫХ` + `Sources`.

**✨ Мотивация**

Позволяет идентифицировать источник данных.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```
├── sources/
|    ├── userNetworkSources/
|    ├── userLocalStorageSources/
|    ├── userCookieSources/
|    └── index.ts
```

**❌ Invalid**

```
├── sources/
|    ├── userSources.ts
|    └── index.ts
```

## Название директорий Sources должно соответствовать camelCase

**✨ Мотивация**

camelCase указывает на то, что Sources является объектом, не содержащим логики.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```
├── sources/
|    ├── userNetworkSources/ 
|    └── index.ts
```

**❌ Invalid**

```
├── sources/
|    ├── UserNetworkSources/ 
|    |    |── UserNetworkSources.ts
|    |    └── index.ts
|    ├── user-network-sources/ 
|    |    |── user-network-sources.ts
|    |    └── index.ts
|    └── index.ts
```
