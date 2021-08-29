// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}

const coupons = {
    "JuanDC_es_Batman",
    "pero_no_se_lo_digas_a_nadie",
    "es_un_secreto",
}

function onClickButtonPriceDiscount(onCl) {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;    

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;
    if(!coupons.includes(userCouponsValue)) {
        alert("el cupón " + couponValue + "no es válido");
    } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
    } else if (couponValue === "pero_no_se_lo_digas_a_nadie") {
        descuento = 30;
    } else if (couponValue === "es_un_secreto") {
        descuento = 25;
    }
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });
