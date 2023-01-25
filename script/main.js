const birthdate = "2008/3/15";

const ageCalculation = (birthDate, nowDate) => {
    const birthNumber = birthDate.getFullYear() * 10000
        + (birthDate.getMonth() + 1) * 100
        + birthDate.getDate();
    const nowNumber = nowDate.getFullYear() * 10000
        + (nowDate.getMonth() + 1) * 100
        + nowDate.getDate();

    return Math.floor((nowNumber - birthNumber) / 10000);
}

const age = ageCalculation(new Date(birthdate), new Date());

document.getElementById("age").innerHTML = "(" + age + "歳)";;
