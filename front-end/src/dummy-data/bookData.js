const bookData = [
  {
    id: 1,
    bookcover: 'https://image.yes24.com/goods/116599950/XL',
    title: '엄마는 카멜레온',
    writer: '윤미경',
    summary: `시시때때로 변하며 잔소리하는 엄마와 그에 맞서 귀여운 복수를 하는 아이의 이야기입니다.

    엄마는 바쁜 아침 시간에는 붉은색으로, 화를 낼 때는 파란색으로 변하지만, 다른 사람들과 이야기할 때는 더없이 상냥한 분홍색으로 변신하지요. 마치 카멜레온처럼 말이에요.

    어느 날 엄마가 아이가 가장 아끼는 장난감을 버리자, 아이는 매우 화가 납니다. 그리고 인형 친구들과 함께 엄마를 혼내 주기로 하지요. 과연, 아이의 깜찍한 반란은 성공할 수 있을까요?`,
  },
  {
    id: 2,
    bookcover: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.aladin.co.kr%2Fproduct%2F30782%2F60%2Fletslook%2F8911129593_t4.jpg&type=sc960_832',
    title: '<시연> 엄마는 카멜레온',
    writer: '윤미경',
    summary: `시시때때로 변하며 잔소리하는 엄마와 그에 맞서 귀여운 복수를 하는 아이의 이야기입니다.

    엄마는 바쁜 아침 시간에는 붉은색으로, 화를 낼 때는 파란색으로 변하지만, 다른 사람들과 이야기할 때는 더없이 상냥한 분홍색으로 변신하지요. 마치 카멜레온처럼 말이에요.

    어느 날 엄마가 아이가 가장 아끼는 장난감을 버리자, 아이는 매우 화가 납니다. 그리고 인형 친구들과 함께 엄마를 혼내 주기로 하지요. 과연, 아이의 깜찍한 반란은 성공할 수 있을까요?`,
  },
  {
    id: 3,
    bookcover: 'https://image.yes24.com/goods/118507916/XL',
    title: '우리는 어린이예요',
    writer: '윤미경',
    summary: `그거 아시나요? ‘어린이’란 단어는 어린아이를 존중해 부르는 말이에요.
    그런데 우리는 어린이를 얼마나 존중해 주었나요?

    어리다는 이유로 무시하고 함부로 대하진 않았나요? 어려서 경험이 조금 부족할 뿐, 어른과 똑같은 한 명의 사람인데 말이에요.
    
    어린이에게도 당연히 누려야 할 권리가 있어요. 《우리는 어린이예요》를 살펴보며 어린이가 자신의 권리를 알도록 해 주세요. 어른도 어린이의 권리를 이해하고 존중해 주세요.`,
  },
  {
    id: 4,
    bookcover: 'https://shopping-phinf.pstatic.net/main_3249617/32496176828.20221227205651.jpg',
    title: '타타의 커다란 날개',
    writer: '심명자',
    summary: `무대에서 돋보이고 싶어!
    
    아이들은 태어나면서부터 집안의 모든 관심을 받고 자란다. 집안의 주인공은 자연스럽게 아이가 된다. 이 책의 타타 역시 주인공을 꿈꾼다. 
    
    하지만 현실은 다르다. 연습 날 타타는 자신 있게 날개를 펼치며 무대 한가운데로 나가지만, 커다란 날개가 다른 동물들의 공연을 방해하고 만다. 자신 때문에 엉망진창이 된 모습을 보며 타타는 시무룩해져서 무대 아래로 내려온다. 이대로 타타는 무대에 설 수 없는 걸까?`,
  },
  {
    id: 5,
    bookcover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788958285366.jpg',
    title: '나도 편식할 거야',
    writer: '유은실',
    summary: `무엇이든지 골고루 잘 먹어 건강하고 행복한 정이와 함께 편식 걱정을 날리자!

    무엇이든지 골고루 잘 먹어 건강하고 행복한 일학년 소녀 정이의 일상 속으로 초대한다. 된장찌개도 잘 먹고 김치찌개도 잘 먹어 엄마한테 사랑받는 예쁜 딸인 정이가, 편식하는 오빠에게만 맛있는 반찬이 나오자 편식쟁이가 되기로 결심하면서 벌어지는 사건사고
    
    아이들이 언제나 긍정적인 정이의 일상 이야기를 읽어나가면서 편식 습관을 멀리 날려보내도록 이끌고 있다.`, 
  },
  {
    id: 6,
    bookcover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158364021.jpg',
    title: '거짓말이 뿡뿡, 고무장갑!',
    writer: '유설화',
    summary: `“아무리 속상해도 거짓말은 곤란해!”
  
      거짓말을 하면 코가 길어진다고? 아니, 아니, 고무장갑은 코가 길어지는 대신… 몸이 풍선처럼 부풀어 올랐대!
      
      4월 5일 식목일, 장갑 초등학교에서는 화분에 씨앗을 심기로 한다. 그런데 고무장갑과 때밀이 장갑 화분에서만 아무런 소식이 없다. 고무장갑은 속이 상하지만, 더 열심히 화분을 돌보기로 한다. 드디어 싹이 났다! 고무장갑 화분이 아니라, 때밀이 장갑 화분에 말이다. 고무장갑은 속이 상한 나머지 두 화분에 붙은 이름표를 슬쩍 바꿔 놓고 마는데….`,
  },
  {
    id: 7,
    bookcover: 'https://bookthumb-phinf.pstatic.net/cover/206/723/20672345.jpg',
    title: '커다랗고 작은',
    writer: '윤미경',
    summary: `소녀는 다시 하늘을 날 수 있을까요?

    키 높은 벚나무와 바다처럼 넓은 운동장을 품은 학교에 작은 소녀가 있었습니다. 소녀는 운동장을 스케치북 삼아 그림을 그립니다. 벚꽃이 필 무렵이면 꽃잎을 가지고 소꿉놀이도 합니다. 그네를 타고 하늘을 날면서 두려움 없이 지냈지요.
    
    그러던 어느 날, 소녀는 도시로 이사를 가게 됩니다. 도시로 간 소녀는 그림을 그리지도 못하고 그네를 타지도 못합니다. 하늘 나는 법도 잊고 슬픔과 걱정에 쌓여 살게 됩니다. 도시 생활에 지친 소녀는 벚꽃잎을 보며 과거를 떠올리고 어릴 때 뛰놀던 학교를 찾아갑니다.`,
  },
  {
    id: 8,
    bookcover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480N230638440.jpg',
    title: '그럴 때가 있어',
    writer: '김준영',
    summary: `한 아이가 가끔 밥이 잘 넘어가지 않는다며 자신의 이야기를 털어놓자, 돼지가 자신도 음식 색깔이 마음에 들지 않거나 때론 이유 없이 그럴 때가 있다고 이야기합니다.

    다른 아이도 물에 들어가기 싫다, 말하기 싫다, 화장실에 가기 힘들다, 잠이 오지 않는다며 자신의 고민을 이야기하고 그때마다 동물들이 나타나서 자신도 그럴 때가 있다며 아이에게 공감해 줍니다. 가끔 무언가가 하기 싫을 때도 있고, 하려고 해도 되지 않을 때가 있지요. 그럴 땐 어떻게 하는 게 좋을까요?
    
    동물 친구들이 알려주는 아주 쉽고도 명쾌한 해결책! 그 비법은 무얼까요?`,
  },
  {
    id: 9,
    bookcover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480D230648350.jpg',
    title: '공룡이 쿵쿵쿵',
    writer: '윤미경',
    summary: `"깜짝 놀랄 일이 일어났어요!"

    자신이 쥐라기 공룡이라고 생각하는 아이는 침대에서 거실에서 열심히 뛰어다녀요. 아래층에 사는 무지개 아줌마는 소음과 진동으로 말 그대로 살 수가 없습니다. 기다란 무지개 우산으로 위층을 향해 천장을 쿡쿡쿡 찌르지요. 하지만 이런 식의 맞대등은 서로의 갈등을 증폭시킬수도 있어요. 이렇게 이웃 간의 갈등이 심해지면 이 책에서처럼 자칫 화산 폭발로 이어질 수도 있지요.
    
    하지만 위기의 순간 무지개 아줌마의 무지개 우산의 마법이 시작되면서 깜짝 놀랄 일이 일어납니다. 과연 어떤 일이 벌어질까요?`,
  },
  {
    id: 10,
    bookcover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936455484.jpg',
    title: '당근 유치원',
    writer: '안녕달',
    summary: `건강한 마음으로 아이들을 돌보는 모든 '곰 선생님'에게 보내는 응원!

      낯선 선생님에게 마음을 열어 가는 과정을 담은『당근 유치원』. 유년의 아이들이 낯선 환경에 적응하려는 노력을 응원할 뿐 아니라 매일 건강한 마음으로 아이들을 돌보는 선생님들까지 위로합니다.
      
      아기 토끼가 새 유치원에 갑니다. 설레는 마음으로 만난 담임 선생님은 덩치가 산처럼 크고 목소리가 쩌렁쩌렁한데다가 힘도 장사인 곰 선생님! 아기 토끼는 선생님과 친구들이 낯설기만 합니다. 아기 토끼가 새 유치원에 적응하고 즐겁게 생활할 수 있을까요?`,
  },
  {
    id: 11,
    bookcover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791190077439.jpg',
    title: '할머니의 용궁 여행',
    writer: '권민조',
    summary: `아윤이의 할머니는 경상도 바닷가 마을의 해녀예요. 할머니가 물질하러 바다로 나가면 아윤이는 집에서 할머니를 기다리지요. 그러던 어느 날, 할머니가 늦게까지 돌아오지 않자 아윤이는 할머니가 걱정되어 바닷가로 갑니다. 막 뭍으로 나온 할머니는 바닷속에서 엄청난 일을 겪었다며 재미난 이야기를 들려주었지요. 

    할머니는 으리으리한 용궁에 도착해요. 그런데 들어가자마자 바다 동물들이 할머니 무릎을 꿇리더니 용왕인 거북이 아프다며 할머니에게 간을 달라는 거예요. 도대체 바다동물들에게 무슨 일이 일어난 걸까요?
    
    할머니는 이 위기를 넘기고 무사히 집으로 돌아올 수 있을까요?`,
  },
  {
    id: 12,
    bookcover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791190867412.jpg',
    title: '달밤 수영장',
    writer: '간장',
    summary: `여름밤에 열리는 특별한 수영장 이야기!
    
    어느 마을에 동물들이 몹시 무더운 여름을 나고 있습니다. 햄스터는 햇볕을 피해 톱밥 속에 폭 숨고, 아기 돼지는 진흙 목욕을 하며 열을 식혀 보고, 앵무새는 물통에 발을 담가 보지만 영 마땅치 않습니다. 강아지는 헉헉거리며 물놀이하는 상상에 빠져 있었지요. 그때, 어디선가 종이비행기 초대장이 날아옵니다. 〈달밤 수영장에 초대합니다. 고양이가.>
    
    반가운 소식에 동물들은 그날 밤 주인 몰래 집을 나서요. 과연 동물들은 신나는 물놀이를 할 수 있을까요?`,
  },
  {
    id: 13,
    bookcover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158364120.jpg',
    title: '꽁꽁꽁 캠핑',
    writer: '윤정주',
    summary: `한여름 무더위를 날려 버릴 대탈주극!

    솔이네 가족이 바닷가로 캠핑을 왔다. 그런데 솔이가 아이스박스 위에 놔둔 알이조아 초콜릿을 갈매기가 알인 줄 알고 휙 채 가 버린다. 알이조아는 갈매기가 잠든 새 살금살금 미역 줄기를 타고 탈출하다 그만, 게들이 쌓은 모래성을 무너뜨리고 만다.
    다행히 오리 튜브를 만나 바다로 도망치지만, 이번에는 대왕 문어가 먹이인 줄 알고 삼키려 든다. 바다에선 대왕 문어와 갈매기가 쫓아오고, 바닷가에선 게들이 집게발을 짤각대며 기다리고……. 
    
    알이조아는 무사히 솔이 품으로 돌아갈 수 있을까? `,
  },
  {
    id: 14,
    bookcover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788986621136.jpg',
    title: '강아지똥',
    writer: '권정생',
    summary: `『강아지똥』은 아동작가 권정생의 대표작으로, 아무도 거들떠 보지 않는 세상에서 가장 버림받는 존재인 '강아지똥'도 알고 보면 정말 소중한 존재라는 사실을 일러주는 그림책입니다.

    아무짝에도 쓸모없는 것처럼 여겨지는 강아지똥이라는 한낱 미물이 민들레 꽃을 피워내는 데 온몸을 다 바쳐서 소중한 거름이 된다는 이야기가 펼쳐집니다. 사랑과 나눔, 그리고 모든 생명을 귀히 여기는 마음은 우리 모두가 지켜야 할 변함없이 소중한 가치입니다.
    
    의인화된 강아지똥과 강아지똥이 만나는 주변 친구들의 모습을 감동적으로 그려냈습니다.
     `,
  },
  {
    id: 15,
    bookcover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788901232232.jpg',
    title: '팥빙수의 전설',
    writer: '이지은',
    summary: `찌는 듯한 여름날 가장 생각 나는 음식 중 하나인 팥빙수에 대한 엉뚱발랄한 상상을 담은 그림책입니다
  
      깊은 산속에서 할머니가 혼자 농사를 지으며 살고 있습니다. 탱글탱글 과일이 익어 가고 달달구수한 단팥죽이 완성되자, 시장 내다 팔기 위해 할머니는 길을 나서지요. 그런데 가는 길에 갑자기 새하얗고 커다란 눈호랑이가 떡하니 나타납니다. ‘맛있는 거 주면 안 잡아먹지!’
  
      할머니는 정성스레 키운 딸기, 참외, 수박을 내놓습니다. 하지만 눈호랑이의 욕심은 끝이 없네요. 과연 할머니는 무사히 장에 다녀올 수 있을까요?`,
  },
    ];


export default bookData;