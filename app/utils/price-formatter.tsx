const priceFormatter = (price: number) => {
    const newFormatter = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumSignificantDigits: 3,
    });
    return newFormatter.format(price);

}

export default priceFormatter;