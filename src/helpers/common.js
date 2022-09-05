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