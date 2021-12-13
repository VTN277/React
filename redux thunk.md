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
* Không phải action nào cũng trả về PJO (plain JavaScript Object), các action trả về một funtion được gọi là `Async Action`, đây là mơi Redux Thunk làm việc
```
impport dataUsers from '../api/datausers';

export const getUsers = async () => {
    const response = await dataUsers.get('/users');
    return {
        type: 'GET_USERS',
        payload: response
    }
}; 
//lưu ý action này không phải là một PJO mặc dù cú pháp giống
```
* React thunk cho phép action trả về một function, nó đóng vai trò là một middleware đặt trước thời điểm reducer nhận request:
  * nếu là PJO thunk chuyển nó đến reducer
  * nếu là function thunk chặn và đợi cho đến khi một lệnh asynchronous nào đó trong function hoàn tất và trả về kết quả 
![image](https://user-images.githubusercontent.com/67737894/145741219-479387b5-678d-4024-8e4b-0ec5e3a30fd9.png)
* Ta viết lại action ở trên, thay vì `return` ta dùng hàm `dispatch`
```
impport dataUsers from '../api/datausers';

export const getUsers = () => async dispatch => {
    const response = await dataUsers.get('/users');
  dispatch({ type: 'GET_USERS', payload: response });
};  
```
