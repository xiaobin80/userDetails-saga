This is the demo that shows a datasheet.

<img src="https://images2018.cnblogs.com/blog/359743/201806/359743-20180619222509796-2072292283.png" />

## Table of Contents

- [Reference](#reference)
- [Fetch](#fetch)
- [Run](#run)

## Fetch
```js
  export function fetchPostsApi(reddit) {
    //return fetch(`http://www.reddit.com/r/${reddit}.json`)
    return fetch(`http://localhost:8080/${reddit}`)
      .then(response => response.json())
  }
```

### Data
    One row of data is as follows:
```json
{
  "userId":8,
  "userName":"test8",
  "name":"test",
  "passwrod":"$2a$04$HcffZJMrgN0.lmEFpC4KTeeQhitLYzrH0uTCpGRJRBw4o03ms.qWa",
  "email":"test4@163.com",
  "address":"wuhan-hanyang"
}
```

## Run
```bash
npm start
```

## Reference
* [async(redux-saga)](https://github.com/redux-saga/redux-saga/tree/master/examples/async)
* [demo-jpa](https://github.com/xiaobin80/demo-jpa-spring-boot2-mysql)