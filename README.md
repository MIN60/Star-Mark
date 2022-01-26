# STAR MARK

별자리 북마크 웹, STAR MARK
![ezgif com-gif-maker](https://user-images.githubusercontent.com/55707601/149877665-007975bb-7783-4447-8b18-b9bc468373d4.gif)

나랑 별보러 가지 않을래~~~

## Story

  
 
 <details>
<summary>D일주일간의 여정</summary>
<div markdown="1">

3줄 요약
1. 종준이가 "무조건" 3D로 천체를 구현해달래서 three.js를 밤새 공부함
2. 막상 보고 종준이가 거부함
3. 억울해서 gif로 넣을거임
![ezgif com-gif-maker](https://user-images.githubusercontent.com/55707601/149877665-007975bb-7783-4447-8b18-b9bc468373d4.gif)
 
 *이 내용은 실화와 0.1%만 관련있음을 알려드립니다*
 

</div>
</details>   

 





## 개발환경
- React 
- Node.js
- Monggo DB

## 경험만
- three.js
- WEB GL

## 주요코드 설명

### FLOW
  + 이미지를 학습시켜서 카메라로 특정 이미지를 인식하면 가상의 물체가 뜨도록 구현하였습니다. 기존의 AR Core에서 제공하는 라이브러리는 한 게임당 한 번씩만 사용할 수 있기 때문에 다중인식을 구현하기 위해서 다음과 같은 코드를 작성하여 각 물체마다 다른 오브젝트가 나타나도록 구현했습니다.

  ```cs
public class ARTrackedMultiImageManager : MonoBehaviour
{
    [SerializeField]
    private GameObject[]    trackedPrefabs;//이미지를 인식했을 때 출력되는 프리팹 목록

    //이미지를 인식했을 때 출력되는 오브젝트 목록
    private Dictionary<string, GameObject> spawnedObjects = new Dictionary<string, GameObject>();
    private ARTrackedImageManager trackedImageManager;

    private void Awake()
    {
        //AR Session Origin 오브젝트에 컴포넌트로 적용했을 때 사용 가능
        trackedImageManager = GetComponent<ARTrackedImageManager>();
        //trackedPrefabs 배열에 있는 모든 프리팹을 Instantiate()로 생성한 후
        //spawnedObjects Dictionary에 저장, 비활성화
        //카메라에 이미지가 인식되면 이미지와 동일한 이름의 key에 있는 value 오브젝트를 출력
        foreach(GameObject prefab in trackedPrefabs)
        {
            GameObject clone = Instantiate(prefab);//오브젝트 생성
            clone.name = prefab.name;//생성한 오브젝트의 이름 설정
            clone.SetActive(false);//오브젝트 비활성화
            spawnedObjects.Add(clone.name, clone);//Dictionary에 오브젝트 저장
        }

    }
    private void OnEnable()
    {
        trackedImageManager.trackedImagesChanged += OnTrackedImagesChanged;
    }
    private void OnDisable()
    {
        trackedImageManager.trackedImagesChanged -= OnTrackedImagesChanged;
    }
    private void OnTrackedImagesChanged(ARTrackedImagesChangedEventArgs eventArgs)
    {
        //카메라에 이미지가 인식되었을 때
        foreach(var trackedImage in eventArgs.added)
        {
            UpdateImage(trackedImage);
        }
        //카메라에 이미지가 인식되어 업데이트 되고 있을 때
        foreach (var trackedImage in eventArgs.updated)
        {
            UpdateImage(trackedImage);
        }
        //인식되고 있는 이미지가 카메라에서 사라졌을 때
        foreach (var trackedImage in eventArgs.removed)
        {
            spawnedObjects[trackedImage.name].SetActive(false);
        }

    }
    private void UpdateImage(ARTrackedImage trackedImage)
    {
        string name = trackedImage.referenceImage.name;
        GameObject trackedObject = spawnedObjects[name];
        //이미지의 추적상태가 추적중일때
        if (trackedImage.trackingState == TrackingState.Tracking)
        {
            trackedObject.transform.position = trackedImage.transform.position;
            trackedObject.transform.rotation = trackedImage.transform.rotation;
            trackedObject.SetActive(true);
        }
        else
        {
            trackedObject.SetActive(false);
        }
    }


}
  ```
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


