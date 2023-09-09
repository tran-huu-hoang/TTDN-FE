
var students = [
    { studentId: "SV001", studentName: "Trần Hữu Hoàng", age: 20, sex: 0, birthDate: "2003-07-14", birthPlace: "HN", adrress: "Số 2, Thôn Xuân Linh" },
    { studentId: "SV002", studentName: "Nguyễn Văn A", age: 25, sex: 0, birthDate: "2000-02-02", birthPlace: "DN", adrress: "Số 16, Đường Hai Bà Trưng" },
    { studentId: "SV003", studentName: "Nguyễn Thị B", age: 24, sex: 1, birthDate: "2009-12-12", birthPlace: "QN", adrress: "Số 8, Tổ 4, Thôn Xuân Trung" },
];

// đóng/mở bảng thông tin
$('.btn-add').click(() => {
    $('.form').addClass('show')
    $('.submit-add').removeClass('not-show')
    $('.submit-update').removeClass('show')

    clear()

    // readonly 
    $('#studentId').attr('readonly', false)
    $('#studentName').attr('readonly', false)
    $('#age').attr('readonly', false)
    $('#sex').attr('disabled', false)
    $('#birthDate').attr('readonly', false)
    $('#birthPlace').attr('disabled', false)
    $('#adrress').attr('readonly', false)
})

$('.submit-close').click(() => {
    $('.form').removeClass('show')
})

// hàm clear 
const clear = () => {
    $('#studentId').val("")
    $('#studentName').val("")
    $('#age').val("")
    $('#sex').val(-1)
    $('#birthDate').val("")
    $('#birthPlace').val(-1)
    $('#adrress').val("")
}

// hàm render 
const render = () => {
    var table = "";

    for (let i = 0; i < students.length; i++) {
        table += `<tr>
    <td>${i + 1}</td>
    <td>${students[i].studentId}</td>
    <td>${students[i].studentName}</td>
    <td>${students[i].age}</td>
    <td>${students[i].sex == 0 ? "Nam" : "Nữ"}</td>
    <td>
        <div class="template-demo">
            <button type="button" class="btn btn-danger btn-icon-text" onclick="handleDetails(${i})">
                Xem
            </button>
            <button type="button" class="btn btn-warning btn-icon-text" onclick="handleUpdate(${i})">
                Sửa
            </button>
            <button type="button" class="btn btn-success btn-icon-text" onclick="handleDelete(${i})">
                Xóa
            </button>
        </div>
    </td>
</tr>`
    }
    $('.render').html(table)
}

// hiển thị thông tin
render()

// thêm
$('.submit-add').click(() => {
    var studentId = $('#studentId').val()
    var studentName = $('#studentName').val()
    var age = $('#age').val()
    var sex = $('#sex').val()
    var birthDate = $('#birthDate').val()
    var birthPlace = $('#birthPlace').val()
    var adrress = $('#adrress').val()

    var item = {
        studentId: studentId,
        studentName: studentName,
        age: age,
        sex: sex,
        birthDate: birthDate,
        birthPlace: birthPlace,
        adrress: adrress,
    }

    students.push(item);
    render()
    clear()
})

// xem
const handleDetails = (id) => {
    $('.form').addClass('show')
    $('.submit-add').addClass('not-show')
    $('.submit-update').removeClass('show')

    $('#studentId').val(students[id].studentId)
    $('#studentName').val(students[id].studentName)
    $('#age').val(students[id].age)
    $('#sex').val(students[id].sex)
    $('#birthDate').val(students[id].birthDate)
    $('#birthPlace').val(students[id].birthPlace)
    $('#adrress').val(students[id].adrress)

    // readonly 
    $('#studentId').attr('readonly', true)
    $('#studentName').attr('readonly', true)
    $('#age').attr('readonly', true)
    $('#sex').attr('disabled', true)
    $('#birthDate').attr('readonly', true)
    $('#birthPlace').attr('disabled', true)
    $('#adrress').attr('readonly', true)
}

// sửa
var updateId;

const handleUpdate = (id) => {
    $('.form').addClass('show')
    $('.submit-add').addClass('not-show')
    $('.submit-update').addClass('show')

    $('#studentId').val(students[id].studentId)
    $('#studentName').val(students[id].studentName)
    $('#age').val(students[id].age)
    $('#sex').val(students[id].sex)
    $('#birthDate').val(students[id].birthDate)
    $('#birthPlace').val(students[id].birthPlace)
    $('#adrress').val(students[id].adrress)

    // readonly 
    $('#studentId').attr('readonly', false)
    $('#studentName').attr('readonly', false)
    $('#age').attr('readonly', false)
    $('#sex').attr('disabled', false)
    $('#birthDate').attr('readonly', false)
    $('#birthPlace').attr('disabled', false)
    $('#adrress').attr('readonly', false)
    updateId = id;
}

$('.submit-update').click(() => {
    students[updateId].studentId = $('#studentId').val()
    students[updateId].studentName = $('#studentName').val()
    students[updateId].age = $('#age').val()
    students[updateId].sex = $('#sex').val()
    students[updateId].birthDate = $('#birthDate').val()
    students[updateId].birthPlace = $('#birthPlace').val()
    students[updateId].adrress = $('#adrress').val()
    render()
})

// xóa
const handleDelete = (id) => {
    var checkDelete = confirm("Bạn có muốn xóa không?")
    if (checkDelete) {
        students.splice(id, 1)
        render()
    }
}