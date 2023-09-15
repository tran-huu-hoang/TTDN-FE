


// phân trang 
var products = [
    // { img: "../images/xemtatca_sanpham/sp1.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp2.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp3.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp4.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp5.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp6.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp7.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp8.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp9.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp10.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp11.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp12.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp1.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp2.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp3.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp4.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp5.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp6.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp7.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp8.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
    // { img: "../images/xemtatca_sanpham/sp9.png", productName: "BÀN UỐNG NƯỚC", rate: 5, decription: "(Size vừa, nâu đậm)", price: "8.999.000 VNĐ" },
];

products.push(addProducts("../images/xemtatca_sanpham/sp1.png", "BÀN UỐNG NƯỚC 1", 5, "(Size vừa, nâu đậm)", 8999000))
products.push(addProducts("../images/xemtatca_sanpham/sp2.png", "BÀN UỐNG NƯỚC 2", 4, "(Size to, nâu nhạt)", 7999000))
products.push(addProducts("../images/xemtatca_sanpham/sp3.png", "KỆ TV", 2, "(Size vừa, nâu đậm)", 12999000))
products.push(addProducts("../images/xemtatca_sanpham/sp4.png", "TỦ ĐỒ", 5, "(Size to, trắng)", 5999000))
products.push(addProducts("../images/xemtatca_sanpham/sp5.png", "SOFA 1", 1, "(Size to, Ghi đậm)", 15999000))
products.push(addProducts("../images/xemtatca_sanpham/sp6.png", "SOFA 2", 4, "(Size vừa, xanh đậm)", 3999000))
products.push(addProducts("../images/xemtatca_sanpham/sp7.png", "BÀN UỐNG TRÀ", 3, "(Size nhỏ, nâu nhạt)", 4999000))
products.push(addProducts("../images/xemtatca_sanpham/sp8.png", "BÀN PHÒNG KHÁCH", 2, "(Size vừa, nâu đậm)", 12999000))
products.push(addProducts("../images/xemtatca_sanpham/sp9.png", "BÀN UỐNG NƯỚC", 4, "(Size vừa, nâu đậm)", 24999000))
products.push(addProducts("../images/xemtatca_sanpham/sp10.png", "BÀN UỐNG NƯỚC", 1, "(Size vừa, nâu đậm)", 6999000))
products.push(addProducts("../images/xemtatca_sanpham/sp11.png", "BÀN UỐNG NƯỚC", 2, "(Size vừa, nâu đậm)", 7999000))
products.push(addProducts("../images/xemtatca_sanpham/sp12.png", "BÀN UỐNG NƯỚC", 3, "(Size vừa, nâu đậm)", 8999000))
products.push(addProducts("../images/xemtatca_sanpham/sp1.png", "BÀN UỐNG NƯỚC", 2, "(Size vừa, nâu đậm)", 9999000))
products.push(addProducts("../images/xemtatca_sanpham/sp2.png", "BÀN UỐNG NƯỚC", 4, "(Size vừa, nâu đậm)", 3999000))
products.push(addProducts("../images/xemtatca_sanpham/sp3.png", "BÀN UỐNG NƯỚC", 5, "(Size vừa, nâu đậm)", 7999000))
products.push(addProducts("../images/xemtatca_sanpham/sp4.png", "BÀN UỐNG NƯỚC", 2, "(Size vừa, nâu đậm)", 8999000))
products.push(addProducts("../images/xemtatca_sanpham/sp5.png", "BÀN UỐNG NƯỚC", 1, "(Size vừa, nâu đậm)", 12999000))
products.push(addProducts("../images/xemtatca_sanpham/sp6.png", "BÀN UỐNG NƯỚC", 5, "(Size vừa, nâu đậm)", 8999000))
products.push(addProducts("../images/xemtatca_sanpham/sp7.png", "BÀN UỐNG NƯỚC", 4, "(Size vừa, nâu đậm)", 6999000))

