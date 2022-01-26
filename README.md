# STAR MARK
별자리 북마크 웹, STAR MARK



![ezgif com-gif-maker](https://user-images.githubusercontent.com/55707601/149877665-007975bb-7783-4447-8b18-b9bc468373d4.gif)





>나랑 별보러 가지 않을래~~~

## Story

  


3줄 요약
1. 종준이가 "무조건" 3D로 천체를 구현해달래서 three.js를 밤새 공부함
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

### FLOW
  + 

### 가속도 센서
```cs

// unity 3D에서 설정한 x,y,z축과 스마트폰 센서가 인지하는 x,y,z축이 다르다
Vector3 dir = Vector3.zero;
dir.x = -Input.acceleration.y;
dir.y = -Input.acceleration.z;
dir.z = Input.acceleration.x;

if(dir.sqrMagnitude > 10){
// do something
}

// 흔드는 것만 신경쓰면 축은 크게 신경 안써도 될 것 같다.

```

### 아이템 배치
  + 방탈출 게임 시작지점으로 부터의 상대적 위치를 기반으로 하여 일정 거리에 도달하지 않으면 AR오브젝트가 보이지 않고, 플레이어가 가까이 가야 아이템을 얻을 수 있도록 구현하였습니다.

  ```cs

public class PointManager : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject ARcam;
    public GameObject Obj;
    internal float dist;//AR카메라랑 물체 사이 거리
    public float Range = 2;
    private void Awake()
    {
        Obj.SetActive(false);
        if (ARcam == null)
        {
            ARcam = GameObject.Find("AR Camera");
        }
    }

    private void FixedUpdate()
    {
        if (ARcam != null)
        {
            dist = Vector3.Distance(transform.position, ARcam.transform.position);
            if (dist < Range)
            {
                Obj.SetActive(true);
                print(gameObject.name + "has been reached!");
            }
            if (dist > Range)
            {
                Obj.SetActive(false);
            }
        }
    }
    private void OnDrawGizmos()
    {
        UnityEditor.Handles.color = Color.green;
        UnityEditor.Handles.DrawWireDisc(transform.position, transform.up, Range);
    }


  ```

## Developer


