# Вложенные структуры

В данном разделе описаны правила и рекомендации реализации вложенных структур: React-компонентов, hooks, классов, utils...

## Нейминг вложенных структур не должен содержать префиксы родителя

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✨ Мотивация**

Добавление префиксов в названия вложенных структур приводит к сложному восприятию структуры проекта.

**✅ Valid**

```
├── UserCard/
|    ├── Header/ 
|    |    └── Header.tsx
|    |    └── types.ts
|    |    └── index.ts
|    ├── UserCard.tsx
|    ├── types.ts
|    └── index.ts
```

```UserCard/Header.tsx```
```tsx
export const Header = () => {...};
```

**❌ Invalid**

```
├── UserCard/
|    ├── UserCardHeader/ 
|    |    └── UserCardHeader.tsx
|    |    └── types.ts
|    |    └── index.ts
|    ├── UserCard.tsx
|    ├── types.ts
|    └── index.ts
```

```UserCard/UserCardHeader.tsx```
```tsx
export const UserCardHeader = () => {...};
```

## Группировка разрешена

**✨ Мотивация**

Может потребоваться группировка вложенных структур.
Ограничений по группировке нет.

**Примеры**

```
├── DocForm/
|    ├── steps/
|    |    |── UserStep/
|    |    |── DocStep/
|    ├── DocForm.tsx
|    └── index.ts
```

```
├── CartStore/
|   ├── utils/
|   |    ├── formatters/
|   |    |    |── formatPriceToView/
|   |    |    |── formatCountryToView/
|   |    |    └── index.ts
|   |    |── getAddress/
|   |    └── index.ts
|   |── CartStore.ts
|   └── index.ts
```

## Рекомендации

### Уровень вложенности не должен превышать 4

ℹ️ Рекомендация

**✨ Мотивация**

Большая вложенность:
- Свидетельствует о проблемах в проектировании. Возможно, нарушение принципа единственной ответственности SOLID
- Приводит к сложностям поддержки структуры
- Приводит к трудностям восприятия структуры проекта

Если вложенность директорий корневой сущности превышает число 4, то стоит задуматься о рефакторинге.

**Пример**

При разборе примера ниже можно прийти к выводу, что сильная вложенность обусловлена нарушением принципа единственной ответственности:
```ProfileForm``` - самостоятельная единица, которая должна быть вынесена вне компонента ```UserForm```.

```
├── UserForm/
|    ├── Header/ 
|    |    ├── ProfileForm/
|    |    |    ├── BaseFields/
|    |    |    |    |── Header/
|    |    |    |    |    |── NameInput/
|    |    |    |    |    |    |── NameIcon/
|    |    |    |    |    |    |    |── NameIcon.tsx
|    |    |    |    |    |    |    └── index.ts
|    |    |    |    |    |    |── NameInput.tsx
|    |    |    |    |    |    └── index.ts
|    |    |    |    |    |── Header.tsx
|    |    |    |    |    └── index.ts
|    |    |    |    |── BaseFields.tsx
|    |    |    |    └── index.ts
|    |    |    ├── ProfileForm.tsx
|    |    |    └── index.ts
|    |    ├── Header.tsx
|    |    └── index.ts
|    ├── UserForm.tsx
|    └── index.ts
```

Отрефакторенный вариант:
```
├── UserForm/
|    ├── Header/ 
|    |    
|    |    ├── Header.tsx
|    |    └── index.ts
|    ├── UserForm.tsx
|    └── index.ts
├── ProfileForm/
|    ├── BaseFields/
|    |    |── Header/
|    |    |    |── NameInput/
|    |    |    |    |── NameIcon/
|    |    |    |    |    |── NameIcon.tsx
|    |    |    |    |    └── index.ts
|    |    |    |    |── NameInput.tsx
|    |    |    |    └── index.ts
|    |    |    |── Header.tsx
|    |    |    └── index.ts
|    |    |── BaseFields.tsx
|    |    └── index.ts
|    ├── ProfileForm.tsx
|    └── index.ts
```
