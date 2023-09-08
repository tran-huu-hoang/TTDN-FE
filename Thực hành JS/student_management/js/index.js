
var studentInfo = [];

// thêm mới thông tin sinh viên
const handleClickAdd = () => {
    var item_studentId = document.querySelector('#ID').value
    var item_fullName = document.querySelector('#Name').value
    var item_className = document.querySelector('#Class').value
    var item_faculty = document.querySelector('#Faculty').value
    var item_address = document.querySelector('#Address').value
    var item_phoneNumber = document.querySelector('#PhoneNumber').value
    var item_email = document.querySelector('#Email').value
    var item_dateOfBirth = document.querySelector('#DateBirth').value
    var item_gender = document.querySelector('#Gender').value

    var item = {
        studentId: item_studentId,
        fullName: item_fullName,
        className: item_className,
        faculty: item_faculty,
        address: item_address,
        phoneNumber: item_phoneNumber,
        email: item_email,
        dateOfBirth: item_dateOfBirth,
        gender: item_gender,
    }

    studentInfo.push(item);

    render(studentInfo)

    document.querySelector('.student-details').classList.remove('student-details-show')

    $('.btn-details').click(() => {
        $('.student-details').addClass('student-details-show')

        $('.btn-reset').css('display', 'none');
        $('.btn-add').css('display', 'none');
        $('.btn-update').css('display', 'none');
    })

    $('.btn-update').click(() => {
        $('.student-details').removeClass('student-details-show')

        $('.btn-reset').css('display', 'none');
        $('.btn-add').css('display', 'none');
        $('.btn-update').css('display', 'block');
    })

    handleClear();

    // console.log(studentInfo)
}

const render = (studentInfo) => {
    var table = ``;
    for (let i = 0; i < studentInfo.length; i++) {
        table += `<tr class="align-middle">
            <th scope="row">${i + 1}</th>
            <td>${studentInfo[i].studentId}</td>
            <td>${studentInfo[i].fullName}</td>
            <td>${studentInfo[i].className == "0" ? "IT1" : (studentInfo[i].className == 1 ? "IT2" : "IT3")}</td>
            <td>${studentInfo[i].faculty == 0 ? "Công nghệ thông tin" : (studentInfo[i].faculty == 1 ? "Cơ khí" : (studentInfo[i].faculty == 2 ? "Ô tô" : "Điện tử"))}</td>
            <td>${studentInfo[i].address}</td>
            <td>${studentInfo[i].phoneNumber}</td>
            <td>${studentInfo[i].email}</td>
            <td class="d-flex justify-content-evenly">
                <button type="button" class="btn btn-outline-primary" onclick="handleDetails(${i})">
                    <i class="bi bi-eye"></i>
                    Details
                </button>
                <button type="button" class="btn btn-outline-info"
                    style="margin:0 0.5rem 0 0.5rem;" onclick="handleUpdate(${i})">
                    <i class="bi bi-arrow-repeat"></i>
                    Update
                </button>
                <button type="button" class="btn btn-outline-danger"
                    data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="handleDelete(${i})">
                    <i class="bi bi-trash3"></i>
                    Delete
                </button>
            </td>
        </tr>`
    }
    document.querySelector('.render').innerHTML = table;
}

// hàm clear 
const handleClear = () => {
    document.getElementById("ID").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("DateBirth").value = "";
    document.getElementById("Gender").value = "-1";
    document.getElementById("PhoneNumber").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Address").value = "";
    document.getElementById("Faculty").value = "-1";
    document.getElementById("Class").value = "-1";
}

// mở, đóng bảng thêm thông tin sinh viên
$('.add-new').click(() => {
    $('.student-details').addClass('student-details-show')

    $('.btn-reset').css('display', 'block');
    $('.btn-add').css('display', 'block');
    $('.btn-update').css('display', 'none');
})

$('.btn-cancel').click(() => {
    $('.student-details').removeClass('student-details-show')

    document.querySelector('#ID').readOnly = false
    document.querySelector('#Name').readOnly = false
    document.querySelector('#Class').disabled = false
    document.querySelector('#Faculty').disabled = false
    document.querySelector('#Address').readOnly = false
    document.querySelector('#PhoneNumber').readOnly = false
    document.querySelector('#Email').readOnly = false
    document.querySelector('#DateBirth').readOnly = false
    document.querySelector('#Gender').disabled = false

    handleClear();
})

