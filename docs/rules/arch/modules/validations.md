# Validations

## Валидация должна находится в отдельном файле

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
|    |    |── useLogic.test.ts
|    |    |── validation.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

Для `UIStore`:
```
├── Cart/
|    ├── UIStore/ 
|    |    |── UIStore.ts
|    |    |── useLogic.test.ts
|    |    |── validation.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

