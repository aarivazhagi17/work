function MyFunction(){
    alert("Welcome To Order !")


  function changeImageByScreen() {
    const img = document.getElementById("myImage");
    const width = window.innerWidth;

    if (width >= 992 && width >=1012) {
      img.src = "../project/Food Menu1/Cheff2.jpg";   // medium screen image
    } else {
      img.src = "../project/Food Menu1/Cheff1.jpg";  // other screens
    }
  }

  // page load & resize time check
  window.addEventListener("load", changeImageByScreen);
  window.addEventListener("resize", changeImageByScreen);
}
