## NHẮC LẠI VỀ REDUX
* Là một thư viện của js giúp tạo ra một lớp quản lý trạng thái của ứng dụng
* Trạng thái của ứng dụng được lưu trữ trong một store duy nhất
* Khi muốn thay đổi một State nào đó, tại một component, ta cần tạo action, component này đóng vai trò là **Action creater**
* Action là một object luôn có giá trị trả về type và giá trị payload (có thể có hoặc không)
```
export const selectedSong = song => {
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};
```
![image](https://user-images.githubusercontent.com/67737894/145739725-3d97c45e-b31b-4d9b-8303-24d895cb5af6.png)
## THUNK
