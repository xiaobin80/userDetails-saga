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
npm install
npm start
```
If the nodejs cache is not empty, first execute:
```bash
npm cache clean --force
```

## Building Async
Note: Build Async from 0 onwards. If you just run, ignore this step.
```bash
create-react-app async
cd async
```

```bash
npm install --save @babel/polyfill
npm install --save react-redux
npm install --save redux-saga
npm install --save isomorphic-fetch
```

### async template
    v1.1.3
1. copy directorys
    1) Copy the examples/async/src from the redux-saga to your async/src.
2. rename main.js
    async/src
    Rename main.js to index.js
3. move files
    async/src
    App.css && logo.svg
    ->
    async/src/containers
    App.css && logo.svg
4. modify containers/App.js
    Add the following two blocks of code.
```bash
import logo from './logo.svg';
import './App.css';
```
```bash
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        ...
    </div>
```

## Reference
* [async(redux-saga)](https://github.com/redux-saga/redux-saga/tree/master/examples/async)
* [demo-jpa](https://github.com/xiaobin80/demo-jpa-spring-boot2-mysql)