

// 1. Add 


var studentInfo = {
    fullName: "",
    dateBirth: "",
    gender: "",
    phoneNumber: "",
    email: "",
    address: "",
    facultyOption: "",
    classNameOption: "",
}

// var studentInfo = [
//     { studentId: "SD01", fullName: "Nguyễn Thành Hưng", className: 0, faculty: 0, adrress: "Hà Nội", phoneNumber: "0989898222", email: "thanh.hung.st302@gmail.com", dateOfBirth: "01-01-2000", gender: 0 },
//     { studentId: "SD02", fullName: "Trần Hữu Hoàng", className: 2, faculty: 1, adrress: "Hà Nội", phoneNumber: "0123456789", email: "hoang@gmail.com", dateOfBirth: "14-07-2003", gender: 0 },
// ]


const handleClickAdd = () => {
    studentInfo.fullName = document.querySelector('#Name').value;
    studentInfo.className = document.querySelector('#Class').value;
    studentInfo.faculty = document.querySelector('#Faculty').value;
    studentInfo.address = document.querySelector('#Address').value;
    studentInfo.email = document.querySelector('#Email').value;
    studentInfo.phoneNumber = document.querySelector('#PhoneNumber').value;
    studentInfo.dateBirth = document.querySelector('#DateBirth').value;
    studentInfo.gender = document.querySelector('#Gender').value;


    var className = "";
    if (studentInfo.classNameOption == "0") {
        className = "IT1"
    }
    else if (studentInfo.classNameOption == "1") {
        className = "2"
    }
    else if (studentInfo.classNameOption == "2") {
        className = "3"
    }


    var faculty = "";
    if (studentInfo.facultyOption == "0") {
        faculty = "Công nghệ thông tin"
    }
    else if (studentInfo.facultyOption == "1") {
        faculty = "Cơ khí"
    }
    else if (studentInfo.facultyOption == "2") {
        faculty = "Ô tô"
    }
    else if (studentInfo.facultyOption == "3") {
        faculty = "Điện tử"
    }

    var htmlTbody = `<tr class="align-middle">
        <th scope="row">2</th>
        <td>SD02</td>
        <td>${studentInfo.fullName}</td>
        <td>${className}</td>
        <td>${faculty}</td>
        <td>${studentInfo.address}</td>
        <td>${studentInfo.phoneNumber}</td>
        <td>${studentInfo.email}</td>
        <td class="d-flex justify-content-evenly">
            <button type="button" class="btn btn-outline-primary btn-details">
                <i class="bi bi-eye"></i>
                Details
            </button>
            <button type="button" class="btn btn-outline-info btn-update"
                style="margin:0 0.5rem 0 0.5rem;">
                <i class="bi bi-arrow-repeat"></i>
                Update
            </button>
            <button type="button" class="btn btn-outline-danger btn-delete" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <i class="bi bi-trash3"></i>
                Delete
            </button>
        </td>
    </tr>`

    // studentInfo.map((item, index) => {
    //     return (
    //         <tr class="align-middle">
    //             <th scope="row">${index + 1}</th>
    //             <td>SD01</td>
    //             <td>${item.fullName}</td>
    //             <td>${item.className}</td>
    //             <td>${item.faculty}</td>
    //             <td>${item.adrress}</td>
    //             <td>${item.phoneNumber}</td>
    //             <td>${item.email}</td>
    //             <td class="d-flex justify-content-evenly">
    //                 <button type="button" class="btn btn-outline-primary btn-details">
    //                     <i class="bi bi-eye"></i>
    //                     Details
    //                 </button>
    //                 <button type="button" class="btn btn-outline-info btn-update"
    //                     style="margin:0 0.5rem 0 0.5rem;">
    //                     <i class="bi bi-arrow-repeat"></i>
    //                     Update
    //                 </button>
    //                 <button type="button" class="btn btn-outline-danger btn-delete"
    //                     data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="">
    //                     <i class="bi bi-trash3"></i>
    //                     Delete
    //                 </button>
    //             </td>
    //         </tr>
    //     )
    // })

    $("tbody").append(htmlTbody)

    document.querySelector('.student-details').classList.remove('student-details-show')

    $('.btn-details').click(() => {
        $('.student-details').addClass('student-details-show')

        $('.btn-add').css('display', 'none')
        $('.btn-reset').css('display', 'none')
    })
}

// js raw
// document.querySelector('.add-new').addEventListener('click', () => {
//     // document.querySelector('.student-details').style.display = "block"
//     document.querySelector('.student-details').classList.add('student-details-show')
// })


// jquery
$('.add-new').click(() => {
    $('.student-details').addClass('student-details-show')
})

document.querySelector('.btn-cancel').addEventListener('click', () => {
    document.querySelector('.student-details').classList.remove('student-details-show')

    $('.btn-add').css('display', 'block')
    $('.btn-reset').css('display', 'block')
})

// document.querySelector('.add-new').addEventListener('blur', () => {
//     document.querySelector('.student-details').classList.remove('student-details-show')

//     document.querySelector('.student-details').addEventListener('click', (e) => {
//         e.stopPropagation();
//     })
// })



// 2. Details 


$('.btn-details').click(() => {
    $('.student-details').addClass('student-details-show')

    $('.btn-add').css('display', 'none')
    $('.btn-reset').css('display', 'none')
})

