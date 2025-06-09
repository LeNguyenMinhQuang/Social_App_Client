# life cycle của nestJs

-   Initializing (config trong main.ts) -> running -> terminating (disconnect hoặc gặp bugs die server) => để ko die nữa thì restart server

-   life cycle: can thiệp và 1 trong các phase trên (lên nestjs mà xem)

*   khi ứng dụng die: do smt
*   khi ứng dụng chưa chạy: check logic, init fake data,...

-   init fake data:
    C1: tự thêm bằng database (dev ko tự làm đc)
    C2: dùng thư viện (nest thư viện cùi vl)
    C3: tự code (sad, mệt vcut)

-   ý tưởng:
    Mỗi lần app chạy -> gọi function check (find, count,...) -> nếu có rồi thì thôi, chưa có thì init fake data

# Role Guard

-   khi mà 1 request gửi lên, thì nó đi vào jwt guard, nếu nó qua được (token hợp lệ) thì sẽ được gán thêm user vào req

# Tạo tài liệu cho backend

npx @compodoc/compodoc -p tsconfig.json -s
