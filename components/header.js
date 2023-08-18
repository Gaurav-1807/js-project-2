const Navbar = ()=>{
    return ` <header class="bg-white">
    <div class="navbar navbar-expand-lg bg-white container mb-4 ">
      <div class="container-fluid ">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          style="margin: 0 auto;">
          <span class="navbar-toggler-icon"></span>
        </button>
        <nav class="collapse navbar-collapse justify-content-center " id="navbarNav">
          <ul class="navbar-nav  fs-6 fw-semibold ">
            <li class="nav-item">
              <a class="nav-link active mx-4" aria-current="page" href="index.html">HOME</a>
            </li>

            <li class="nav-item">
              <a class="nav-link mx-4" href="about.html">ABOUT US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-4" href="product.html">PRODUCT</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link mx-4 " href="shop.html">SHOP</a>

            </li>
            <li class="nav-item">
              <a class="nav-link mx-4" href="signup.html">SIGN UP</a>
            </li>

            <li class="nav-item ">
              <a class="nav-link mx-4  " href="login.html">LOGIN</a>
            </li>


          </ul>
        </nav>
      </div>
    </div>
  </header>`
}
 export default Navbar