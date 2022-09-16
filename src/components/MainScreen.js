/* eslint-disable */
import React, { useEffect, useState } from "react";
import { convertWord } from "../helpers/common";
import './../styles/MainScreen.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const MainScreen = () => {
    const convertWordList = ["G", "S", "P", "U"];
    const [text, setText] = useState();
    const [originalText, setOriginalText] = useState();
    const [copied, setCopied] = useState(false);
    const [indexSelected, setIndexSelected] = useState(0);
    const [languangeType, setLanguangeType] = useState();

    useEffect(() => {
        setLanguangeType(convertWordList[indexSelected]?.toLowerCase());
    }, [indexSelected])

    useEffect(() => {
        console.log(text);
    }, [text])

    useEffect(() => {
        if (text) {

            convertWord(originalText, setText, languangeType);

        }
    }, [indexSelected, originalText, languangeType]);

    useEffect(() => {
        if (copied) {
            setTimeout(function () { setCopied(false) }, 2000);
        }
    }, [copied])

    const handleChange = (e) => {
        let tmp = e.target.value;

        setOriginalText(tmp);
        if (tmp !== '') {
            convertWord(tmp, setText, languangeType);
        } else {
            setText();
        }
    }
    const handleSelect = (e) => {
        // if (e.target.id == "3" || e.target.id == "") {
        //     setIndexSelected(0);
        // } else {
        setIndexSelected(e.target.id);
        // }

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
                                    <div id={index} key={index} onClick={handleSelect} className={` main-screen__selector-input ${indexSelected == index && 'main-screen__active'}`}>
                                        {item}
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
                    <CopyToClipboard text={text && text[1]}
                        onCopy={() => setCopied(true)}>
                        <button className="main-screen__button">Salin</button>
                    </CopyToClipboard>
                </div>
                {copied &&
                    <div className="main-screen__toast">
                        <div className="toast-text">
                            Berhasil menyalin!
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default MainScreen;
