(function () {
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');
    const buttons = document.querySelectorAll('.btn');
    const stars = document.querySelector('.review-icons');
    let index = 0;
    const customers = [];

    //customer constructor
    function Customer(img, name, text, star) {
        this.img = img;
        this.name = name;
        this.text = text;
        this.star = star;
    }

    function createCustomer(img, name, text, star) {
        let fullImg = `./img/customer-${img}.jpg`;
        let customer = new Customer(fullImg, name, text, star);
        customers.push(customer);
    }
    createCustomer(0, 'Fernando', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?', 4)
    createCustomer(1, 'Robert', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock', 2)
    createCustomer(2, 'Kyle', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.', 3)
    createCustomer(3, 'Jack', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.', 4)
    createCustomer(4, 'Wanda', 'At risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus.', 5)
    createCustomer(5, 'Harry', 'Pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet.', 1)

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length;
                }
                stars.innerHTML = '';
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
                for (i = 0; i < customers[index].star; i++) {
                    stars.insertAdjacentHTML("beforeend", `<span class="star-icon">
                    <i class="fas fa-star"></i>
                </span>`);
                }
            }
            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0;
                }
                stars.innerHTML = '';
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
                for (i = 0; i < customers[index].star; i++) {
                    stars.insertAdjacentHTML("beforeend", `<span class="star-icon">
                    <i class="fas fa-star"></i>
                </span>`);
                }
            }
        })
    })

})()