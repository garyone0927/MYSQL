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
// // 测试mysql模块能否正常运行
// db.query('SELECT * from user',(err, results) => {
//     // mysql工作期间报错
//     if(err) return console.log(err.message)
//     // 能够正常运行mysql语句
//     console.log(results)
// })

// // 查询user中的所有数据
// const sqlStr = 'select * from user'
// db.query(sqlStr, (err, results) => {
//     //数据查询失败
//     if(err) return console.log(err.message)
//     //数据查询成功
//     console.log(results)
// })


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
