# Стилизация через styled

## Стили для компонента выносятся в отдельный файл `styles`

Все стили для компонента выносятся в отдельный файл `styles`, который находится в директории компонента.

**✨ Мотивация**

- Нахождение стилей в файле компонента "загрязняет" код и ухудшает читаемость кода компонента
- Выделение стилей в отдельный файл позволяет визуально отделить зону ответственности

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserInfo/
|    ├── UserInfo.tsx
|    ├── styles.ts
|    └── index.ts
```

```UserInfo.tsx```
```tsx
import { Footer, Header, Wrapper } from './styles';

const UserInfo = ({ isError }: Props) => {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Footer isError={isError} />
    </Wrapper>
  );
};
```

```styles.ts```
```tsx
export const Wrapper = styled.section`
  display: flex;
`;

export const Header = styled.header`
  background-color: white;
`;

export const Footer = styled.footer`
  background-color: ${({ isError }) => (isError ? 'red' : 'white')};
`;
```

**❌ Invalid**

```UserInfo.tsx```
```tsx
const Wrapper = styled.section`
  display: flex;
`;

const Header = styled.header`
  background-color: white;
`;

const Footer = styled.footer`
  background-color: ${({ isError }) => (isError ? 'red' : 'white')};
`;

const UserInfo = ({ isError }: Props) => {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Footer isError={isError} />
    </Wrapper>
  );
};
```

## Нейминг styled-компонентов

Styled-компоненты именуются в произвольной форме, но [Styled префиксы и постфиксы используются только для styled-оберток](#styled-префикс-добавляется-только-для-оберток-styled-компонентов);

**✨ Мотивация**

Произвольная форма нейминга styled-компонентов является наиболее удобной для разработчиков.
Внедрение дополнительных ограничений усложняет и замедляет написание стилей.

**✅ Valid**

```styles.ts```
```tsx
export const Wrapper = styled.section`
  display: flex;
`;

export const Header = styled.header`
  background-color: white;
`;

export const Footer = styled.footer`
  background-color: ${({ isError }) => (isError ? 'red' : 'white')};
`;
```

```UserInfo.tsx```
```tsx
import { Footer, Header, Wrapper } from './styles';

const UserInfo = ({ isError }: Props) => {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Footer isError={isError} />
    </Wrapper>
  );
};
```

**❌ Invalid**

```styles.ts```
```tsx
// Префикс родителя указывать не нужно
export const UserInfoWrapper = styled.section`
  display: flex;
`;

// Префикс Styled используется только для styled-оберток
export const StyledHeader = styled.header`
  background-color: white;
`;

// Постфикс Styled запрещен
export const FooterStyled = styled.footer`
  background-color: ${({ isError }) => (isError ? 'red' : 'white')};
`;
```

```UserInfo.tsx```
```tsx
import { FooterStyled, StyledHeader, UserInfoWrapper } from './styles';

const UserInfo = ({ isError }: Props) => {
  return (
    <UserInfoWrapper>
      <StyledHeader>Header</StyledHeader>
      <FooterStyled isError={isError} />
    </UserInfoWrapper>
  );
};
```

## Нейминг оберток styled-компонентов

Пример обертки styled-компонента:

```ts
import { Button } from '@astral/ui';

export const StyledButton = styled(Button)`
  color: red;
`;
```

### Рекомендуется использовать семантические имена для оберток styled-компонентов

**✨ Мотивация**

Семантические имена styled-компонентов позволяют по названию понять назначение компонента.

**✅ Valid**

```styles.ts```
```ts
import { Button } from '@astral/ui';

export const LogoutButton = styled(Button)`
  color: red;
`;
```

```UserInfo.tsx```
```tsx
import { LogoutButton, Wrapper } from './styles';

const UserInfo = () => {
  return (
    <Wrapper>
      <LogoutButton>Выйти</LogoutButton>
    </Wrapper>
  );
};
```

### Допускается использование `Styled` префикса для оберток styled-компонентов

Если невозможно указать семантическое имя для компонента, то допускается использование `Styled` префикса.

**✨ Мотивация**

Не всем styled-оберткам можно дать семантическое имя.

**Пример кастомизации кнопки ui-kit**

**✅ Valid**

```styles.ts```
```ts
import { Button } from '@astral/ui';

