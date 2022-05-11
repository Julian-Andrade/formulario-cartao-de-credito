document.querySelector("input#card_number").oninput = () => {
    document.querySelector("div.card_number").innerHTML =
      document.querySelector("input#card_number").value;
  };

  document.querySelector("input#card_holder").oninput = () => {
    document.querySelector("div.card_full_name").innerHTML =
      document.querySelector("input#card_holder").value;
  };

  document.querySelector("select#expiration_month").oninput = () => {
    document.querySelector("p.card_mm").innerHTML = document.querySelector(
      "select#expiration_month"
    ).value;
  };

  document.querySelector("select#expiration_year").oninput = () => {
    document.querySelector("p.card_yy").innerHTML = document.querySelector(
      "select#expiration_year"
    ).value;
  };

  document.querySelector("input#cvv").onmouseenter = () => {
    document.querySelector("div.card_front").style.transform =
      "perspective(1000px) rotateY(-360deg)";
    document.querySelector("div.card_back").style.transform =
      "perspective(1000px) rotateY(0deg)";
  };

  document.querySelector("input#cvv").onmouseleave = () => {
    document.querySelector("div.card_front").style.transform =
      "perspective(1000px) rotateY(0deg)";
    document.querySelector("div.card_back").style.transform =
      "perspective(1000px) rotateY(-180deg)";
  };

  document.querySelector("input#cvv").oninput = () => {
    document.querySelector("div.cvv_box").innerHTML =
      document.querySelector("input#cvv").value;
  };