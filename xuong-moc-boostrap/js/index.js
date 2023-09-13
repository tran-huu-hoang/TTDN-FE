
var products = [
    { img: "../images/xemtatca_sanpham/sp1.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp2.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp3.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp4.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp5.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp6.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp7.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp8.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp9.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp10.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp11.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp12.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp1.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp2.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp3.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp4.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp5.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp6.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp7.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp8.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    { img: "../images/xemtatca_sanpham/sp9.png", productName: "BÀN UỐNG NƯỚC", decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
];

var curentPage = 1;
var perPage = 8;
var totalPage = Math.ceil(products.length / perPage);
var perProducts = [];

const render = (arr) => {
    var table = "";
    for (let i = 0; i < arr.length; i++) {
        table += `<div class="col-md-3 mt-4 col-sm-6">
    <div class="card">
        <img src="${arr[i].img}" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title text-blue text-center">${arr[i].productName}</h5>
            <span class="d-block text-center">
                <i class="fa-solid fa-star text-gold"></i>
                <i class="fa-solid fa-star text-gold"></i>
                <i class="fa-solid fa-star text-gold"></i>
                <i class="fa-solid fa-star text-gold"></i>
                <i class="fa-solid fa-star text-gold"></i>
            </span>
            <p class="card-text text-center text-secondary">${arr[i].decription}</p>
            <p class="card-text text-center">${arr[i].price}</p>
        </div>
    </div>
</div>`
    }

    $('.render-products').html(table)
}

const renderPage = () => {
    var li = "";
    for (let i = 1; i < totalPage; i++) {
        li += `
    <li class="page-item page-number" data-id="${i + 1}">
        <a class="page-link" href="#render">${i + 1}</a>
    </li>`
    }

    var ul = `<ul class="pagination">
    <li class="page-item">
        <a class="page-link page-previous" href="#">Trước</a>
    </li>
    <li class="page-item page-number active" data-id="1">
        <a class="page-link" href="#render">1</a>
    </li>
    ${li}
    <li class="page-item">
        <a class="page-link page-next" href="#">Sau</a>
    </li>
</ul>`

    $('.renderPage').html(ul)
}


renderPage()

perProducts = products.slice((curentPage - 1) * perPage, curentPage * perPage)
render(perProducts)

$('.page-previous').addClass('disabled')

$('.page-number').click(function () {
    $('.page-previous').removeClass('disabled')
    $('.page-next').removeClass('disabled')
    curentPage = $(this).data('id')
    perProducts = products.slice((curentPage - 1) * perPage, curentPage * perPage)
    $('.page-number').removeClass('active')
    $(this).addClass('active')
    if (curentPage == 1) {
        $('.page-previous').addClass('disabled')
    }
    else if (curentPage == totalPage) {
        $('.page-next').addClass('disabled')
    }
    render(perProducts)
})

$('.page-previous').click(() => {
    if (curentPage == 2) {
        curentPage--;
        $('.page-previous').addClass('disabled')
    }
    else {
        curentPage--;
        $('.page-next').removeClass('disabled')
    }
    perProducts = products.slice((curentPage - 1) * perPage, curentPage * perPage)
    $('.page-number').removeClass('active')
    $(this).addClass('active')
    render(perProducts)
})

$('.page-next').click(() => {
    if (curentPage == totalPage - 1) {
        curentPage++;
        $('.page-next').addClass('disabled')
    }
    else {
        curentPage++;
        $('.page-previous').removeClass('disabled')
    }
    perProducts = products.slice((curentPage - 1) * perPage, curentPage * perPage)
    $('.page-number').removeClass('active')
    $(this).addClass('active')
    render(perProducts)
})