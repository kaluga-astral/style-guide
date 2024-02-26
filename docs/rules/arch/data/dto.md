# DTO

Описанные правила актуальны для **repositories** и **sources**.

## DTO описываются в отдельном файле `dto.ts`

**✨ Мотивация**

Хранение в едином месте dto.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```
├── repositories/
|    ├── UserRepository/ 
|    |    |── UserRepository.ts
|    |    |── dto.ts
|    |    └── index.ts
|    └── index.ts
├── sources/
|    ├── userNetworkSources/ 
|    |    |── userNetworkSources.ts
|    |    |── dto.ts
|    |    └── index.ts
|    └── index.ts
```

**❌ Invalid**

```
├── repositories/
|    ├── UserRepository/ 
|    |    |── UserRepository.ts
|    |    |── UserRepository.dto.ts
|    |    └── index.ts
|    ├── CartRepository/ 
|    |    |── CartRepository.ts
|    |    |── types.ts
|    |    └── index.ts
|    └── index.ts
```

## DTO описываются в namespace

**✨ Мотивация**

- Позволяет избежать пересечений имен типов между repositories и sources
- Избавляет от необходимости описывать длинные имена для DTO с префиксами

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```userNetworkSources/dto.ts```
```ts
export namespace UserNetworkSourcesDTO {
  export type Contacts = {
    email?: string;
    phone: string;
  };

  export type Person = {
    name: string;
    surname: string;
    displayName: string;
  };
}
```

```UserRepository/dto.ts```
```ts
import type { UserNetworkSourcesDTO } from '../../sources';

export namespace UserRepositoryDTO {
  export type UserContact = UserNetworkSourcesDTO.Contacts;
  export type UserPerson = UserNetworkSourcesDTO.Person;
  export type UserFullInfoDTO = UserNetworkSourcesDTO.Person &
      UserNetworkSourcesDTO.Contacts;
}
```

**❌ Invalid**

```userNetworkSources/dto.ts```
```ts
export type UserNetworkSourcesContactsDTO = {
  email?: string;
  phone: string;
};

export type UserNetworkSourcesPersonDTO = {
  name: string;
  surname: string;
  displayName: string;
};
```

```UserRepository/dto.ts```
```ts
import type {
    UserNetworkSourcesContactsDTO,
    UserNetworkSourcesPersonDTO
} from '../../sources';

export type UserRepositoryContactsDTO = UserNetworkSourcesContactsDTO;
export type UserRepositoryPersonDTO = UserNetworkSourcesPersonDTO;
export type UserRepositoryFullInfoDTO = UserNetworkSourcesPersonDTO &
    UserNetworkSourcesContactsDTO;
```

### Название namespace имеют постфикс `SourcesDTO` или `RepositoryDTO`

**✨ Мотивация**

Идентификация принадлежности namespace к sources или repositories.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```userNetworkSources/dto.ts```
```ts
export namespace UserNetworkSourcesDTO {
  export type Contacts = {
    email?: string;
    phone: string;
  };

  export type Person = {
    name: string;
    surname: string;
    displayName: string;
  };
}
```

```UserRepository/dto.ts```
```ts
import type { UserNetworkSourcesDTO } from '../../sources';

export namespace UserRepositoryDTO {
  export type UserContact = UserNetworkSourcesDTO.Contacts;
  export type UserPerson = UserNetworkSourcesDTO.Person;
  export type UserFullInfo = UserNetworkSourcesDTO.Person &
      UserNetworkSourcesDTO.Contacts;
}
```

## Для названий DTO ответа не нужен постфикс

**✨ Мотивация**

Позволяет сократить количество символов в названии DTO ответа (данных, приходящий в ответ на запрос).

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```userNetworkSources/dto.ts```
```ts
export namespace UserNetworkSourcesDTO {
  export type Contacts = {
    email?: string;
    phone: string;
  };

  export type Person = {
    name: string;
    surname: string;
    displayName: string;
  };
}
```

```UserRepository/dto.ts```
```ts
import type { UserNetworkSourcesDTO } from '../../sources';

export namespace UserRepositoryDTO {
  export type UserContact = UserNetworkSourcesDTO.Contacts;
  export type UserPerson = UserNetworkSourcesDTO.Person;
  export type UserFullInfoDTO = UserNetworkSourcesDTO.Person &
      UserNetworkSourcesDTO.Contacts;
}
```

**❌ Invalid**

```userNetworkSources/dto.ts```
```ts
export namespace UserNetworkSourcesDTO {
  // Постфикс дублируется с названием namespace и не несет никакой смысловой нагрузки
  export type ContactsDTO = {
    email?: string;
    phone: string;
  };

  // Response семантически дублирует DTO постфикс в названии namespace
  export type PersonResponse = {
    name: string;
    surname: string;
    displayName: string;
  };
}
```

```UserRepository/dto.ts```
```ts
import type { UserNetworkSourcesDTO } from '../../sources';

export namespace UserRepositoryDTO {
  // Постфикс дублируется с названием namespace и не несет никакой смысловой нагрузки
  export type UserContactDTO = UserNetworkSourcesDTO.Contacts;
    // Response семантически дублирует DTO постфикс в названии namespace
  export type UserPersonResponse = UserNetworkSourcesDTO.Person;
  export type UserFullInfoDTO = UserNetworkSourcesDTO.Person &
      UserNetworkSourcesDTO.Contacts;
}
```

## Для названий DTO, отправляемых в sources|repositories добавляется постфикс `Input`

**✨ Мотивация**

Позволяет идентифицировать типы данных, отправляемых в sources|repositories.

**🤖 Автоматизация**

Не имплементировано в eslint-config

**✅ Valid**

```userNetworkSources/dto.ts```
```ts
export namespace UserNetworkSourcesDTO {
  export type CreationUserInput = {
    id: string
  }
}
```

```UserRepository/dto.ts```
```ts
import type { UserNetworkSourcesDTO } from '../../sources';

export namespace UserRepositoryDTO {
  export type CreationUserInput = UserNetworkSourcesDTO.CreationUserInput;
}
```

**❌ Invalid**

```userNetworkSources/dto.ts```
```ts
export namespace UserNetworkSourcesDTO {
  // DTO постфикс пересекается с названием namespace
  export type CreationUserInputDTO = {
    id: string
  }
}
```

```UserRepository/dto.ts```
```ts
import type { UserNetworkSourcesDTO } from '../../sources';

export namespace UserRepositoryDTO {
  // Payload постфикс не соответсвует формату
  export type CreationUserPayload = UserNetworkSourcesDTO.CreationUserInput;
}
```
