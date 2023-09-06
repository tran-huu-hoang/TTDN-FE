

var studentInfo = [
    { studentId: "SD01", fullName: "Nguyễn Thành Hưng", className: 0, faculty: 0, adrress: "Hà Nội", phoneNumber: "0989898222", email: "thanh.hung.st302@gmail.com", dateOfBirth: "01-01-2000", gender: 0 },
    { studentId: "SD02", fullName: "Trần Hữu Hoàng", className: 2, faculty: 1, adrress: "Hà Nội", phoneNumber: "0123456789", email: "hoang@gmail.com", dateOfBirth: "14-07-2003", gender: 0 },
]


const handleClickAdd = () => {
    // studentInfo.fullName = document.querySelector('#Name').value;
    // studentInfo.className = document.querySelector('#Class').value;
    // studentInfo.faculty = document.querySelector('#Faculty').value;
    // studentInfo.address = document.querySelector('#Address').value;
    // studentInfo.phoneNumber = document.querySelector('#PhoneNumber').value;
    // studentInfo.email = document.querySelector('#Email').value;
    // studentInfo.dateBirth = document.querySelector('#DateBirth').value;
    // studentInfo.gender = document.querySelector('#Gender').value;

    var fullName = document.querySelector('#Name').value
    var className = document.querySelector('#Class').value
    var faculty = document.querySelector('#Faculty').value
    var address = document.querySelector('#Address').value
    var phoneNumber = document.querySelector('#PhoneNumber').value
    var email = document.querySelector('#Email').value
    var dateOfBirth = document.querySelector('#DateBirth').value
    var gender = document.querySelector('#Gender').value

    var item = {
        studentId: "",
        fullName: fullName,
        className: className,
        faculty: faculty,
        address: address,
        phoneNumber: phoneNumber,
        email: email,
        dateOfBirth: dateOfBirth,
        gender: gender,
    }

    studentInfo.push(item);

    var htmlTbody = `<tr class="align-middle">
    <th scope="row">1</th>
    <td>SD01</td>
    <td>${fullName}</td>
    <td>${className}</td>
    <td>${faculty}</td>
    <td>${address}</td>
    <td>${phoneNumber}</td>
    <td>${email}</td>
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
        <button type="button" class="btn btn-outline-danger btn-delete"
            data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="">
            <i class="bi bi-trash3"></i>
            Delete
        </button>
    </td>
</tr>`

    document.querySelector('tbody').innerHTML += htmlTbody;
    console.log(studentInfo)
}