
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
            resultConvert +=
                type +
                convertNonVocalAlpha[1] + "a" +
                convertNonVocalAlpha[0] + convertVocalAlpha[1] + "nang";

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
    setValue(resultConvert.split('undefined'));
}