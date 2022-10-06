/* eslint-disable */
import React, { useEffect, useState } from "react";
import { convertWord } from "../helpers/common";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Image from "next/image";
import swap from './../../public/swap.png';
import swapWhite from './../../public/swap_white.png';

const MainScreen = () => {
    const convertWordList = ["G", "S", "P", "U"];
    const [text, setText] = useState();
    const [originalText, setOriginalText] = useState();
    const [copied, setCopied] = useState(false);
    const [reverseShow, setReverseShow] = useState(false);
    const [indexSelected, setIndexSelected] = useState(0);
    const [reverse, setReverse] = useState();
    const [keyValue, setKeyValue] = useState(0);
    const [languangeType, setLanguangeType] = useState();

    useEffect(() => {
        setLanguangeType(convertWordList[indexSelected]?.toLowerCase());
    }, [indexSelected]);

    useEffect(() => {
        console.log(reverse);
    }, [reverse]);

    useEffect(() => {
        if (text) {
            convertWord(originalText, setText, languangeType);
        }
    }, [indexSelected, originalText, languangeType]);

    useEffect(() => {
        if (copied) {
            setTimeout(function () { setCopied(false) }, 2000);
        }
    }, [copied]);

    useEffect(() => {
        let kamnos = document.querySelectorAll("#kamnos");
        setTimeout(() => {
            if (kamnos.length > 0) {
                setKeyValue(keyValue + 1);
            }
        }, 1000);
    }, []);

    const handleChange = (e) => {
        let tmp = e.target.value;
        if (reverseShow && languangeType !== "u") {
            if (tmp !== '') {
                let tmpReverse = tmp;
                let resultConvert;

                let convertNonVocalAlpha = tmpReverse.split(/[aeiou]/gi);
                let convertVocalAlpha = tmpReverse.match(/[aeiou]/gi);

                if (convertVocalAlpha === undefined || convertVocalAlpha === null) {
                    resultConvert += tmpReverse;
                } else {
                    for (let i = 0; i <= convertNonVocalAlpha.length; i += 2) {
                        for (let j = 0; j <= 0; j++) {
                            resultConvert +=
                                convertNonVocalAlpha[i] +
                                convertVocalAlpha[i]

                        }
                    }
                    let final = resultConvert?.split('NaN');
                    let resultFinal = final[0].split("undefined");
                    setReverse(resultFinal);
                }
            } else {
                setReverse();
            }
        } else {
            setOriginalText(tmp);
            if (tmp !== '') {
                convertWord(tmp, setText, languangeType);
            } else {
                setText();
            }
        }
    }
    const handleSelect = (e) => {
        setIndexSelected(e.target.id);
    }

    const handleReset = () => {
        let reset = document.getElementById('input');
        reset.value = "";
        setText();
    }

    const reverseWord = () => {
        let reset = document.getElementById('input');
        reset.value = "";
        setReverseShow(!reverseShow);
        setText();
    }

    return (
        <div key={keyValue} id="kamnos" className="main-screen__dictionary">
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
                <div className="main-screen__result-wrapper">
                    <div className="main-screen__result-label">
                        Hasil :
                    </div>
                    {languangeType !== "u" &&
                        <div className={`main-screen__result-reverse ${reverseShow && 'active-reverse'}`} onClick={reverseWord}>
                            Reverse{"  "}
                            {reverseShow ? <Image src={swapWhite} width={18} height={8} /> : <Image src={swap} width={18} height={8} />}
                        </div>
                    }
                </div>
                <div className="main-screen__result-convert">
                    {reverseShow ? reverse && reverse[1] : text && text[1]}
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
