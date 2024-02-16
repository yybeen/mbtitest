import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  //모바일 화면에서 불필요한 스크롤을 줄이기 위해 vh 계산
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  //화면 변화가 일어날때마다 vh 계산
  useEffect(() => {
    setVh();
    function onResize() {
      setVh();
    }
    window.addEventListener("resize", onResize);
  }, []);

  const [page, setPage] = useState(0);

  const questionList = [
    {
      q: ["친한 친구들이랑 놀다가 집에 돌아오는 길, 그때 내 생각은?"],
      a: [
        { type: "I", text: "재밌었지만 피곤해서 빨리 집에 가서 쉬고 싶어." },
        {
          type: "E",
          text: "즐거운 시간 보내서 재밌었어! 이렇게 노니까 힘이 나는거 같아.",
        },
      ],
    },
    {
      q: ["친한 친구가 근처에 아는 지인이 있는데 불러도 되냐고 묻는다면?"],
      a: [
        { type: "I", text: "갑자기...? 음..." },
        { type: "E", text: "응? 좋아 불러!" },
      ],
    },
    {
      q: ["이번주에 일이 많아 바빴던 당신, 주말에 할 일은?"],
      a: [
        { type: "I", text: "바빠서 힘들었기에 집에서 휴식을 취한다." },
        { type: "E", text: "바빠서 못 놀았던만큼 나가서 신나게 논다." },
      ],
    },
    {
      q: ["멍 때릴때, 내가 하는 생각은?"],
      a: [
        {
          type: "S",
          text: "?? 멍 때리는데 뭘해. 아무생각없이 가만히 있는거지.",
        },
        { type: "N", text: "상상에 상상을 더해 상상 속으로." },
      ],
    },
    {
      q: ["당신이 요리할 때 스타일은?"],
      a: [
        {
          type: "S",
          text: "레시피를 보며 정확히 계량해야지. 요리는 과학이야.",
        },
        {
          type: "N",
          text: "음식은 손맛이지! 계량컵은 사치야. 이정도면 되지 않을까?",
        },
      ],
    },
    {
      q: ["자주 가던 장소로 가는 길, 어떤 길을 선택하겠는가?"],
      a: [
        { type: "S", text: "익숙한 길이 최고야." },
        { type: "N", text: "오늘은 새로운 길로 가볼까?" },
      ],
    },
    {
      q: ["친구가 스트레스 받는다며 술먹자고 연락이 왔다면, 당신의 첫 마디는?"],
      a: [
        { type: "F", text: "왜 무슨 일이야ㅠㅠ" },
        { type: "T", text: "그래, 오늘 안주 뭐 먹을까?" },
      ],
    },
    {
      q: ["당신이 친구에게 오늘 저녁에 뭐하는지 물어본다면, 그 이유는?"],
      a: [
        {
          type: "F",
          text: "같이 놀자고 하고 싶은데 시간되는지 물어보려고",
        },
        {
          type: "T",
          text: "정말 뭐하는지 궁금해서",
        },
      ],
    },
    {
      q: ["열심히 준비한 과제가 끝나고 나서 당신이 듣고 싶은 말은?"],
      a: [
        { type: "F", text: "열심히 했네! 정말 고생했어~" },
        { type: "T", text: "정말 잘했다! 특히 이 부분이 너무 좋았어!" },
      ],
    },
    {
      q: ["오늘 뭐 먹을지 정하는 과정에서 당신이라면?"],
      a: [
        { type: "J", text: "내가 맛집 찾아봤는데 여기 어때?" },
        { type: "P", text: "저기 맛있겠다 저기 가볼까?" },
      ],
    },
    {
      q: [
        "친구가 심심하다고 지금 만나자고 연락이 왔다, 이때 당신이 드는 생각은?",
      ],
      a: [
        { type: "J", text: "갑자기? 왜? 무슨 일 있어?" },
        { type: "P", text: "너무 좋지! 지금 나갈께~" },
      ],
    },
    {
      q: ["친구들을 집에 초대하면서 음식을 준비할때, 당신이라면?"],
      a: [
        {
          type: "J",
          text: "음식이 모자라지는 않겠지? 저번에 이정도 시켰다가 모자랐을 때 몇 명이 왔더라?",
        },
        { type: "P", text: "일단 이정도 준비하고 모자라면 더 시켜먹지 뭐" },
      ],
    },
    {
      q: ["테스트가 모두 끝났어요!"],
      a: [{ type: "", text: "결과 보러 가기" }],
    },
  ];

  const [mbtiList, setMbtiList] = useState([
    { name: "I", count: 0 },
    { name: "E", count: 0 },
    { name: "S", count: 0 },
    { name: "N", count: 0 },
    { name: "F", count: 0 },
    { name: "T", count: 0 },
    { name: "J", count: 0 },
    { name: "P", count: 0 },
  ]);

  const calculateMbti = (idx, selectedType) => {
    const type = selectedType;
    let ls = mbtiList;
    for (let i = 0; i < ls.length; i++) {
      if (ls[i].name === type) {
        ls[i].count += 1;
      }
    }
    setMbtiList(ls);
    console.log(mbtiList);
    setPage(page + 1);

    if (idx + 1 === questionList.length) {
      getMbtiResult();
    }
  };

  function randomValueFromQuestionArray(array) {
    let indexArray = [];
    let newArray = [];
    while (indexArray.length !== array.length - 1) {
      const randomQuestion = Math.floor(Math.random() * (array.length - 1));
      if (!indexArray.includes(randomQuestion)) {
        newArray.push(array[randomQuestion]);
        indexArray.push(randomQuestion);
        const randomAnswer = Math.floor(
          Math.random() * newArray[newArray.length - 1].a.length
        );
        if (randomAnswer === 1) {
          let tmp = newArray[newArray.length - 1].a[0];
          newArray[newArray.length - 1].a[0] =
            newArray[newArray.length - 1].a[1];
          newArray[newArray.length - 1].a[1] = tmp;
        }
      }
    }
    newArray.push(array[12]);
    return newArray;
  }

  const [randomQuestionList, setRandomQuestionList] = useState(
    randomValueFromQuestionArray(questionList)
  );

  const [mbtiResult, setMbtiResult] = useState([]);

  function getMbtiResult() {
    let mbtis = [
      {
        mbti: "ENTP",
        summery: "뜨거운 논쟁을 즐기는 변론가",
        contents: [
          "박학다식하고, 독창적이에요",
          "하나에 꽂히면 그것에만 집중해요",
          "매일 반복되는 일상 싫어해요",
        ],
      },
      {
        mbti: "ENTJ",
        summery: "대담한 통솔자",
        contents: [
          "철저한 준비를 하고, 활동적이에요",
          "도전 정신이 강해요",
          "현실적이고 논리적이에요",
        ],
      },
      {
        mbti: "ENFP",
        summery: "재기발랄한 활동가",
        contents: [
          "상상력이 풍부하고, 순발력이 뛰어나요",
          "사람을 너무 좋아해서 상처 받아도 잘 못 끊어내요",
          "창의적이고 자유로운 삶을 선호해요",
        ],
      },
      {
        mbti: "ENFJ",
        summery: "정의로운 사회운동가",
        contents: [
          "사교적이고, 타인의 의견을 존중해요",
          "주변사람을 잘 챙겨줘요",
          "객관적이고 멘탈이 강해요",
        ],
      },
      {
        mbti: "ESTP",
        summery: "모험을 즐기는 사업가",
        contents: [
          "느긋하고, 관용적이며, 타협을 잘해요",
          "현실적 문제 해결에 능숙해요",
          "말보다 직접 부딪쳐서 경험하는 것 선호해요",
        ],
      },
      {
        mbti: "ESTJ",
        summery: "엄격한 관리자",
        contents: [
          "추진력이 좋고, 체계적으로 일해요",
          "호불호가 확실해요",
          "계획이 틀어지거나 방해받는 거 싫어해요",
        ],
      },
      {
        mbti: "ESFP",
        summery: "자유로운 영혼의 연예인",
        contents: [
          "호기심이 많으며, 개방적이에요",
          "사교성이 좋아서 모르는 사람들과도 잘 어울려요",
          "미적 감각이 좋고 관찰력이 뛰어나요",
        ],
      },
      {
        mbti: "ESFJ",
        summery: "사교적인 외교관",
        contents: [
          "친절하고 동정심이 많아요",
          "타인에 관한 소소한 것까지 잘 기억하고 배려해요",
          "사람들에게 먼저 다가가는 편이에요",
        ],
      },
      {
        mbti: "INTP",
        summery: "논리적인 사색가",
        contents: [
          "잠재력과 가능성을 중요시해요",
          "감수성이 풍부해요",
          "주관이 뚜렷해요",
        ],
      },
      {
        mbti: "INTJ",
        summery: "용의주도한 전략가",
        contents: [
          "의지가 강하고, 독립적이에요",
          "분석력이 뛰어나요",
          "공상을 많이 하는 편이에요",
        ],
      },
      {
        mbti: "INFP",
        summery: "열정적인 중재자",
        contents: [
          "친절하고 섬세해요",
          "상대방을 잘 이해하지만, 상처도 쉽게 받아요",
          "꿈이나 이상을 소중하게 생각해요",
        ],
      },
      {
        mbti: "INFJ",
        summery: "선의의 옹호자",
        contents: [
          "높은 통찰력으로 사람들에게 영감을 줘요",
          "눈치가 빠른편이에요",
          "사람들과 잘 어울리면서도 혼자있는 시간 좋아해요",
        ],
      },
      {
        mbti: "ISTP",
        summery: "만능 재주꾼",
        contents: [
          "과묵하고 분석적이며, 적응력이 강해요",
          "일을 효율적으로 해요",
          "힘든 얘기를 잘 안해요",
        ],
      },
      {
        mbti: "ISTJ",
        summery: "청렴결백한 논리주의자",
        contents: [
          "책임감이 강해요",
          "원리 원칙에 충실해요",
          "즉흥적인 거 싫어해요",
        ],
      },
      {
        mbti: "ISFP",
        summery: "호기심 많은 예술가",
        contents: [
          "낙천적이고 겸손해요",
          "인간 관계에 신경 많이 쓰고 남 눈치도 많이 봐요",
          "혼자 있는 시간동안 에너지를 얻어요",
        ],
      },
      {
        mbti: "ISFJ",
        summery: "용감한 수호자",
        contents: [
          "차분하고 헌신적이며, 인내심이 강해요",
          "다른 사람 이야기를 잘 들어줘요",
          "배려 넘치고 공감 능력이 좋아요",
        ],
      },
    ];

    let IorE =
      mbtiList.find((data) => data.name === "I").count >
      mbtiList.find((data) => data.name === "E").count
        ? "I"
        : "E";
    let SorN =
      mbtiList.find((data) => data.name === "S").count >
      mbtiList.find((data) => data.name === "N").count
        ? "S"
        : "N";
    let TorF =
      mbtiList.find((data) => data.name === "T").count >
      mbtiList.find((data) => data.name === "F").count
        ? "T"
        : "F";
    let PorJ =
      mbtiList.find((data) => data.name === "P").count >
      mbtiList.find((data) => data.name === "J").count
        ? "P"
        : "J";

    let mbti = IorE + SorN + TorF + PorJ;

    setMbtiResult(mbtis.filter((data) => data.mbti === mbti)[0]);
  }

  return (
    <div className="mbtiLayout">
      {page === 0 ? (
        // 시작 페이지
        <div className="startPageLayout">
          <div className="startLogo">나의 MBTI는?</div>
          <div
            onClick={() => {
              setPage(1);
            }}
            className="startButton"
          >
            테스트 시작하기
          </div>
        </div>
      ) : page <= randomQuestionList.length ? (
        //테스트 페이지
        <div className="testPageLayout">
          <div className="testPageTitle">
            <div>나의 MBTI는?</div>
            <div>
              {page !== 13
                ? `${page} / ${randomQuestionList.length - 1}`
                : "😊"}
            </div>
          </div>

          {randomQuestionList.map((val, idx) => (
            <div
              className="questionList"
              style={{ display: page === idx + 1 ? "flex" : "none" }}
              key={idx}
            >
              <div>
                {val.q.map((qval, qidx) => (
                  <div key={qidx} className="questionItemLayout">
                    {qval}
                  </div>
                ))}
              </div>
              {val.a.map((aval, aidx) => (
                <div key={aidx}>
                  <button
                    onClick={() => {
                      calculateMbti(idx, aval.type);
                    }}
                    className="answerItemLayout"
                  >
                    {aval.text}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        //결과 페이지
        <div className="resultPageLayout">
          <div className="resultPageTitle">
            <div>나의 MBTI는?</div>
            <div>{mbtiResult.mbti}</div>
            <div>{mbtiResult.summery}</div>
          </div>
          <div className="mbtiPointsLayout">
            <p>{mbtiResult.mbti}는요!</p>
            {mbtiResult.contents.map((val, idx) => (
              <div key={idx} style={{ paddingBottom: "10px" }}>
                {val}
              </div>
            ))}
          </div>
          <div
            className="reTestButton"
            onClick={() => window.location.reload()}
          >
            다시하기
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
