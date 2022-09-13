
import ReactGA from "react-ga";


const gaTrackingID = "UA-241007240-1";

export function googleAnalytics() {
    // send to google analytics
    const _hostname = window.location.hostname;
    const _pathname = window.location.pathname;
    const _location = _hostname + _pathname.slice(1);
    ReactGA.initialize(gaTrackingID);
    var ga = ReactGA.ga();

    ga("set", "hostname", _hostname);
    ga("set", "page", _pathname);
    ga("set", "location", _location);
    ga("send", "pageview");
    // ga("send", { hitType: "pageview", page: _pathname });
}

export const convertWord = (tmp, setValue, type) => {

    let convertNonVocalAlpha = tmp.split(/[aeiou]/gi);
    let convertVocalAlpha = tmp.match(/[aeiou]/gi);
    let resultConvert;
    if (convertVocalAlpha === undefined || convertVocalAlpha === null) {
        resultConvert += tmp;
    } else {
        if (type == "u") {
            let arr;
            arr = new Array(tmp.slice(0, tmp.length / convertVocalAlpha.length), tmp.slice(tmp.length / convertVocalAlpha.length, tmp.length));
            let finalResult = arr[1].replace(arr[1].match(/[aeiou]/gi), "a");
            let typeNang = "nang";
            let typeNangResult = typeNang.replace(typeNang.match(/[aeiou]/gi), arr[1].match(/[aeiou]/gi));
            if (tmp.length <= 4) {
                resultConvert += "u" + tmp.replace(tmp.match(/[aeiou]/gi), "a") + typeNang.replace(typeNang.match(/[aeiou]/gi), tmp.match(/[aeiou]/gi));
                console.log(arr[1], arr);
            } else {
                resultConvert += "u" + finalResult + arr[0] + typeNangResult;
            }
            console.log(arr[0], tmp);
        } else {
            for (let i = 0; i <= convertNonVocalAlpha.length; i++) {
                for (let j = 0; j <= 0; j++) {
                    resultConvert +=
                        convertNonVocalAlpha[i] +
                        convertVocalAlpha[i] +
                        type +
                        convertVocalAlpha[i];
                }
            }
        }
    }
    setValue(resultConvert?.split('undefined'));
}