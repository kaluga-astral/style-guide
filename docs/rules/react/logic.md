# Логика в компонентах

## Обработчики с префиксом `handle`

**✨ Мотивация**

Идентификация обработчиков react.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```tsx
const Cart = ({ list, onSetSum }: Props) => {
  // calcSum - не обработчик, поэтому префикс не нужен
  const { calcSum } = useLogic();

  const handleClickPay = () => {
    onSetSum(calcSum(list));
  };

  return (
    <section>
      <Button onClick={handleClickPay}>Оплатить</Button>
    </section>
  );
};

```

**❌ Invalid**

```tsx

const Cart = ({ list, onSetSum }: Props) => {
  // handleCalcSum не обработчик, префикса быть не должно
  const { handleCalcSum } = useLogic();

  // Обработчик не по формату
  const clickPayHandler = () => {
    onSetSum(handleCalcSum(list));
  };

  return (
    <section>
      <Button onClick={clickPayHandler}>Оплатить</Button>
    </section>
  );
};
```

## Запрещены длинные условия в `jsx` разметке

**✨ Мотивация**

Длинные условия усложняют восприятие `jsx` компонента.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**❌ Invalid**

```tsx
const Cart = ({ list, isSuccess, userName, onPay }: Props) => {
  return (
    <section>
      {(Boolean(list.length) && isSuccess) ||
        (userName.startsWith('Vasya') && (
          <Button onClick={onPay}>Оплатить</Button>
        ))}
    </section>
  );
};
```

**✅ Valid**

```tsx
const Cart = ({ list, isSuccess, userName, onPay }: Props) => {
  const isVasya = userName.startsWith('Vasya');
  const isShowPayButton = (Boolean(list.length) && isSuccess) || isVasya;

  return (
    <section>
      {isShowPayButton && <Button onClick={onPay}>Оплатить</Button>}
    </section>
  );
};
```

## Запрещена логика в циклах внутри `jsx` разметки

Логику в циклах необходимо переносить в отдельный компонент или в тело функции компонента.

**✨ Мотивация**

Упрощение восприятия и поддержки `jsx` компонента.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**❌ Invalid**

```tsx
const MainPage = ({ list }: Props) => {
  return (
    <section>
      <Header />
      <Filters />
      <ul>
        {list.map((item) => {
          // Сложность восприятия и поддержки будет увеличиваться по мере роста логики компонента
          const price = formatPriceToView(item.price);
          const nickName = [item.name, item.surname].join(' ');

          return (
            <li>
              <Typography>{price}</Typography>
              <Typography>{nickName}</Typography>
            </li>
          );
        })}
      </ul>
      </section>
  );
};
```

**✅ Valid**

```tsx
const ListItem = ({ itemInfo }: ListItemProps) => {
  const price = formatPriceToView(item.price);
  const nickName = [item.name, item.surname].join(' ');

  return (
    <li>
      <Typography>{price}</Typography>
      <Typography>{nickName}</Typography>
    </li>
  );
};

const MainPage = ({ list }: MainPageProps) => {
  return (
    <section>
      <Header />
      <Filters />
      <ul>
        {list.map((item) => (
            <ListItem itemInfo={item} />
        ))}
      </ul>
    </section>
  );
};
```

## Запрещена реализация обработчиков в `jsx`

**✨ Мотивация**

Вынос обработчиков из jsx позволяет держать всю логику компонента в одном месте.

**🤖 Автоматизация**

Не имплементировано в eslint-config.

**✅ Valid**

```tsx
const Cart = ({ list, onRemoveProduct }: Props) => {
  const handleRemoveProduct = (id: string) => () => {
    onRemoveProduct(id);
  };

  return (
    <div>
      <ul>
        {list.map(({ id }) => (
          <li>
            <Button onClick={handleRemoveProduct(id)}>Удалить</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

**❌ Invalid**

```tsx
const Cart = ({ list, onRemoveProduct }: Props) => {
  return (
    <div>
      <ul>
        {list.map(({ id }) => (
          <li>
            <Button onClick={() => onRemoveProduct(id)}>Удалить</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

### Разрешен прямой проброс обработчика в компонент

**✅ Valid**

```tsx
const Cart = ({ onPay }: Props) => {
  return (
    <div>
      <Button onClick={onPay}>Оплатить</Button>
    </div>
  );
};
```

**❌ Invalid**

```tsx
const Cart = ({ onPay }: Props) => {
    // Лишний код, который ничего не делает:
  const handlePay = () => {
    onPay();
  };

  return (
    <div>
      <Button onClick={handlePay}>Оплатить</Button>
    </div>
  );
};
```

## Запрещены вложенные тернарные операторы в `jsx`

Правила соответствуют [единым правилам для тернарных операторов](../conditional-statements#запрещено-использовать-вложенные-тернарные-операторы).
