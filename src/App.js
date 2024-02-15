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
        { type: "E", text: "간만에 활력도 돌고 즐거운 시간 보내서 재밌었어." },
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
          text: "음식이 모자라지는 않겠지? 지난번에 이정도 시켰다가 모자랐을 때 몇 명이 왔더라?",
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

  const calculateMbti = (e) => {
    const type = e.target.value;
    setMbtiList((prev) => {
      prev.map((val) => {
        if (val.name === type) {
          val.count += 1;
        }
      });
      return prev;
    });
    console.log(mbtiList);
    setPage((prev) => prev + 1);
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
                    onClick={calculateMbti}
                    value={aval.type}
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
        <div>결과 페이지</div>
      )}
    </div>
  );
}

export default App;
