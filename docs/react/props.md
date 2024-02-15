# Props

## Типы Props должны находится в файле компонента

### Мотивация

Нахождение Props типов в файле компонента позволяет:
- Избежать оверхеда по созданию отдельного файла для типов Props
- Избежать [проблем ошибочного направления зависимостей компонентов](#проблема-неправильного-направления-зависимостей)

### ✅ Valid

```UserInfo.tsx```
```tsx
type Props = {
  title: string;
  userName: string;
  onClick: () => void;
};

export const UserInfo = ({ title, userName, onClick }: Props) => {
  return (
    <Grid>
      <Typography>{title}</Typography>
      <Typography>{userName}</Typography>
      <Button onClick={onClick}>Показать</Button>
    </Grid>
  );
};
```

### ❌ Invalid

```UserInfo/UserInfo.tsx```
```tsx
import { type UserInfoProps } from './types';

export const UserInfo = ({ title, userName, onClick }: ButtonProps) => {
  return (
    <Grid>
      <Typography>{title}</Typography>
      <Typography>{userName}</Typography>
      <Button onClick={onClick}>Показать</Button>
    </Grid>
  );
};
```

```UserInfo/types.ts```
```ts
export type UserInfoProps = {
  title: string;
  userName: string;
  onClick: () => void;
};
```

### Проблема неправильного направления зависимостей компонентов

Вынесение Props в отдельный файл ```types.ts``` может приводить к тому, что Props дочерних компонентов будут зависеть от Props родителя:

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

```UserCard/types.ts```
```ts
export type UserCardProps = {
  headerTitle: ReactNode;
};
```

```HeaderProps``` зависит от Props родительского компонента ```UserCardProps```:

```UserCard/Header/types.ts```
```ts
import { type UserCardProps } from '../types';

export type HeaderProps = {
    title: UserCardProps['headerTitle'];
};
```

При этом компонент ```UserCard``` зависит от компонента ```Header``` (использует его внутри):
```tsx
export const UserCard = ({ title }: UserCardProps) => {
    return (
        <Header title={title} />
    );
};
```

Такие связи порождают **циклические зависимости** не только на уровне импорта es модулей, но и на уровне проектирования компонентов:
- Возникнут сложные связи
- Возникнет высокое зацепление
- Сложно вынести дочерний компонент для переиспользования

Публичное API родительского компонента должно собираться из типов дочерних компонентов с однонаправленной связью.
