---
sidebar_position: 2
---

import { RedText, GreenText } from '@site/src/components';

# Props

## Все вложенные компоненты определяются в корне главного компонента

**✅Valid**

```tsx
export function GreenText({ children }: PropsWithChildren) {
  return (
    <span className={styles['green-text']}>{children}</span>
  );
}
```

**❌Invalid**