function addProducts(img, productName, rate, decription, price) {
    return {
        img: img,
        productName: productName,
        rate: rate,
        decription: decription,
        price: price
    }
}

var products_sub = products;
var curentPage = 1;
var perPage = 8;
var totalPage = Math.ceil(products.length / perPage);
var perProducts = [];

const render = (arr) => {
    var table = "";
    for (let i = 0; i < arr.length; i++) {
        var htmlStar = "";
        for (let j = 0; j < arr[i].rate; j++) {
            htmlStar += `<i class="fa-solid fa-star text-gold"></i>`
        }

        table += `<div class="col-md-3 mt-4 col-sm-6 btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${i}">
    <div class="card">
        <img src="${arr[i].img}" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title text-blue text-center">${arr[i].productName}</h5>
            <span class="d-block text-center">
                ${htmlStar}
            </span>
            <p class="card-text text-center text-secondary">${arr[i].decription}</p>
            <p class="card-text text-center">${arr[i].price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
        </div>
    </div>
</div>`
    }

    $('.render-products').html(table)

    $('.btn-modal').click(function () {
        var modalId = $(this).data('id')
        renderInfor(perProducts[modalId])
    })
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

    $('.page-previous').addClass('disabled')
    if (totalPage == 1) {
        $('.page-next').addClass('disabled')
    }

    $('.page-number').click(function () {
        $('.page-previous').removeClass('disabled')
        $('.page-next').removeClass('disabled')

        curentPage = $(this).data('id')
        perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)

        $('.page-number').removeClass('active')
        $(this).addClass('active')

        if (curentPage == 1) {
            $('.page-previous').addClass('disabled')
        }
        if (curentPage == totalPage) {
            $('.page-next').addClass('disabled')
        }
        render(perProducts)
    })

    $('.page-previous').click(() => {
        if (curentPage == 2) {
            curentPage--;
            $('.page-previous').addClass('disabled')
            $('.page-next').removeClass('disabled')
        }
        else {
            curentPage--;
            $('.page-next').removeClass('disabled')
        }

        perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
        $('.page-number').removeClass('active')
        $(this).addClass('active')
        render(perProducts)
    })

    $('.page-next').click(() => {
        if (curentPage == totalPage - 1) {
            curentPage++;
            $('.page-next').addClass('disabled')
            $('.page-previous').removeClass('disabled')
        }
        else {
            curentPage++;
            $('.page-previous').removeClass('disabled')
        }

        perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
        $('.page-number').removeClass('active')
        $(this).addClass('active')
        render(perProducts)
    })
}


renderPage()

perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
render(perProducts)


// sắp xếp

// 1. mặc định
$('#sortDefault').click(() => {
    products_sub = products
    totalPage = Math.ceil(products_sub.length / perPage)
    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)
    renderPage()
})

// 2. theo đánh giá
$('#sortRate').click(() => {
    products_sub = products.slice()
    totalPage = Math.ceil(products_sub.length / perPage)

    products_sub = products_sub.sort((a, b) => {
        return b.rate - a.rate
    })

    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)
    renderPage()
})

// 3. theo tên
$('#sortName').click(() => {
    products_sub = products.slice()
    totalPage = Math.ceil(products_sub.length / perPage)

    products_sub = products_sub.sort((a, b) => {
        if (a.productName <= b.productName) {
            return -1;
        }
        else {
            return 1;
        }
    })

    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)
    renderPage()
})

// theo giá tăng dần
$('#sortPriceAsc').click(() => {
    products_sub = products.slice()
    totalPage = Math.ceil(products_sub.length / perPage)

    products_sub = products_sub.sort((a, b) => {
        return a.price - b.price
    })

    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)
    renderPage()
})

