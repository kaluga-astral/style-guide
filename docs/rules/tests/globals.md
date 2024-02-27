# Globals

## Запрещено использование global namespace тестового фреймворка

Global namespace позволяют описывать `describe`, `it` и тп без импорта.

**🤖 Автоматизация**

- [Codemode](https://github.com/kaluga-astral/style-guide/tree/main/codemodes/vitestGlobals) позволяет привести код в описанный вид
- Не имплементировано в eslint-config.

**✨ Мотивация**

- Однозначность принадлежности используемых функций к пакету
- Возможность постепенной миграции на другие тестовые фреймворки

**✅ Valid**

```ts
import { describe, it, expect } from 'vitest';

describe('formatPhoneToView', () => {
  it('Маска содержит по-умолчанию +7', () => {
      expect(formatPhoneToView('79309992222')).toBe('+7 930 999 22 22')
  });
});
```

**❌ Invalid**

В примере ниже используется global namespace:
```ts
describe('formatPhoneToView', () => {
  it('Маска содержит по-умолчанию +7', () => {
      expect(formatPhoneToView('79309992222')).toBe('+7 930 999 22 22')
  });
});
```
