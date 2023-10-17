try {
    changeDamagedToNotes();
} catch {
    console.error();
}

try {
    noSorting();
} catch {
    console.error();
}

function changeDamagedToNotes() {
    var checkbox = document.getElementById("RentalDamaged")
    if (checkbox.checked == true) {
        console.log("Checkbox is checked.." + checkbox.checked);
        document.getElementById("damages-incurred").style.display = 'flex';
        document.getElementById("notes").style.display = 'none';
    }
    else {
        console.log("Checkbox is not checked..");
        document.getElementById("damages-incurred").style.display = 'none';
        document.getElementById("notes").style.display = 'flex';
    }
}

function noSorting() {
    $.ajax({
        type: "POST",
        url: "RentalHistories/NoSorting",
        success: function (result) {
/*            alert('ok');*/
            $('#rental-list').html(result);
        },
        error: function (result) {
            console.log('error');
        }
    });
}

function damagedRentals() {
    $.ajax({
        type: "POST",
        url: "RentalHistories/DamagedRentals",
        success: function (result) {
            /*            alert('ok');*/
            $('#rental-list').html(result);
        },
        error: function (result) {
            console.log('error');
        }
    });
}

function undamagedRentals() {
    $.ajax({
        type: "POST",
        url: "RentalHistories/UndamagedRentals",
        success: function (result) {
            /*            alert('ok');*/
            $('#rental-list').html(result);
        },
        error: function (result) {
            console.log('error');
        }
    });
}

function rentalsAZ() {
    $.ajax({
        type: "POST",
        url: "RentalHistories/RentalsAZ",
        success: function (result) {
            /*            alert('ok');*/
            $('#rental-list').html(result);
        },
        error: function (result) {
            console.log('error');
        }
    });
}

function rentalsZA() {
    $.ajax({
        type: "POST",
        url: "RentalHistories/RentalsZA",
        success: function (result) {
            /*            alert('ok');*/
            $('#rental-list').html(result);
        },
        error: function (result) {
            console.log('error');
        }
    });
}

