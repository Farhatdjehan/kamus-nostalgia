/* eslint-disable */
import React, { useEffect, useState } from "react";
import './../styles/MainScreen.css';

const MainScreen = () => {
    const convertWordList = ["G", "S", "P"];
    const [text, setText] = useState();
    const [indexSelected, setIndexSelected] = useState(0);
    const [toast, setToast] = useState(false);
    const displayValue = convertWordList[indexSelected];

    useEffect(() => { console.log(text), displayValue, convertWordList }, [text, indexSelected])

    useEffect(() => {

    }, [])

    const toastComponent = () => {
        return (
            <div>Berhasil!</div>
        )
    }
    const handleChange = (e) => {
        let tmp = e.target.value;
        if (tmp !== '') {
            let convertNonVocalAlpha = tmp.split(/[aeiou]/gi);
            let convertVocalAlpha = tmp.match(/[aeiou]/gi);
            let languange = displayValue.toLowerCase();
            let resultConvert;

            if (convertVocalAlpha === undefined || convertVocalAlpha === null) {
                resultConvert += tmp;
            } else {
                for (let i = 0; i <= convertNonVocalAlpha.length; i++) {
                    for (let j = 0; j <= 0; j++) {
                        resultConvert +=
                            convertNonVocalAlpha[i] +
                            convertVocalAlpha[i] +
                            languange +
                            convertVocalAlpha[i];
                    }
                }
            }
            setText(resultConvert.split('undefined'));
        } else {
            setText();
        }
    }
    const handleSelect = (e) => {
        setIndexSelected(e.target.id);
    }
    const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
        let elementToast = document.getElementsByClassName("main-screen__toast");
        elementToast[0].style.display = "block";
        setTimeout(function () { elementToast[0].style.display = elementToast[0].style.display = "none"; }, 2000);
        // setTimeout(toastComponent, 2000);
    }
    return (
        <div className="main-screen__dictionary">
            <div className="main-screen__container">
                <div className="main-screen__title">
                    Kamnos
                </div>
                <div className="main-screen__input">
                    <input type="text" id="input" name="input" onChange={handleChange} />
                </div>
                <div className="main-screen__selector">
                    <div className="main-screen__selector-label">
                        Tipe Bahasa
                    </div>
                    <div className="main-screen__selector-container">
                        {convertWordList.map((item, index) => {
                            return (
                                <div id={index} key={index} onClick={handleSelect} className={`main-screen__selector-input ${indexSelected == index && 'main-screen__active'}`}>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="main-screen__result">
                <div className="main-screen__result-label">
                    Hasil :
                </div>
                <div className="main-screen__result-convert">
                    {text && text[1]}
                </div>
                <div className="main-screen__copy">
                    <button onClick={() => handleCopy(text[1])} className="main-screen__button">Salin</button>
                </div>
            </div>
            <div className="main-screen__toast">
                Berhasil menyalin!
            </div>
        </div>
    );
};

export default MainScreen;