export const StyledButton = styled(Button)`
  color: red;
`;
```

```Button.tsx```
```tsx
import { StyledButton } from './styles';

const Button = () => <StyledButton />;
```

**❌ Invalid**

```ts
import { Button } from '@astral/ui';

// Постфикс запрещен
export const ButtonStyled = styled(Button)`
  color: red;
`;
```

---

```ts
import { Button as AstralButton } from '@astral/ui';

export const Button = styled(AstralButton)`
  color: red;
`;
```

```Button.tsx```
```tsx
// Лишнее действие
import { Button as StyledButton } from './styles';

const Button = () => <StyledButton />;
```

---

```ts
import { Button } from '@astral/ui';

// Семантически обертка не является корнем компонента или его основой, это просто обертка для Button
export const ButtonRoot = styled(Button)`
  color: red;
`;
```

```Button.tsx```
```tsx
import { ButtonRoot } from './styles';

const Button = () => <ButtonRoot />;
```

## Типы для Props styled-компонента не должны зависеть от Props корневого компонента

**✨ Мотивация**

Зона ответственности styled-компонента - стилизация.
Прямое использование пропсов корневого компонента в styled нарушает принцип единственной ответственности (SOLID):
styled-компонент начинает знать о public API корневого компонента и инкапсулировать знания о логике.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```
├── UserInfo/
|    ├── UserInfo.tsx
|    ├── styles.ts
|    └── index.ts
```

```UserInfo.tsx```
```tsx
import { Footer, Header, Wrapper } from './styles';

type UserInfoProps = {
  error?: Error;
};

const UserInfo = ({ error }: UserInfoProps) => {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Footer isError={Boolean(error)} />
    </Wrapper>
  );
};
```

```styles.ts```
```tsx
type FooterProps = {
  isError: boolean;
};

export const Footer = styled.footer<FooterProps>`
  background-color: ${({ isError }) => (isError ? 'red' : 'white')};
`;
```

**❌ Invalid**

```
├── UserInfo/
|    ├── UserInfo.tsx
|    ├── styles.ts
|    └── index.ts
```

```UserInfo.tsx```
```tsx
import { Footer, Header, Wrapper } from './styles';

export type UserInfoProps = {
  error?: Error;
};

const UserInfo = ({ error }: UserInfoProps) => {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Footer error={error} />
    </Wrapper>
  );
};
```

```styles.ts```
```tsx
// Циклическая зависимость
import { type UserInfoProps } from './UserInfo';

// error Prop в данном случае не оносится к стилизации, он относится к логике врехнеуровнего компонента
type FooterProps = Pick<UserInfoProps, 'error'>;

// Footer жестко зацеплен с UserInfo. Любое изменение public API будет провоцировать изменения в Footer
export const Footer = styled.footer<FooterProps>`
  background-color: ${({ error }) => (error ? 'red' : 'white')};
`;
```

### Для styled-оберток допустима связь с оборачиваемым компонентом

**✅ Valid**

```
├── UserInfo/
|    ├── UserInfo.tsx
|    ├── styles.ts
|    └── index.ts
```

```UserInfo.tsx```
```tsx
import { Footer, StyledButton } from './styles';

type UserInfoProps = {
  error?: Error;
};

const UserInfo = ({ error }: UserInfoProps) => {
  return (
    <Wrapper>
      <Header>Header</Header>
      <StyledButton isError={Boolean(error)} variant="light">
        Click
      </StyledButton>
    </Wrapper>
  );
};
```

```styles.ts```
```tsx
import { Button, type ButtonProps } from '@astral/ui'

type StyledButtonProps = ButtonProps & {
  isError: boolean;
};

export const StyledButton = styled<StyledButtonProps>(Button)`
  color: ${({ isError }) => (isError ? 'red' : 'white')};
`;
```