// theo giá giảm dần
$('#sortPriceDesc').click(() => {
    products_sub = products.slice()
    totalPage = Math.ceil(products_sub.length / perPage)

    products_sub = products_sub.sort((a, b) => {
        return b.price - a.price
    })

    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)
    renderPage()
})

// filter theo giá
$('#duoi5tr').click(() => {
    curentPage = 1;

    products_sub = products
    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)

    products_sub = products_sub.filter((item) => {
        return item.price < 5000000
    });

    totalPage = Math.ceil(products_sub.length / perPage)

    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)
    renderPage()
})

$('#5trden10tr').click(() => {
    curentPage = 1;

    products_sub = products
    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)

    products_sub = products_sub.filter((item) => {
        return item.price > 5000000 && item.price < 10000000
    });

    totalPage = Math.ceil(products_sub.length / perPage)

    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)
    renderPage()
})

$('#10trden15tr').click(() => {
    curentPage = 1;

    products_sub = products
    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)

    products_sub = products_sub.filter((item) => {
        return item.price > 10000000 && item.price < 15000000
    });

    totalPage = Math.ceil(products_sub.length / perPage)

    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)
    renderPage()
})

$('#tren15tr').click(() => {
    curentPage = 1;

    products_sub = products
    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)

    products_sub = products_sub.filter((item) => {
        return item.price > 15000000
    });

    totalPage = Math.ceil(products_sub.length / perPage)

    perProducts = products_sub.slice((curentPage - 1) * perPage, curentPage * perPage)
    render(perProducts)
    renderPage()
})


const renderInfor = (obj) => {
    var table = "";
    var htmlStar = "";
    for (let j = 0; j < obj.rate; j++) {
        htmlStar += `<i class="fa-solid fa-star text-gold"></i>`
    }

    table = `<div class="title h4 text-blue p-2">${obj.productName}</div>
        <div class="product-info d-flex">
            <div class="product-slider" style="width: 60%;">
                <div class="slider-for">
                    <div class="img-box p-2">
                        <img src="${obj.img}" alt="" class="w-100"
                            style="height: 25rem">
                    </div>
                    <div class="img-box p-2">
                        <img src="../images/xemtatca_sanpham/sp2.png" alt="" class="w-100"
                            style="height: 25rem">
                    </div>
                    <div class="img-box p-2">
                        <img src="../images/xemtatca_sanpham/sp3.png" alt="" class="w-100"
                            style="height: 25rem">
                    </div>
                    <div class="img-box p-2">
                        <img src="../images/xemtatca_sanpham/sp4.png" alt="" class="w-100"
                            style="height: 25rem">
                    </div>
                    <div class="img-box p-2">
                        <img src="../images/xemtatca_sanpham/sp5.png" alt="" class="w-100"
                            style="height: 25rem">
                    </div>
                </div>
                <div class="slider-nav">
                    <div class="img-box p-2">
                        <img src="../images/xemtatca_sanpham/sp1.png" alt="" class="w-100">
                    </div>
                    <div class="img-box p-2">
                        <img src="../images/xemtatca_sanpham/sp2.png" alt="" class="w-100">
                    </div>
                    <div class="img-box p-2">
                        <img src="../images/xemtatca_sanpham/sp3.png" alt="" class="w-100">
                    </div>
                    <div class="img-box p-2">
                        <img src="../images/xemtatca_sanpham/sp4.png" alt="" class="w-100">
                    </div>
                    <div class="img-box p-2">
                        <img src="../images/xemtatca_sanpham/sp5.png" alt="" class="w-100">
                    </div>
                </div>
            </div>
            <div class="product-desc p-3" style="width: 40%;">
                <div class="rate h4">
                    Đánh giá:
                    ${htmlStar}
                </div>
                <div class="desc h4 text-secondary pt-4 pb-5">
                    Mô tả: ${obj.decription}
                </div>
                <div class="price text-gold h3">
                    Giá: ${obj.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                </div>
            </div>
        </div>`

    $('#render-modal').html(table)
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });
}