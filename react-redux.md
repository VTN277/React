## LÀ GÌ
Lưu trữ dữ liệu (state) ở store, cấp phát dữ liệu cho các componennt khi cần thiết </br>
## NGUYÊN LÝ HOẠT ĐỘNG
![image](https://user-images.githubusercontent.com/67737894/145335417-7835abe8-ca30-4a01-b93d-f8f326df85e7.png)
* **Store** là phần quan trọng nhất, có nhiệm vụ lưu trữ phân phát dữ liệu. Trong store còn có *dispatcher(phân phối)* (kích hoạt các action bên trong reducer). *reducer* có nhiệm vụ xử lý các hành động được gửi đến
* Khi một action được thực thi, *dispatcher* sẽ được kích hoạt và gửi đến reducer một action. lúc này *reducer* thực hiện hành động dựa vào action được gửi đến, đồng thời lưu lại giá trị state mới vào trong store và trả về state mới đó
