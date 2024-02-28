# Validations

## Валидация должна находится в отдельном файле `validation`

- Если валидация используется в `useLogic`, то `validation` файл должен находится в директории `useLogic`
- Если валидация используется в `UIStore`, то `validation` файл должен находится в директории `UIStore`
- Если валидация переиспользуется, то она должна находится в `domain/validations/`

**✨ Мотивация**

- Визуальное разделение зон ответственности
- Возможность быстрого переноса схемы валидации

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

Для `UIStore`:
```
├── Cart/
|    ├── UIStore/ 
|    |    |── UIStore.ts
|    |    |── validation.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

Для `useLogic`:
```
├── BookForm/
|    ├── useLogic/ 
|    |    |── useLogic.ts
|    |    |── types.ts
|    |    |── validation.ts
|    |    └── index.ts
|    ├── BookForm.tsx
|    └── index.ts
```

### Для `useLogic` создается отдельный файл `types` для валидируемых данных

**✨ Мотивация**

Если не вынести валидируемые типы данных в отдельный файл `types`, то возникнут циклические зависимости между
`useLogic` и `validation`.

**✅ Valid**

```
├── BookForm/
|    ├── useLogic/ 
|    |    |── useLogic.ts
|    |    |── types.ts
|    |    |── validation.ts
|    |    └── index.ts
|    ├── BookForm.tsx
|    └── index.ts
```

```BookForm/useLogic/types.ts```
```ts
export type BookFormValues = {
  name: string;
}
```

## Валидации в `domain/validations` не должны иметь префиксы или постфиксы `validation`

**✨ Мотивация**

По директории `validations` можно понять контекст.

**✅ Valid**

```
├── domain/
|    ├── validations/ 
|    |    |── userSchema/
|    |    |── validateTextField/
|    |    └── index.ts
|    └── index.ts
```

**❌ Invalid**

```
├── domain/
|    ├── validations/ 
|    |    |── userValidationSchema/
|    |    |── textFieldValidationRule/
|    |    └── index.ts
|    └── index.ts
```
