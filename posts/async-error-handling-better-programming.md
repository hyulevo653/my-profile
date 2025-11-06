---
title: "5 Nguyên Nhân Lỗi TypeScript Cơ Bản & Cách Khắc Phục (Dễ Mắc Phải)"
summary: 'TypeScript giúp bắt lỗi từ sớm, nhưng nếu dùng sai cách, bạn vẫn gặp lỗi runtime dù code compile thành công. Bài viết này phân tích 5 lỗi cơ bản nhất, nguyên nhân gốc rễ và cách khắc phục triệt để.'
date: '2025-11-05'
tags:
  - sharing
  - development
  - typescript
  - error-handling
  - debugging
images:
  - "https://grcviewpoint.com/wp-content/uploads/2022/11/Time-to-Correct-A-Long-standing-Curriculum-Coding-Error-Say-Experts-GRCviewpoint.jpg"
---
Như một lẽ tất yếu của phát triển phần mềm, **TypeScript không phải là "lá chắn hoàn hảo"** – nó chỉ bắt lỗi **tại compile-time**, nhưng **runtime vẫn có thể crash** nếu bạn không hiểu rõ cách type system hoạt động.

Với việc đang viết chủ yếu trên stack **React + TypeScript**, bài viết nho nhỏ này là một "nỗ lực" để chia sẻ **5 nguyên nhân lỗi TypeScript cơ bản dễ mắc phải**, kèm **nguyên nhân gốc rễ** và **cách khắc phục thực tế**.

---

### Lỗi #1: Dùng `any` để "né" lỗi → Mất hết lợi ích TypeScript

```typescript
const user: any = JSON.parse(response);
console.log(user.email.toUpperCase()); // Compile OK → Runtime crash
```

Nguyên nhân: any tắt hoàn toàn type checking → bạn mất cảnh báo dù truy cập property không tồn tại.
Khắc phục:

```typescript
interface User {
  email: string;
}

function isUser(obj: any): obj is User {
  return typeof obj.email === 'string';
}

const user = JSON.parse(response);
if (!isUser(user)) throw new Error('Invalid user');
console.log(user.email.toUpperCase()); // An toàn
//Mẹo: Dùng unknown + type guard thay vì any.
```

Lỗi #2: Quên await trong try-catch → Lỗi không được bắt
```typescript
async function fetchData() {
  throw new Error("Network error");
}

async function main() {
  try {
    fetchData(); // Quên await!
  } catch (error) {
    console.log("Caught:", error); // Không chạy
  }
}
```
Nguyên nhân: fetchData() trả về Promise, try-catch chỉ bắt lỗi sau khi await.
Khắc phục :
```typescript
try {
  await fetchData(); // Phải await
} catch (error) {
  console.log("Caught:", error); // Bắt được
}
```

Lỗi #3: Dùng ! (non-null assertion) quá đà → Cannot read property of null
```typescript
function getName(user: User | null) {
  return user!.name.toUpperCase(); // Nếu user = null → crash
}
```
Nguyên nhân: ! nói với TypeScript: "Tôi chắc chắn nó không null" → nhưng runtime không biết.
Khắc phục:
```typescript
function getName(user: User | null): string {
  if (!user) throw new Error('User not found');
  return user.name.toUpperCase();
}

// Hoặc dùng optional chaining
return user?.name?.toUpperCase() ?? 'Guest';
```

Lỗi #4: Cast mù quáng với as → Vẫn crash dù không lỗi compile
```typescript
const data = response as { parse(): string };
data.parse(); // Nếu không có method → crash
```
Nguyên nhân: as chỉ ép kiểu tại compile-time,không kiểm tra runtime.
Khắc phục:
```typescript
funtion hasParse(obj:unknown): obs is {parse() :string }{
	return typeof (obj as any).parse === 'function';
}
if(hasParse(data)){
	data.parse(); // An toàn
}
```

Lỗi #5: Không handle null/undefined dù bật strictNullChecks
```typescript
const users: User[] = getUsers();
const first = users[0];
console.log(first.name); // Compile OK → Runtime: Cannot read property 'name' of undefined
```
Nguyên nhân: users[0] có thể là undefined nếu mảng rỗng.
Khắc phục:
```typescript
const first = users[0];
if (!first) throw new Error('No users found');
console.log(first.name);

// Hoặc dùng optional chaining
console.log(users[0]?.name ?? 'No name');
```

### Kết

TypeScript không thay thế được runtime validation – nó chỉ là công cụ cảnh báo sớm.
	5 nguyên tắc vàng để tránh lỗi TypeScript:

	Không dùng any → dùng unknown + type guard
	Luôn await trong try-catch
	Không lạm dụng ! → kiểm tra null/undefined
	Không as mù quáng → validate trước khi dùng
	Luôn xử lý mảng rỗng, API error, network fail

Hy vọng bài viết giúp anh em giảm 80% lỗi runtime dù dùng TypeScript. Nếu bạn từng gặp lỗi "lạ" nào


Thanks for reading. Cheers,

@hyulevo653

