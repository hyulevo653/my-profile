---
title: "Các Tricks Để Tránh Memory Leak Trong Angular"
summary: 'Tìm hiểu các kỹ thuật và best practices để quản lý bộ nhớ, tránh memory leak trong ứng dụng Angular bằng cách xử lý Subscription, Event Listeners và Timers.'
date: '2026-04-09'
tags:
  - angular
  - performance
  - memory-leak
  - advanced
images:
  - "https://media.licdn.com/dms/image/v2/D4E12AQHoKoeaom-erw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1686780862006?e=2147483647&v=beta&t=5BcU9K4_OKA8JKsPVSjmF-afYl4_2yo0bSa-JuaiArM"
---

Memory leak (rò rỉ bộ nhớ) là "kẻ thù thầm lặng" của các ứng dụng Angular. Nếu không xử lý đúng cách, ứng dụng của bạn sẽ chiếm dụng tài nguyên ngày càng lớn, dẫn tới giật lag và cuối cùng bị crash trình duyệt. Dưới đây là các "tricks" quan trọng để giúp ứng dụng của bạn luôn tối ưu và "sạch sẽ"!

### 1. Luôn Unsubscribe Các RxJS Observables

Đây là nguyên nhân phổ biến nhất gây ra memory leak trong Angular.

**❌ Cách làm sai:**
```typescript
ngOnInit() {
  // Subscribe thẳng tắp mà bỏ qua việc quản lý nó
  this.myService.getData().subscribe(data => {
    this.data = data;
  });
}
```

**✅ Trick 1: Sử dụng Async Pipe ở HTML**
Tốt nhất là để Angular tự quản lý vòng đời của Observable thông qua `async` pipe. Component bị hủy, subscription tự động được xóa.
```html
<!-- HTML -->
<div *ngIf="data$ | async as data">{{ data.name }}</div>
```

**✅ Trick 2: Sử dụng toán tử `takeUntil`**
Nếu bắt buộc phải `subscribe` trong component class (để xử lý logic phức tạp), hãy kết hợp `takeUntil` với một Subject quản lý vòng đời component.
```typescript
private destroy$ = new Subject<void>();

ngOnInit() {
  this.myService.getData()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.data = data);
}

ngOnDestroy() {
  this.destroy$.next(); // Báo hiệu đã đến thời điểm hủy
  this.destroy$.complete(); // Đóng cẩn thận
}
```

**✅ Trick 3: Dùng `takeUntilDestroyed` (Angular 16+)**
Phiên bản từ Angular 16+ giới thiệu Reactive Context mới giúp đơn giản hóa việc unsubscribe. Không cần Subject nữa!
```typescript
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

constructor(private myService: MyService) {
  this.myService.getData()
    .pipe(takeUntilDestroyed())
    .subscribe(data => this.data = data);
}
```

### 2. Dọn dẹp DOM Event Listeners

Nếu bạn dùng event listener thủ công (qua `Renderer2` hoặc `document.addEventListener`), Angular sẽ không tự động nhận biết để gỡ bỏ chúng khi component biến mất.

**✅ Giải pháp:**
Dùng mảng hoặc biến để lưu lại references tới các hàm hủy event, và trigger chúng ở `ngOnDestroy`.
```typescript
private clickListener: () => void;

constructor(private renderer: Renderer2, private el: ElementRef) {}

ngOnInit() {
  this.clickListener = this.renderer.listen(this.el.nativeElement, 'click', () => {
    console.log('DOM Element Clicked!');
  });
}

ngOnDestroy() {
  if (this.clickListener) {
    this.clickListener(); // Gỡ bỏ listener thành công
  }
}
```

### 3. Clear Timeouts và Intervals

Tương tự như event listeners, `setTimeout` và `setInterval` cũng cần được dọn dẹp cẩn thận. Nếu không, các callback bên trong timer có thể vẫn tham chiếu tới Component đã bị hủy.

**✅ Giải pháp:**
```typescript
private intervalId: any;

ngOnInit() {
  this.intervalId = setInterval(() => {
    this.refreshData();
  }, 5000);
}

ngOnDestroy() {
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
}
```

### 4. Tránh sử dụng quá mức Third-Party DOM Libraries

Các thư viện can thiệp trực tiếp vào DOM (như jQuery plugins, map objects từ Google Maps, v.v) cần khởi tạo thủ công và đặc biệt cần phải Destroy thủ công.

**✅ Giải pháp:**
```typescript
ngOnDestroy() {
  if (this.chartInstance) {
    this.chartInstance.destroy(); // Hàm destroy từ thư viện thứ 3
    this.chartInstance = null; // Cắt tham chiếu
  }
}
```

### Kết Luận

Memory leak không hề đáng sợ và hoàn toàn trong tầm kiểm soát nếu bạn nắm vững luồng hoạt động của Garbage Collector và vòng đời Angular Component (`ngOnDestroy`). Một nguyên tắc vàng: **"Khởi tạo thứ gì, thì phải dọn dẹp thứ đó lúc ra đi"**.

Happy coding! 🚀
