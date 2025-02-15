# React Training - Hướng dẫn cơ bản

## 1. Giới thiệu
Tệp HTML này hướng dẫn cách tạo và render một phần tử React đơn giản mà không sử dụng JSX.

## 2. Cấu trúc chính
- **Cài đặt React**: Nhúng `react.js` và `react-dom.js` vào tệp HTML.
- **Tạo phần tử React**: Sử dụng `React.createElement()` để tạo một thẻ `<h1>`.
- **Render vào DOM**: Dùng `ReactDOM.render()` để hiển thị nội dung trên trình duyệt.

## 3. Chi tiết mã nguồn
### Nhúng React vào dự án
```html
<script src="./js/react.js"></script>
<script src="./js/react-dom.js"></script>
```

### Tạo phần tử React
```js
const h1 = React.createElement("h1", {
    title: 'Hello',
    className: 'heading'
}, 'Hi guys!');
```
#### Cấu trúc `React.createElement()`
```js
React.createElement(tag, props, ...children)
```
- **tag** *(string | component)*: Thẻ HTML hoặc component React cần tạo.
- **props** *(object)*: Đối tượng chứa các thuộc tính (ví dụ: className, id, title,...).
- **children** *(string | React elements)*: Nội dung bên trong thẻ, có thể là văn bản hoặc phần tử React lồng nhau.

Ví dụ:
```js
const div = React.createElement("div", { className: "container" },
    React.createElement("h1", { title: "Hello" }, "Hi guys!"),
    React.createElement("p", null, "This is a paragraph.")
);
```

### Render vào DOM
```js
ReactDOM.render(
    h1, 
    document.getElementById("content")
);
```
- Render phần tử `h1` vào `div` có `id="content"`.

## 4. So sánh với JavaScript thuần
### Cách dùng JavaScript thuần
```js
var h1DOM = document.createElement("h1");
h1DOM.title = "Hello";
h1DOM.className = "heading";
h1DOM.innerText = "Hi guys!";
document.getElementById("content").appendChild(h1DOM);
```
- Cần nhiều bước hơn để tạo và chèn phần tử vào DOM.

### Cách dùng JSX (viết dễ hơn)
```jsx
const h1 = <h1 title="Hello" className="heading">Hi guys!</h1>;
ReactDOM.render(h1, document.getElementById("content"));
```
- JSX dễ đọc hơn nhưng cần Babel để biên dịch thành JavaScript thuần.

## 5. Tổng kết
✅ `React.createElement()` giúp tạo phần tử React mà không cần JSX.
✅ `ReactDOM.render()` dùng để hiển thị phần tử React trên trình duyệt.
✅ JSX giúp code dễ đọc hơn nhưng cần trình biên dịch.
✅ Có thể lồng nhiều phần tử React vào bên trong nhau.

## 6. Yêu cầu
- Cần tải `react.js` và `react-dom.js` từ trang chính thức hoặc sử dụng CDN.
- Nếu muốn dùng JSX, cần thêm Babel để biên dịch.

## 7. Tham khảo
- [React Documentation](https://react.dev)
- [React.createElement()](https://react.dev/reference/react/createElement)