# MySQL数据库

## 一：创建数据表

### 1.DataType常见数据类型

int整型

varchar（len）字符串

tinyint（1）布尔值

### 2.字段的特殊标识：

PK(Primary Key)主键、唯一标识

NN(Not Null)值不允许为空

UQ（Unique）值唯一

AI（Auto Increment）值自动增长

## 二：数据表增删改查

### 1.查询

```sql
-- select * from user
-- 通过*查询user表格中的所有数据

-- 从user中把uesrname和password对应的数据查询出来
select username, password from user
```

### 2.插入

```sql
-- 向user表格中。插入一条username为tony stark， password为098123的用户数据
INSERT INTO user (username, password) values ('tony stark' , '098123')
```

### 3.修改

```sql
-- 单个修改
-- 把user表格中id为2的用户，password修改为88888888
update user set password='88888888' where id=2
-- 多个修改
-- 把user表格中id为3的用户，password修改为333 status修改为0
update user set password='333', status=0 where id=3 
```

### 4.删除

```sql
-- 从user中删除id=1的用户
delete from user where id=1
```

## 三：where子句

可以在where子句中使用的运算符

| 操作符  | 描述         |
| ------- | ------------ |
| =       | 等于         |
| <>      | 不等于       |
| >       | 大于         |
| <       | 小于         |
| >=      | 大于等于     |
| <=      | 小于等于     |
| BETWEEN | 在某个范围内 |
| LIKE    | 搜索某种模式 |

## 四：and和or运算符

> **AND和OR可以在WHERE子句中把两个或者多个条件结合起来。**
>
> 1.AND表示必须同时满足多个条件，相当于Java中的&&运算符
>
> 例如 
>
> ```js
> if(a !== 10&&a!==20)
> ```
>
> 2.OR表示只要满足任意一个条件即可，相当于Java中的||运算符
>
> 例如
>
> ```js
> if(a!==10||a!==20)
> ```
>
> 

## 五：ORDER BY 子句－升降排序

### １.升序排序

```sql
-- 对user表格中的数据，按照status字段进行升序排序
select　* 　from　user　order　ｂｙ　status
```

### ２．降序排序

```sql
-- 对user表格中的数据，按照id字段进行降序排序
select　* 　from　user　order　ｂｙ　id　DESC
```

## 六．查询COUNT(*)

```sql
-- 使用count（＊）统计user表中，状态为０用户的总个数
select　count（＊）from　user　where　ｓｔｓｔｕｓ＝０
```

## 七.node引入

### 1.在node中引入mysql

在项目中安装MySQL的第三方文件

```js
// 1.导入mysql模块
const mysql = require('mysql');
// 2.建立与数据库的链接
const db = mysql.createPool({
    host: '127.0.0.1',
    // 数据库的IP地址
    user: 'root',
    // 登录数据库的账号
    password: '010427',
    // 登录数据库的密码
    database: 'class01'
    // 指定要操作的数据库
})
```

### 2.查询数据

```js

// 测试mysql模块能否正常运行
db.query('SELECT * FROM user',(err, results) => {
    // mysql工作期间报错
    if(err) return console.log(err.message)
    // 能够正常运行mysql语句
    console.log(results)
})


// 查询user中的所有数据
const sqlStr = 'select * from user'
db.query(sqlStr, (err, results) => {
    //数据查询失败
    if(err) return console.log(err.message)
    //数据查询成功
    console.log(results)
})
```

### 3.插入数据

```js

// 1.要插入到user表中的数据对象
const uses = {username: "Spider-Man", password: 'pcc123'}
// 2.待执行的SQL语句，其中英文的？表示占位符
const sqlStr = 'INSERT INTO user (username, password) VALUES (?, ?)'
// 3.只用数组的形式，依次为？占位符指定具体的值
db.query(sqlStr, [uses.username, uses.password], (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1) {
        // 注意：如果知行的是insert into插入语句，则results是一个对象
        console.log('插入数据成功')
    }
})

```

