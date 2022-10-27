import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeRotate, matching, notmatching } from "./Slice";

function App() {
  const [clicking, setClicking] = useState(0);
  const [win, setWin] = useState("Loose");
  const [show1, setShow1] = useState("");
  const [show2, setShow2] = useState("");
  const allpics = useSelector((state) => state.memorygame.game);
  const dispatch = useDispatch();
  const flipfunc = (e) => {
    setShow1(e);
    if (show1.match === e.match) {
      let data = { s1: show1, s2: e };
      dispatch(changeRotate(e));
      setTimeout(() => {
        dispatch(matching(data));
      }, 1000);
      setShow1("");
    } else {
      dispatch(changeRotate(e));
    }
  };

  const flipfuncback = (e) => {
    setClicking(clicking + 1);
    setShow2(e);
    let data = { s1: show1, s2: e };
    if (show1.match === e.match) {
      dispatch(changeRotate(e));
      setTimeout(() => {
        dispatch(matching(data));
      }, 1000);
      setShow1("");
      setShow2("");
    } else {
      dispatch(changeRotate(e));
      setTimeout(() => {
        dispatch(notmatching(data));
      }, 1000);
      setShow1("");
      setShow2("");
    }
  };

  React.useEffect(() => {
    const func = () => {
      let counts = 2;
      allpics.map((i, index) => {
        if (i.match === "match") {
          counts = counts + 1;
        }
      });
      if (counts === allpics.length) {
        setWin("Win");
      }
    };
    func();
  });
  return (
    <div className="App">
      <header className="App-header">
        {win === "Loose" ? (
          <>
            <h1>Steps : {clicking}</h1>
            <div className="boxsdiv">
              {allpics.map((i, index) => {
                return (
                  <div
                    className={i.rotate ? "flip-box2" : "flip-box"}
                    onClick={() => {
                      if (show1 === "") {
                        flipfunc(i);
                      } else {
                        flipfuncback(i);
                      }
                    }}
                  >
                    <div
                      className="flip-box-inner"
                      style={
                        i.rotate === false
                          ? {}
                          : { transform: "rotateY(180deg)" }
                      }
                    >
                      <div className="flip-box-front">
                        <img
                          src="https://content.presentermedia.com/content/animsp/00000000/999/question_mark_group_300_wht.gif"
                          alt=""
                          className="mainpic"
                        />
                      </div>

                      <div className="flip-box-back">
                        <img src={i.img} alt="" className="mainpic" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <img
              alt=""
              src="https://media.tenor.com/HAGXdX-X-1cAAAAM/no1-happy.gif"
            />
            <h1> You have win with {clicking} steps</h1>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Replay
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
