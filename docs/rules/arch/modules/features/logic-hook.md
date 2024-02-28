# Hook с логикой компонента

## Хук с логикой компонента должен иметь название `useLogic` и находится в отдельной директории

**✨ Мотивация**

- Позволяет устанавливать визуальную связь react-компонента и его логики
- Позволяет контролировать единую точку входа для логики компонента
- При переносе компонента в другую директорию вместе с ним будет перенесена и его логика

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```
├── Cart/
|    ├── useLogic/ 
|    |    |── utils/
|    |    |── hooks/
|    |    |── useLogic.ts
|    |    |── useLogic.test.ts
|    |    |── constants.ts
|    |    |── enums.ts
|    |    |── types.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```Cart/useLogic/useLogic.ts```
```ts
export const useLogic = () => {};
```

**❌ Invalid**

```
├── Cart/
|    ├── hooks/ 
|    |    |── useLogic/
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```
├── Cart/
|    ├── hooks/ 
|    |    |── useCart/
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

## В компоненте должен быть только один хук - `useLogic`

Все остальные хуки должны являться частью имплементации `useLogic` и находиться в директории `useLogic/hooks`.

**✨ Мотивация**

Позволяет контролировать единую точку входа для логики компонента.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```
├── Cart/
|    ├── useLogic/ 
|    |    |── hooks/
|    |    |    |── useScrollToTop/
|    |    |    |    |── useScrollToTop.ts
|    |    |    |    └── index.ts
|    |    |    └── index.ts
|    |    |── useLogic.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

```Cart/useLogic/useLogic.ts```
```ts
import { useScrollToTop } from './hooks';

export const useLogic = () => {
  const { scrollToTop } = useScrollToTop();

  return { scrollToTop }
};
```

**❌ Invalid**

```
├── Cart/
|    |── hooks/
|    |    |── useScrollToTop/
|    |    |    |── useScrollToTop.ts
|    |    |    └── index.ts
|    |    └── index.ts
|    ├── useLogic/ 
|    |    |── useLogic.ts
|    |    └── index.ts
|    ├── Cart.tsx
|    └── index.ts
```

### Хук для форм должен иметь название `useLogic`

**✨ Мотивация**

Хук для форм - это логика компонента.


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

**❌ Invalid**

```
├── BookForm/
|    ├── useForm/ 
|    |    |── useForm.ts
|    |    |── types.ts
|    |    |── validation.ts
|    |    └── index.ts
|    ├── BookForm.tsx
|    └── index.ts
```
