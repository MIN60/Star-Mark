# STAR MARK
별자리 북마크 웹, STAR MARK



![logo](https://user-images.githubusercontent.com/55707601/151157165-5e7e1c82-2ca4-463b-9499-741b74c63c4f.gif)







## Story

  


3줄 요약
1. 종준이가 3D로 천체를 구현해달래서 three.js를 밤새 공부함
2. 막상 보고 종준이가 거부함
3. 억울해서 gif로 넣을거임

 

 





## 개발환경
- React 
- Node.js
- Monggo DB

## 경험
- three.js
- WEB GL
- React flow render
- SVG
- Open GL
- GSAP
- 소원빌기...

## 주요코드 설명

### 로그인
  + 로그인 기능 구현, 서버에서 제공한 토큰을 쿠키에 넣어 관리하였다. 서버 측 미들웨어 구성은 다음과 같다.

![starmark](https://user-images.githubusercontent.com/55707601/151156785-11901b7e-1858-454f-9eb2-9e3f48bb445d.gif)

```cs
  try {
    const token = req.headers.cookie.substr(14); 
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY); 
    const { _id } = decodedToken; 
    const user = await User.findOne({ _id }); // user 조회
    if (!user) errorGenerator("Not found User", "404"); 
    req.user = user; 
    next(); // 미들웨어 연결
  } catch (err) {
    err.message = "Not authenticated";
    err.statsuCode = 401; 
    next(err);
  }
```

### React-Flow-Renderer
  + react-flow-renderer 라이브러리를 이용하여 북마크의 드래그 앤 드롭 기능을 구현하였다. 북마크 역할을 하는 별을 node 객체에 입혔고, 라이브러리에 내장되어 있는 Edge connection 기능을 이용해 별자리를 나타낼 수 있도록 하였다.



![login](https://user-images.githubusercontent.com/55707601/151156648-f36a4793-c211-450f-92dd-3894a5e74a80.gif)
  ```cs
  <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow //React-Flow-Renderer 내의 event handler 사용
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeDoubleClick={handelClickOpen}
            style={graphStyles}
          >
          <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
      {open ? 
            <Dialog className="dialog" open={open} onClose={handleClose}>
              <Button className="closebtn" variant="outlined" color="primary" onClick={handleClose}>X</Button>  
              <DialogTitle className="popTitle">ADD STAR MARK</DialogTitle>
              <DialogContent>
                <TextField label ="NAME" type="text" name="Name" value={bookmarkname} onChange={handleBookmarkNameChange}/><br/>
                <TextField label ="URL" type="text" name="URL" value={link} onChange={handleLinkChange}/><br/>
                <TextField label ="MEMO" type="text" name="Memo" value={memo} onChange={handleMemoChange}/><br/>
              </DialogContent>
              <DialogActions>
                <ThemeProvider theme={theme}>
                <Button variant="outlined" color="primary" onClick={handleDelete}>DELETE</Button>
                <Button variant="outlined" color="secondary" onClick={handleLink}>LINK</Button>
                <Button variant="contained" color="primary" onClick={handleAdd}>ADD</Button>
                </ThemeProvider>
              </DialogActions>
            </Dialog> 
          : null}
    </div>
  ```
    +OnDrop 이벤트 리스너를 이용하여 사이드바에서 별을 클릭해 캔버스 위에 올려놓았을 때, 별이 생성되도록 하였다.
    OnDragOver 이벤트 리스너를 이용하여 캔버스 위에서 별을 움직일 때, 변하는 위치 정보를 실시간으로 업데이트 하도록 하였다.
```cs
const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    setXpos(event.clientX - reactFlowBounds.left);
    setYpos(event.clientY - reactFlowBounds.top);
    const newNode = {
      id: setId(),
      type,
      position,
      data: { url : "" },
    };

    setElements((es) => es.concat(newNode));
  };
```

## 북마크

  + 별을 더블 클릭했을 때, 팝업 창을 생성해서 DB에 북마크의 이름과 링크, 그리고 메모가 전송될 수 있도록 하였다.
  + 창이 새로 로드되었을 때, 저장된 북마크들의 정보를 얻어와서 생성될 수 있도록 하였다.

![bookmark](https://user-images.githubusercontent.com/55707601/151156868-801727a1-4426-4b91-99c7-ef7e850eb759.gif)
- 별을 찍는 과정  
![stars](https://user-images.githubusercontent.com/49427080/151158562-cde22e9e-4ad0-44e5-8627-9461f3cb00fc.gif)  
- 별자리를 만드는 과정  
![bookmark](https://user-images.githubusercontent.com/49427080/151158669-7e5a7ffb-0af1-4978-96e1-f1121f4187eb.gif)  
- 더블 클릭을 통해 북마크를 생성할 수 있다.  
![Link](https://user-images.githubusercontent.com/49427080/151158748-5437ee66-252a-45e2-984c-1ddcd89f77da.gif)  
- 북마크의 링크로 이동하는 과정   


```cs
useEffect(()=>{
    if (reactFlowInstance) {
    axios.get("/api/bookmarks/1",
      {
        params: {
          email: id
        }
      }).then(function(response) {
        response.data.bookmarks.forEach(function(item){
          const position = reactFlowInstance.project({
            x: item.x_coor,
            y: item.y_coor
          });
          const newNode = {
            id: setId(),
            type: 'default',
            position,
            data: { bmname: item.bookmarkname, url: item.link, memo: item.memo },
          };
          setElements((es) => es.concat(newNode));
        });
      }).catch(function(error) {
          console.log(error);
      });
  }},[reactFlowInstance])
```
```cs
  const handleAdd = () =>{
    console.log("enter add handler");
      axios.post("/api/bookmarks/3",
      {
        headers: {
          "Authorization": cookies.get("Authorization"),
        },
        'email': id,
        'bookmarkname': bookmarkname,
        'link': link,
        'memo': memo,
        'x_coor': xpos,
        'y_coor': ypos
      }).then(function(response) {
          console.log(response);
          alert('Bookmark Added!');
          handleClose();
      }).catch(function(error) {
          console.log(error.response);
      });

      //handleClose();
  }
```
## CREDITS
+ 박종준 (Jongjunp)
+ 김민정(MIN60)
+ 이서진(metamong-Hi)