// xem thông tin sinh viên
const handleDetails = (id) => {
    $('.student-details').addClass('student-details-show')

    $('.btn-reset').css('display', 'none');
    $('.btn-add').css('display', 'none');
    $('.btn-update').css('display', 'none');
    document.querySelector('#ID').value = studentInfo[id].studentId
    document.querySelector('#Name').value = studentInfo[id].fullName
    document.querySelector('#Class').value = studentInfo[id].className
    document.querySelector('#Faculty').value = studentInfo[id].faculty
    document.querySelector('#Address').value = studentInfo[id].address
    document.querySelector('#PhoneNumber').value = studentInfo[id].phoneNumber
    document.querySelector('#Email').value = studentInfo[id].email
    document.querySelector('#DateBirth').value = studentInfo[id].dateOfBirth
    document.querySelector('#Gender').value = studentInfo[id].gender

    // read only
    document.querySelector('#ID').readOnly = true
    document.querySelector('#Name').readOnly = true
    document.querySelector('#Class').disabled = true
    document.querySelector('#Faculty').disabled = true
    document.querySelector('#Address').readOnly = true
    document.querySelector('#PhoneNumber').readOnly = true
    document.querySelector('#Email').readOnly = true
    document.querySelector('#DateBirth').readOnly = true
    document.querySelector('#Gender').disabled = true
}

// sửa thông tin sinh viên
var idUpdate;
const handleUpdate = (id) => {
    $('.student-details').addClass('student-details-show')

    $('.btn-reset').css('display', 'none');
    $('.btn-add').css('display', 'none');
    $('.btn-update').css('display', 'block');

    document.querySelector('#ID').value = studentInfo[id].studentId
    document.querySelector('#Name').value = studentInfo[id].fullName
    document.querySelector('#Class').value = studentInfo[id].className
    document.querySelector('#Faculty').value = studentInfo[id].faculty
    document.querySelector('#Address').value = studentInfo[id].address
    document.querySelector('#PhoneNumber').value = studentInfo[id].phoneNumber
    document.querySelector('#Email').value = studentInfo[id].email
    document.querySelector('#DateBirth').value = studentInfo[id].dateOfBirth
    document.querySelector('#Gender').value = studentInfo[id].gender
    idUpdate = id;
}

$('.btn-update').click(() => {
    studentInfo[idUpdate].studentId = document.querySelector('#ID').value
    studentInfo[idUpdate].fullName = document.querySelector('#Name').value
    studentInfo[idUpdate].className = document.querySelector('#Class').value
    studentInfo[idUpdate].faculty = document.querySelector('#Faculty').value
    studentInfo[idUpdate].address = document.querySelector('#Address').value
    studentInfo[idUpdate].phoneNumber = document.querySelector('#PhoneNumber').value
    studentInfo[idUpdate].email = document.querySelector('#Email').value
    studentInfo[idUpdate].dateOfBirth = document.querySelector('#DateBirth').value
    studentInfo[idUpdate].gender = document.querySelector('#Gender').value
    $(".student-details").removeClass("student-details-show")
    render(studentInfo);
})

// xóa thông tin sinh viên
const handleDelete = (id) => {
    var checkDelete = confirm('Bạn có muốn xóa ko?')
    if (checkDelete) {
        studentInfo.splice(id, 1);
        render(studentInfo);
    }
}

// tìm kiếm
$('.btn-search').click(() => {
    var studentInfoSearch = [];
    var string = document.querySelector('#keyword').value;
    if (document.querySelector('#filter').value == "0") {
        for (let i = 0; i < studentInfo.length; i++) {
            if (studentInfo[i].fullName.toLowerCase().includes(string.toLowerCase())) {
                studentInfoSearch.push(studentInfo[i])
            }
        }
    }
    else if (document.querySelector('#filter').value == "1") {
        for (let i = 0; i < studentInfo.length; i++) {
            if (studentInfo[i].studentId.toLowerCase().includes(string.toLowerCase())) {
                studentInfoSearch.push(studentInfo[i])
            }
        }
    }
    else if (document.querySelector('#filter').value == "2") {
        for (let i = 0; i < studentInfo.length; i++) {
            var stringClass = studentInfo[i].className == "0" ? "IT1" : (studentInfo[i].className == 1 ? "IT2" : "IT3")
            if (stringClass.toLowerCase().includes(string.toLowerCase())) {
                studentInfoSearch.push(studentInfo[i])
            }
        }
    }

    render(studentInfoSearch)
})