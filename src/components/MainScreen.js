/* eslint-disable */
import React, { useEffect, useState } from "react";
import { convertWord } from "../helpers/common";
import './../styles/MainScreen.css';

const MainScreen = () => {
    const convertWordList = ["G", "S", "P", "U"];
    const [text, setText] = useState();
    const [originalText, setOriginalText] = useState();
    const [indexSelected, setIndexSelected] = useState(0);
    const [languangeType, setLanguangeType] = useState();

    useEffect(() => {
        if (indexSelected) {
            setLanguangeType(convertWordList[indexSelected]?.toLowerCase());
        }
    }, [indexSelected])

    useEffect(() => {
        if (text) {

            convertWord(originalText, setText, languangeType);
            // let convertNonVocalAlpha = originalText.split(/[aeiou]/gi);
            // let convertVocalAlpha = originalText.match(/[aeiou]/gi);
            // let resultConvert;

            // if (convertVocalAlpha === undefined || convertVocalAlpha === null) {
            //     resultConvert += originalText;
            // } else {
            //     for (let i = 0; i <= convertNonVocalAlpha.length; i++) {
            //         for (let j = 0; j <= 0; j++) {
            //             resultConvert +=
            //                 convertNonVocalAlpha[i] +
            //                 convertVocalAlpha[i] +
            //                 languangeType +
            //                 convertVocalAlpha[i];
            //         }
            //     }
            // }

            // setText(resultConvert.split('undefined'));

        }
    }, [indexSelected, originalText, languangeType]);

    const handleChange = (e) => {
        let tmp = e.target.value;

        setOriginalText(tmp);

        if (tmp !== '') {
            convertWord(tmp, setText, languangeType);
            // let convertNonVocalAlpha = tmp.split(/[aeiou]/gi);
            // let convertVocalAlpha = tmp.match(/[aeiou]/gi);
            // let resultConvert;

            // if (convertVocalAlpha === undefined || convertVocalAlpha === null) {
            //     resultConvert += tmp;
            // } else {
            //     for (let i = 0; i <= convertNonVocalAlpha.length; i++) {
            //         for (let j = 0; j <= 0; j++) {
            //             resultConvert +=
            //                 convertNonVocalAlpha[i] +
            //                 convertVocalAlpha[i] +
            //                 languangeType +
            //                 convertVocalAlpha[i];
            //         }
            //     }
            // }
            // setText(resultConvert.split('undefined'));
        } else {
            setText();
        }
    }
    const handleSelect = (e) => {

        if (e.target.id == "3") {
            setIndexSelected(0);
        } else {
            setIndexSelected(e.target.id);
        }

    }
    const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
        let elementToast = document.getElementsByClassName("main-screen__toast");
        elementToast[0].style.display = "block";
        setTimeout(function () { elementToast[0].style.display = elementToast[0].style.display = "none"; }, 2000);
    }
    const handleReset = () => {
        let reset = document.getElementById('input');
        reset.value = "";
        setText();
    }
    return (
        <div className="main-screen__dictionary">
            <div className="main-screen__container">
                <div className="main-screen__title">
                    Kamnos
                </div>
                <div className="main-screen__input">
                    <input type="text" id="input" placeholder="Masukkan Kata" name="input" onChange={handleChange} autoFocus />
                    {text &&
                        <div className="main-screen__times" onClick={handleReset}>×</div>}
                </div>
                <div className="main-screen__selector">
                    <div className="main-screen__selector-label">
                        Tipe Bahasa
                    </div>
                    <div className="main-screen__selector-container">
                        {convertWordList.map((item, index) => {
                            return (
                                <>
                                    <div id={index} key={index} onClick={handleSelect} className={`${convertWordList.length === index + 1 && 'coming-soon_btn'} main-screen__selector-input ${indexSelected == index && convertWordList.length !== index + 1 && 'main-screen__active'}`}>
                                        {item}
                                        {convertWordList.length === index + 1 &&
                                            <div className="coming-soon__label">SEGERA!</div>
                                        }
                                    </div>
                                </>
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
                <div className="toast-text">
                    Berhasil menyalin!
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
