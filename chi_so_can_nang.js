function kiem_tra() {
    let can_nang = document.getElementById('can_nang').value;
    let chieu_cao = document.getElementById('chieu_cao').value;
    let bmi = can_nang / ( Math.pow(chieu_cao, 2) );
    let ra = "";

    if (bmi < 18)
        document.write("Gầy nhé");
    else if (bmi < 25.0)
        document.write("BÌnh thường");
    else if (bmi < 30.0)
        document.write("Hơi béo nha");
    else
        document.write("Béo vãi");
}