---
title: "Advanced TypeScript Patterns for Clean Architecture"
summary: 'Nâng tầm code của bạn với các kỹ thuật TypeScript nâng cao: Discriminated Unions, Opaque Types và Dependency Injection. Viết code an toàn hơn, dễ bảo trì hơn.'
date: '2025-02-06'
tags:
  - typescript
  - architecture
  - clean-code
  - advanced
images:
  - "https://i.ytimg.com/vi/f7Su4KoqSio/maxresdefault.jpg"
---

Bạn đã làm quen với các cơ bản của TypeScript, nhưng làm thế nào để tận dụng sức mạnh của nó cho các hệ thống lớn và phức tạp? Dưới đây là 3 patterns nâng cao giúp code của bạn "sạch" và an toàn hơn.

### 1. Discriminated Unions (Tagged Unions)

Thay vì dùng `any` hoặc các interface lỏng lẻo, hãy dùng Discriminated Unions để mô hình hóa các trạng thái của ứng dụng một cách chính xác.

```typescript
type LoadingState = { status: 'loading' };
type SuccessState = { status: 'success'; data: User[] };
type ErrorState = { status: 'error'; error: Error };

type RequestState = LoadingState | SuccessState | ErrorState;

function handleState(state: RequestState) {
  switch (state.status) {
    case 'loading':
      return 'Loading...';
    case 'success':
      return `Loaded ${state.data.length} users`;
    case 'error':
      return `Error: ${state.error.message}`;
    // TypeScript sẽ báo lỗi nếu bạn quên handle một case nào đó (exhaustiveness checking)
  }
}
```

**Tại sao nó tốt?**
- Loại bỏ hoàn toàn việc check `null` hoặc `undefined` không cần thiết.
- Tự động gợi ý code (intellisense) chính xác cho từng case.

### 2. Opaque Types (Branded Types)

Bạn có bao giờ nhầm lẫn giữa `UserId` và `PostId` vì cả hai đều là `string`? Opaque Types giúp bạn "đánh dấu" các kiểu dữ liệu nguyên thủy để tránh nhầm lẫn.

```typescript
type UserId = string & { __brand: "UserId" };
type PostId = string & { __brand: "PostId" };

function getPost(id: PostId) { /* ... */ }

const userId = "user_123" as UserId;
const postId = "post_456" as PostId;

getPost(postId); // OK
getPost(userId); // Error: Argument of type 'UserId' is not assignable to parameter of type 'PostId'.
```

**Tại sao nó tốt?**
- Type safety tuyệt đối cho các ID hoặc các giá trị primitive có ý nghĩa domain khác nhau.

### 3. Dependency Injection với Interface

Để code dễ test và lỏng lẻo (loose coupling), hãy luôn phụ thuộc vào Interface, không phải Class cụ thể.

```typescript
interface ILogger {
  log(message: string): void;
}

class ConsoleLogger implements ILogger {
  log(message: string) { console.log(message); }
}

class UserService {
  constructor(private logger: ILogger) {}

  createUser(name: string) {
    this.logger.log(`Created user ${name}`);
  }
}

// Khi test, bạn có thể dễ dàng mock logger
const mockLogger = { log: jest.fn() };
const service = new UserService(mockLogger);
```

**Tại sao nó tốt?**
- Dễ dàng thay thế implementation (ví dụ: chuyển từ ConsoleLogger sang FileLogger mà không sửa code UserService).
- Unit test dễ dàng hơn bao giờ hết.

### Kết luận

TypeScript không chỉ là về việc thêm type cho biến. Nó là công cụ mạnh mẽ để thiết kế hệ thống. Hãy thử áp dụng các pattern này vào dự án tiếp theo của bạn nhé!

Happy coding!

@hyulevo653
